import React, { useState } from 'react';

function CreateEntry() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, value }),
      });

      if (response.ok) {
        console.log('Entry created successfully');
        // Clear form fields or show a success message
      } else {
        console.error('Failed to create entry');
      }
    } catch (error) {
      console.error('Error creating entry:', error);
    }
  };

  return (
    <div>
      <h1>Create Entry</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Create Entry</button>
      </form>
    </div>
  );
}

export default CreateEntry;
