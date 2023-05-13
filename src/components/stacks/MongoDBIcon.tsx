import StackBase, { stackBaseProp } from "./StackBase";

export default function MongoDBIcon({ x, y }: stackBaseProp) {
  return (
    <StackBase>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={x}
        height={y}
        viewBox="0 0 24 24"
        fill="#00684A"
      >
        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48z"></path>
      </svg>
    </StackBase>
  );
}
