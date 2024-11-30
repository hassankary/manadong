/* eslint-disable react-hooks/exhaustive-deps */
import { FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "../ui/Carousel";
import { useEffect, useRef, useState } from "react";

interface Reviews {
  id: string;
  username: string;
  feedback: string;
}

const reviews: Reviews[] = [
  {
    id: "1",
    username: "A***a",
    feedback: "Cakalangnya terbaikkkkkkkkkk, the best cakalang everrrrrrr",
  },
  {
    id: "2",
    username: "Nadia",
    feedback:
      "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu banget kalo lg kepepet gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab >.<",
  },
  {
    id: "3",
    username: "Jennifer",
    feedback:
      "Such a good value for your money. Really good Manadonese food. Well recommended!Such a good value for your money. Really good Manadonese food. Well recommended!",
  },
  {
    id: "4",
    username: "Joan",
    feedback: "Really good Manadonese food. Well recommended guyyys!!!!!!!!",
  },
  {
    id: "5",
    username: "Salsa",
    feedback:
      "Enak banget parah. Menunya juga banyak ga ngebosenin. Bakal langganann nih kedepannya :-D",
  },
];

const slides = reviews.map((d) => (
  <div
    key={d.id}
    className="relative h-full flex gap-4 p-8 bg-white border rounded-lg shadow-lg"
  >
    <FaQuoteRight className="h-5 w-5 absolute top-2 left-2 text-yellow-400" />
    <FaQuoteLeft className="h-5 w-5 absolute bottom-2 right-2 text-yellow-400" />
    <div className="flex flex-col justify-start gap-2">
      <h1 className="font-semibold text-blue-manadong sm:text-lg">
        {d.username}
      </h1>
      <p className="text-sm">{d.feedback}</p>
    </div>
  </div>
));

export const Section4: React.FC = () => {
  const [isItemVisible, setIsItemVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const OPTIONS: EmblaOptionsType = { align: "start" };

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
    <div className="w-full flex justify-center py-20 px-5 bg-blue-200">
      <div className="container xl:max-w-7xl flex flex-col space-y-10">
        <div
          className={`${
            isItemVisible
              ? "animate-fade-right animate-duration-700 animate-delay-100 ease-in-out"
              : "opacity-0"
          }`}
        >
          <h1 className="font-bold text-3xl sm:text-4xl text-blue-manadong">
            Reviews
          </h1>
          <div className="w-[65px] h-1 mt-2 bg-red-manadong" />
        </div>
        <div
          ref={ref}
          className={`${
            isItemVisible
              ? "animate-fade-up animate-duration-700 animate-delay-100 ease-in-out"
              : "opacity-0"
          }`}
        >
          <Carousel slides={slides} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};
