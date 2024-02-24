import CreateUserForm from "./CreateUserForm";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

export default function CreateUserPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    toast.success("User created successfully!", { autoClose: 2000 });
  };

  const handleError = () => {
    setIsOpen(false);
    toast.error("User creation canceled or error!", { autoClose: 1000 });
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger onClick={() => setIsOpen(true)}>
          {/* Your trigger button */}
          <Plus className="flex flex-row hover:ring-2 hover:ring-offset-1 bg-blue-500 h-12 w-12 justify-center items-center text-gray-200  rounded-full p-2 text-md shadow-md " />
        </DialogTrigger>
        <DialogContent className="mx-auto min-w-[75%]">
          {isOpen && (
              <ToastContainer theme="dark" position="bottom-center" />
            ) && <CreateUserForm onClose={handleClose} onErr={handleError} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
