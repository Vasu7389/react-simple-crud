import { useState } from "react";

function AddPlayer({ addPlayer, onCancel }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  function handleNationalityChange(e) {
    setNationality(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addPlayer({
      name,
      position,
      nationality,
      age: Number(age),
    });
    setName("");
    setPosition("");
    setNationality("");
    setAge("");
  }

  return (
    <div>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={handlePositionChange} />
        </div>
        <div>
          <label>Nationality:</label>
          <input
            type="text"
            value={nationality}
            onChange={handleNationalityChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={handleAgeChange} />
        </div>
        <button type="submit">Add</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddPlayer;
