// UserForm.tsx
import React from "react";
import { UserData } from "@/types/types";

interface UserFormProps {
  formData: UserData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const UserForm: React.FC<UserFormProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit} className="dark:text-slate-900 text-slate-900">
    <input type="hidden" name="id" value={formData.id} />
    <input
      className="dark:text-slate-900 dark:bg-slate-300 p-2 rounded-md mt-2"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Name"
    />
    <input
      className="dark:text-slate-900 dark:bg-slate-300 p-2 rounded-md mt-2"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="Email"
    />
    <input
      className="dark:text-slate-900 dark:bg-slate-300 p-2 rounded-md mt-2"
      name="username"
      value={formData.username}
      onChange={handleInputChange}
      placeholder="Username"
    />
    <input
      className="dark:text-slate-900 dark:bg-slate-300 p-2 rounded-md mt-2"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      placeholder="Phone"
    />
    <input
      className="dark:text-slate-900 dark:bg-slate-300 p-2 rounded-md mt-2"
      name="avatar"
      value={formData.avatar}
      onChange={handleInputChange}
      placeholder="Avatar URL"
    />
    <p>
      <button
        className="mt-2 rounded-md text-slate-100 dark:bg-blue-600 min-w-[72px] p-2"
        type="submit"
      >
        Submit
      </button>
    </p>
  </form>
);

export default UserForm;
