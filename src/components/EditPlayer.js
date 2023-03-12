import React, { useState } from "react";

const EditPlayer = ({ player, editPlayer, onCancel }) => {
  const [name, setName] = useState(player.name);
  const [position, setPosition] = useState(player.position);
  const [age, setAge] = useState(player.age);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePositionChange = (e) => setPosition(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      id: player.id,
      name,
      position,
      age,
    };
    editPlayer(updatedPlayer);
  };

  return (
    <div>
      <h2>Edit Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={handlePositionChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPlayer;