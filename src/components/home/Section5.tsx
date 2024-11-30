/* eslint-disable react-hooks/exhaustive-deps */
import { GrLocation } from "react-icons/gr";
import { BsCursor } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

interface Locations {
  id: string;
  district: string;
  details: string;
}

const locations: Locations[] = [
  {
    id: "1",
    district: "Senopati, Petogogan",
    details:
      "Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan",
  },
  {
    id: "2",
    district: "Kebon Jeruk / Tanjung Duren",
    details:
      "Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat",
  },
  {
    id: "3",
    district: "Food Plaza PIK",
    details: "Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara",
  },
  {
    id: "4",
    district: "Kuningan - D'Kanteen",
    details: "D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920",
  },
  {
    id: "5",
    district: "Bintaro, Thelapan Square",
    details: "Jl. Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten",
  },
  {
    id: "6",
    district: "Gading Serpong",
    details:
      "Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No.25, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810",
  },
  {
    id: "7",
    district: "Cipete",
    details: "Jl. Cipete Raya No.74c, RW.3, Cipete Jakarta Selatan 12410",
  },
  {
    id: "8",
    district: "Menteng",
    details: "Jl. H. Agus Salim No.60, Menteng, Jakarta Pusat 10350",
  },
];

export const Section5: React.FC = () => {
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
            Locations
          </h1>
          <div className="w-[65px] h-1 mt-2 bg-red-manadong" />
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {locations.map((d, i) => (
            <div
              key={d.id}
              style={{
                animationDelay: `${(i + 1) * 100}ms`,
              }}
              className={`${
                isItemVisible
                  ? "animate-fade-up animate-duration-700 ease-in-out"
                  : "opacity-0"
              } flex gap-4 p-4 border rounded-lg shadow-lg`}
            >
              <div className="flex items-center">
                <div className="p-2 bg-red-200 rounded-lg">
                  <GrLocation className="h-6 w-6 text-red-manadong" />
                </div>
              </div>
              <div className="flex flex-col justify-start gap-2">
                <h1 className="font-semibold text-blue-manadong sm:text-lg">
                  {d.district}
                </h1>
                <p className="text-sm">{d.details}</p>
                <button className="w-fit flex items-center gap-1 font-semibold text-red-manadong border-b border-red-manadong">
                  <BsCursor />
                  <h1>View Map</h1>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
