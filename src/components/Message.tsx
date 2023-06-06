import { useEffect, useRef } from "react";

type MessageProps = {
  message: string;
  show: boolean;
  onClose: () => void;
};

export default function Message({ message, show, onClose }: MessageProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref.current && show) return ref.current.showModal();

    if (ref.current && !show) return ref.current.close();
  }, [show, ref]);

  return (
    <dialog ref={ref} className="bg-myDarkGrey rounded-lg p-6">
      <div className="flex flex-col gap-5">
        <p className="text-myLightGrey">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="bg-myGreen shadow-xl duration-200 hover:bg-lime-950 hover:fill-myLightGrey hover:text-myLightGrey h-full rounded-full p-1 text-lg"
        >
          OK
        </button>
      </div>
    </dialog>
  );
}
