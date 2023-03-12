import React, { useState, useEffect } from "react";
import PlayerList from "./components/PlayerList";
import EditPlayer from "./components/EditPlayer";
import AddPlayer from "./components/AddPlayer";
import DeletePlayer from "./components/DeletePlayer";
import data from "./data/players.json";

function App() {
  const [players, setPlayers] = useState(data.players);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [showEditPlayer, setShowEditPlayer] = useState(false);
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [showDeletePlayer, setShowDeletePlayer] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  const handleDelete = (id) => {
    setPlayerToDelete(id);
    setShowDeletePlayer(true);
  };

  const deletePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
    setShowDeletePlayer(false);
  };

  const handleCancelDelete = () => {
    setShowDeletePlayer(false);
  };

  const handleEdit = (id) => {
    const player = players.find((player) => player.id === id);
    setCurrentPlayer(player);
    setShowEditPlayer(true);
  };

  const editPlayer = (updatedPlayer) => {
    const updatedPlayers = players.map((player) =>
      player.id === updatedPlayer.id ? updatedPlayer : player
    );
    setPlayers(updatedPlayers);
    setCurrentPlayer(null);
    setShowEditPlayer(false);
  };

  const handleCancelEdit = () => {
    setCurrentPlayer(null);
    setShowEditPlayer(false);
  };

  const handleAddPlayer = () => {
    setShowAddPlayer(true);
  };

  const addPlayer = (player) => {
    const newPlayer = {
      id: Math.floor(Math.random() * 1000),
      ...player,
    };
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
    setShowAddPlayer(false);
  };

  const handleCancelAdd = () => {
    setShowAddPlayer(false);
  };

  return (
    <div className="App">
      <h1>Football Team</h1>
      {showDeletePlayer ? (
        <DeletePlayer
          player={players.find((player) => player.id === playerToDelete)}
          deletePlayer={deletePlayer}
          onCancel={handleCancelDelete}
        />
      ) : showEditPlayer ? (
        <EditPlayer
          player={currentPlayer}
          editPlayer={editPlayer}
          onCancel={handleCancelEdit}
        />
      ) : showAddPlayer ? (
        <AddPlayer addPlayer={addPlayer} onCancel={handleCancelAdd} />
      ) : (
        <PlayerList
          players={players}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onAdd={handleAddPlayer}
        />
      )}
    </div>
  );
}

export default App;
