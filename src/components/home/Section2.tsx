/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { CardMenu } from "./CardMenu";

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
  const [isItemVisible, setIsItemVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isItemVisible) {
          setIsItemVisible(true);
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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
          <div
            className={`${
              isItemVisible
                ? "animate-fade-right animate-duration-700 animate-delay-100 ease-in-out"
                : "opacity-0"
            }`}
          >
            <h1 className="font-bold text-3xl sm:text-4xl text-blue-manadong">
              Our Menu
            </h1>
            <div className="w-[65px] h-1 mt-2 bg-red-manadong" />
          </div>
          <div
            ref={ref}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4`}
          >
            {ourMenu.map((d, i) => (
              <div
                key={d.id}
                style={{
                  animationDelay: `${(i + 1) * 100}ms`,
                }}
                className={`${
                  isItemVisible
                    ? "animate-fade-up animate-duration-700 ease-in-out"
                    : "opacity-0"
                }`}
              >
                <CardMenu
                  onClick={() => handleClick(d)}
                  image={d.image}
                  title={d.title}
                />
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
