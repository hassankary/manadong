import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "./CarouselDotButton";
import { GoDotFill } from "react-icons/go";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="w-full flex justify-center mt-5 sm:mt-8 gap-1 text-white">
          {scrollSnaps.map((_, index) => (
            <button key={index} onClick={() => onDotButtonClick(index)}>
                <GoDotFill className={`${index === selectedIndex && "text-blue-manadong"} w-5 h-5 transition-all`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
