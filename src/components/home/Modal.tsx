import { IoClose } from "react-icons/io5";

interface ModalProps {
  onClick: () => void;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { onClick, image, title, description, price } = props;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-background") {
      onClick();
    }
  };

  return (
    <div
      id="modal-background"
      onClick={handleOutsideClick}
      className="z-40 fixed w-screen h-screen top-0 flex justify-center items-center bg-black/70"
    >
      <div className="relative flex flex-col justify-center items-center m-2 bg-white rounded-xl overflow-hidden">
        <button
          onClick={onClick}
          className="absolute top-2 right-2 p-2 bg-white hover:bg-transparent active:scale-90 rounded-full transition-all"
        >
          <IoClose className="h-5 w-5" />
        </button>
        <img
          src={image}
          alt={`${title}-image`}
          height={400}
          width={500}
          className="max-w-[400px] object-cover"
        />
        <div className="w-full p-5 pt-4 space-y-2">
          <h1 className="flex justify-start items-center gap-1.5 font-semibold text-xl text-blue-manadong">
            {title}
            {title === "Ayam Rica" ? (
              <span className="h-3.5 flex items-center justify-center font-bold text-[8px] text-red-manadong border-2 border-red-manadong">
                NEW
              </span>
            ) : null}
          </h1>
          <p>{description}</p>
          <p className="font-semibold text-red-manadong">
            Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </div>
  );
};
