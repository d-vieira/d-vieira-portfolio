type navSeederProps = {
  name: string;
};

export default function NavSeeder({ name }: navSeederProps) {
  return (
    <li key={name}>
      <a
        href={"/#" + name}
        className="scroll-smooth opacity-100 hover:opacity-50 border-transparent duration-300"
      >
        {name}
      </a>
    </li>
  );
}
