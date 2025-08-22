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
      <img {...image} className="w-20" />
      <h1 className="text-2xl text-stone-100 font-extrabold">{title}</h1>
    </header>
  );
}
