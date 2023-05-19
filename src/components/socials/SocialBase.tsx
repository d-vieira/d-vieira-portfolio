export type SocialBaseProps = {
  children?: React.ReactNode;
  x?: number;
  y?: number;
};

export default function SocialBase({ children }: SocialBaseProps) {
  return <span>{children}</span>;
}
