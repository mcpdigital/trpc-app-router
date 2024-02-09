"use client";
import React, { useState } from "react";
import NewsletterModal from "@/components/NewsletterModal/NewsletterModal";

const ModalDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsletterData, setNewsletterData] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    setNewsletterData(data);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Newsletter Form (Modal)</button>
      {newsletterData && (
        <div>
          <p>
            {newsletterData.email} requested a {newsletterData.digestType}{" "}
            newsletter.
          </p>
        </div>
      )}
      <NewsletterModal
        isOpen={isModalOpen}
        onSubmit={handleFormSubmit}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ModalDemo;
