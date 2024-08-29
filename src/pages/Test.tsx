import { useEffect, useState } from "react";
import TaskFormModal from "../components/TaskFormModal";

export default function Test() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleModal() {
    setModalOpen(!modalOpen);
  }

  function handleOutsideClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest("[data-exclude-click]")) {
      setModalOpen(false);
    }
    if(clickedElement.closest('[data-cancel]')){
      setModalOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
  }, []);
  return (
    <div className="flex w-full justify-center bg-white h-screen">
      <div data-exclude-click onClick={handleModal}>
        Click Modal
      </div>
      <TaskFormModal modalOpen={modalOpen} />
    </div>
  );
}
