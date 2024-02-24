import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import CreateUserForm from "./CreateUserForm";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function CreateUserPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    toast.success("User created successfully!", { autoClose: 2000 });
  };

  const handleError = () => {
    setIsOpen(true);
    toast.error("User creation error!", { autoClose: 2000 });
  };

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTrigger onClick={() => setIsOpen(true)}>
          {/* Your trigger button */}
          <span className="flex flex-row mt-2  bg-blue-500 text-gray-200  rounded-lg p-2 text-sm shadow-lg ">
            Create User
          </span>
        </DialogTrigger>

        <DialogContent>
          {isOpen && (
              <ToastContainer theme="dark" position="bottom-center" />
            ) && <CreateUserForm onClose={handleClose} onErr={handleError} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
