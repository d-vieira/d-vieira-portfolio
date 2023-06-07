"use client";
import clipBoard from "@/utils/clipBoard";
import { useRef } from "react";

export default function Phone() {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    clipBoard("5591981307406", () => {
      if (ref.current) {
        ref.current.show();
        setTimeout(() => ref.current?.close(), 1000);
      }
    });
  };

  return (
    <div
      onClick={handleClick}
      title="Clique para copiar o telefone"
      className="flex hover:cursor-copy gap-1 mb-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#BDFF00"
      >
        <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
        <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
      </svg>
      <p className="text-white hover:opacity-50 border-transparent duration-300">
        +55 (91) 98130 - 7406
      </p>
      <dialog
        className="outline-none rounded-xl bg-lime-950 p-2 text-myLightGrey opacity-90 duration-150 -mt-[68px] ml-[45%] max-md:ml-[15%] max-md:-mt-[85px]"
        ref={ref}
      >
        Telefone copiado com sucesso!
      </dialog>
    </div>
  );
}
