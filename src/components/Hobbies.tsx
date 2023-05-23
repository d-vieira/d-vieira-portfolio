import MusicIcon from "./icons/MusicIcon";

export default function Hobbies() {
  return (
    <div className="text-myDarkGrey border rounded-sm drop-shadow-md shadow-md pb-20 pt-2 w-1/3 grid justify-items-center text-center max-md:w-72 max-md:px-5">
      <MusicIcon />
      <h2 className="font-bold text-3xl">HOBBIES</h2>
      <p>
        Música, Jogos, Live Streamings, Lazer em família, <br />
        Esportes, Podcasts, Séries, Filmes
      </p>
    </div>
  );
}
