import React, { useState, useEffect, useRef } from "react";
import "./SubscriberForm.css";

export interface SubscriberFormData {
  digestType: string;
  name: string;
  email: string;
}

const initialSubscriberFormData: SubscriberFormData = {
  digestType: "weekly",
  name: "",
  email: "",
};

interface SubscriberFormProps {
  onSubmit: (data: SubscriberFormData) => void;
  isModalOpen: boolean; // New prop added
}

const SubscriberForm: React.FC<SubscriberFormProps> = ({
  onSubmit,
  isModalOpen,
}) => {
  const [formState, setFormState] = useState<SubscriberFormData>(
    initialSubscriberFormData
  );

  const nameInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isModalOpen && nameInputRef.current) {
      setTimeout(() => {
        nameInputRef.current!.focus();
      }, 0);
    }
  }, [isModalOpen]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSubmit(formState); // Pass the form data to the parent component's callback
    // Reset form after submission
    setFormState(initialSubscriberFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="digestType">Digest Type</label>
        <select
          id="digestType"
          name="digestType"
          value={formState.digestType}
          onChange={handleInputChange}
          required
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="form-row">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SubscriberForm;
