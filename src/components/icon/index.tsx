interface IconProps {
  name: string;
  filled?: boolean;
}

export default function Icon({ name, filled }: IconProps) {
  return (
    <span className={`material-symbols-rounded${filled ? " filled" : ""}`}>
      {name}
    </span>
  );
}
