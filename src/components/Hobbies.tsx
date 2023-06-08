import MusicIcon from "./icons/MusicIcon";

export default function Hobbies() {
  return (
    <div className="flex-1 pt-2 pb-20 flex flex-col items-center text-center text-myDarkGrey border rounded-sm drop-shadow-md shadow-md max-md:px-5 max-md:w-72">
      <MusicIcon />
      <h4 className="font-bold text-3xl">HOBBIES</h4>
      <p>
        Música, Jogos, Live Streamings, Lazer em família, <br />
        Esportes, Podcasts, Séries, Filmes
      </p>
    </div>
  );
}
