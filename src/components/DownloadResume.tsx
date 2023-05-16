"use client";
import Download from "./icons/Download";
import { saveAs } from "file-saver";

/* >>>>> FILE FROM A PATH VERSION */
export default function DownloadResume() {
  const handleClick = () => {
    const filename = "mahoe.txt";
    const fileURL = "download-dev-file.txt";

    fetch(fileURL)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, filename))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <button
      className="gap-1 flex flex-1 justify-center items-center bg-myGreen duration-200 hover:fill-myLightGrey hover:bg-zinc-900 hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10"
      title="Baixar Currículo"
      onClick={handleClick}
    >
      CURRÍCULO
      <Download />
    </button>
  );
}
/* >>>>> DIRECT TEXT VERSION */
// export default function DownloadResume() {
//   const handleClick = () => {
//     const filename = "resume.txt";
//     const fileContent = "This is the content of the resume file.";

//     const blob = new Blob([fileContent], { type: "text/plain" });
//     saveAs(blob, filename);
//   };

//   return (
//       <button
//         className="gap-1 flex flex-1 justify-center items-center bg-myGreen duration-200 hover:fill-myLightGrey hover:bg-zinc-900 hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10"
//         title="Baixar Currículo"
//         onClick={handleClick}
//       >
//         CURRÍCULO
//         <Download />
//       </button>
//   );
// }