interface CardMenuProps {
  onClick: () => void;
  image: string;
  title: string;
}

export const CardMenu: React.FC<CardMenuProps> = (props) => {
  const { onClick, image, title } = props;

  return (
    <div onClick={onClick} className="space-y-2 cursor-pointer">
      <div className="flex rounded-md overflow-hidden">
        <img
          src={image}
          alt={`${title}-image`}
          height={400}
          width={350}
          className="object-cover"
        />
      </div>
      <h1 className="flex justify-center items-center gap-1.5 font-semibold sm:text-lg text-center">
        {title}
        {title === "Ayam Rica" ? (
          <span className="h-3.5 flex items-center justify-center font-bold text-[8px] text-red-manadong border-2 border-red-manadong">
            NEW
          </span>
        ) : null}
      </h1>
    </div>
  );
};
