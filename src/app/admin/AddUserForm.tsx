// AddUserForm.jsx
import React, { useState } from "react";

const AddUserForm = ({ addUser }: { addUser: (user: any) => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime(), // Use a unique ID (can be generated differently in production)
      name: name,
      email: email,
      role: "User", // Set default role as 'User'
    };
    addUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="mb-2 text-lg font-bold">Add New User</h3>
      <div className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 rounded border px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 rounded border px-4 py-2"
          required
        />
        <button
          type="submit"
          className="rounded bg-indigo-500 px-4 py-2 text-white"
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
