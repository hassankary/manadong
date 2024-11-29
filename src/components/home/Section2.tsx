import { useEffect, useState } from "react";
import { Modal } from "./Modal";

interface MenuItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

const ourMenu: MenuItem[] = [
  {
    id: "1",
    image: "/assets/item-menu-1.jpg",
    title: "Cakalang Tinorasak",
    description: "Steamed rice and 2 pieces of cakalang tinorasak",
    price: 40000,
  },
  {
    id: "2",
    image: "/assets/item-menu-2.jpg",
    title: "Ayam Rica",
    description: "Steamed rice and 2 pieces of Ayam Rica",
    price: 41000,
  },
  {
    id: "3",
    image: "/assets/item-menu-3.jpg",
    title: "Perkedel Jagung",
    description: "Steamed rice and 2 pieces of perkedel jagung",
    price: 42000,
  },
  {
    id: "4",
    image: "/assets/item-menu-4.jpg",
    title: "Cumi Hitam",
    description: "Steamed rice and 2 pieces of cumi hitam",
    price: 43000,
  },
  {
    id: "5",
    image: "/assets/item-menu-5.jpg",
    title: "Ayam Woku",
    description: "Steamed rice and 2 pieces of ayam woku",
    price: 44000,
  },
  {
    id: "6",
    image: "/assets/item-menu-6.jpg",
    title: "Lauk Frozen",
    description: "Steamed rice and 2 pieces of lauk frozen",
    price: 45000,
  },
  {
    id: "7",
    image: "/assets/item-menu-7.jpg",
    title: "Cakalang Rabe",
    description: "Steamed rice and 2 pieces of cakalang rabe",
    price: 46000,
  },
];

export const Section2: React.FC = () => {
  const [showModal, setShowModal] = useState<MenuItem | null>(null);

  const handleClick = (data: MenuItem) => {
    setShowModal(data);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <Modal
          onClick={closeModal}
          image={showModal.image}
          title={showModal.title}
          description={showModal.description}
          price={showModal.price}
        />
      ) : null}
      <div className="w-full flex justify-center py-20 ">
        <div className="container xl:max-w-7xl mx-5 space-y-10">
          <div>
            <h1 className="font-bold text-3xl sm:text-4xl text-blue-manadong">
              Our Menu
            </h1>
            <div className="w-[65px] h-1 mt-2 bg-red-manadong" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ourMenu.map((d) => (
              <div
                onClick={() => handleClick(d)}
                key={d.id}
                className="space-y-2 cursor-pointer"
              >
                <div className="flex rounded-md overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.title}-image`}
                    height={400}
                    width={350}
                    className="object-cover"
                  />
                </div>
                <h1 className="flex justify-center items-center gap-1.5 font-semibold sm:text-lg text-center">
                  {d.title}
                  {d.title === "Ayam Rica" ? (
                    <span className="h-3.5 flex items-center justify-center font-bold text-[8px] text-red-manadong border-2 border-red-manadong">
                      NEW
                    </span>
                  ) : null}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="px-3 py-2 font-bold text-blue-manadong hover:text-white hover:bg-blue-manadong active:scale-95 border border-blue-manadong rounded-md transition-all">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
