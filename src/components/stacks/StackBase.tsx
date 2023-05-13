import { clsx } from "clsx";

export type stackBaseProp = {
  children?: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
};

export default function StackBase({ children, className }: stackBaseProp) {
  return <span className={clsx(className)}>{children}</span>;
}
