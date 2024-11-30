/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

interface DataFooter {
  title: string;
  content: Content[];
  icon: JSX.Element[];
}

interface Content {
  title: string;
  description: string;
}

const dataFooter: DataFooter[] = [
  {
    title: "Contact Us",
    content: [
      { title: "Email", description: "manadong@gmail.com" },
      { title: "Telp", description: "+628111009115" },
    ],
    icon: [
      <IoLogoWhatsapp className="w-5 h-5" />,
      <IoLogoFacebook className="w-5 h-5" />,
      <IoLogoInstagram className="w-5 h-5" />,
    ],
  },
  {
    title: "Available On",
    content: [
      { title: "Grab", description: "Grab Food" },
      { title: "GoFood", description: "GoFood" },
      { title: "ShopeeFood", description: "Shopee Food" },
    ],
    icon: [],
  },
];

export const Footer: React.FC = () => {
  const [isItemVisible, setIsItemVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

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
    <div className="flex justify-center font-sans text-white text-sm bg-blue-manadong">
      <div
        ref={ref}
        className="container xl:max-w-7xl my-10 mx-[18px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          className={`${
            isItemVisible
              ? "animate-fade-up animate-duration-700 animate-delay-100 ease-in-out"
              : "opacity-0"
          } flex flex-col justify-between gap-4`}
        >
          <img
            src={"/assets/logo-navbar.png"}
            alt="logo-navbar"
            height={120}
            width={120}
            className="object-cover"
          />
          <div>© 2023 PT Bogadong Anugerah Indonesia</div>
        </div>
        {dataFooter.map((d, i) => (
          <div
            key={d.title}
            style={{
              animationDelay: `${(i + 2) * 100}ms`,
            }}
            className={`${
              isItemVisible
                ? "animate-fade-up animate-duration-700 animate-delay-100 ease-in-out"
                : "opacity-0"
            }`}
          >
            <div className="mb-4 font-bold">{d.title}</div>
            <div className="flex flex-col gap-2">
              {d.content.map((content, idx) => (
                <div key={idx} className="flex">
                  <div
                    className={`${
                      d.title === "Available On"
                        ? "hidden"
                        : "w-[50px] flex justify-between mr-0.5"
                    }`}
                  >
                    <span className="font-bold">{content.title}</span>:
                  </div>
                  <span>{content.description}</span>
                </div>
              ))}
              {d.title !== "Available On" ? (
                <ul className="flex gap-2">
                  {d.icon.map((icon, idx) => (
                    <li key={idx}>{icon}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
