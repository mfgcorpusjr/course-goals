type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
};

export default function Header({ image, title }: HeaderProps) {
  return (
    <header className="flex flex-col justify-center items-center gap-4">
      <img {...image} className="w-20 rounded-full" />
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
