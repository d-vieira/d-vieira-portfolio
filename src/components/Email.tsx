"use client";
import clipBoard from "@/utils/clipBoard";
import { useRef } from "react";

export default function Email() {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    clipBoard("dann-vieira@hotmail.com", () => {
      if (ref.current) {
        ref.current.show();
        setTimeout(() => ref.current?.close(), 1000);
      }
    });
  };

  return (
    <div
      onClick={handleClick}
      title="Clique para copiar o email"
      className="flex hover:cursor-copy gap-1 mb-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#BDFF00"
      >
        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
      </svg>
      <p className="text-white hover:opacity-50 border-transparent duration-300">
        dann-vieira@hotmail.com
      </p>
      <dialog
        className="rounded-xl bg-lime-950 p-2 text-myLightGrey opacity-90 duration-150 -mt-10 ml-[45%] max-md:ml-[15%] max-md:-mt-14"
        ref={ref}
      >
        Email copiado com sucesso!
      </dialog>
    </div>
  );
}
