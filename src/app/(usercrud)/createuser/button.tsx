"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import CreateUserForm from "@/components/appui/CreateUserForm";
import { useState } from "react";

export default function CreateUserPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger onClick={() => setIsOpen(true)}>
          {/* Your trigger button */}
          <span className="bg-blue-500 text-gray-200 rounded-lg hover:cursor-pointer">
            Create User
          </span>
        </DialogTrigger>
        <DialogContent>
          {isOpen && <CreateUserForm onClose={handleClose} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
