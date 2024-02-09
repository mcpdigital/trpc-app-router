// UserForm.tsx
import React, { useState } from "react";

export interface UserFormData {
  name: string;
  email: string;
  username: string;
  phone: string;
  avatar: string;
}

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
  isModalOpen: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, isModalOpen }) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    username: "",
    phone: "",
    avatar: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <input
        name="avatar"
        value={formData.avatar}
        onChange={handleInputChange}
        placeholder="Avatar URL"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
