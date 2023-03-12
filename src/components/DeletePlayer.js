import React from "react";

const DeletePlayer = ({ player, deletePlayer, onCancel }) => {
  const handleDelete = () => {
    deletePlayer(player.id);
  };

  return (
    <div>
      <h2>Delete Player</h2>
      <p>Are you sure you want to delete {player.name}?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeletePlayer;
