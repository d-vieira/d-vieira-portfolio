import Download from "./icons/Download";

export default function DownloadResume() {
  return (
    <div className="flex-1">
      <a
        href="download-dev-file.txt"
        className="gap-1 flex justify-center items-center bg-myGreen duration-200 hover:fill-myLightGrey hover:bg-zinc-900 hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10"
        target="_blank"
        download="deu-certo-de-novo"
        title="Baixar Currículo"
      >
        CURRÍCULO
        <Download />
      </a>
    </div>
  );
}
