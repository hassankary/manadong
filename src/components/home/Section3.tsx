interface Promo {
  id: string;
  image: string;
  title: string;
  description: string;
}

const promo: Promo[] = [
  {
    id: "1",
    image: "/assets/promo-1.png",
    title: "Buy 2 Get 1",
    description: "Buy 2 and get 1 free, applicable to select variants.",
  },
  {
    id: "2",
    image: "/assets/promo-2.png",
    title: "Discount 20%",
    description:
      "Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50,000.",
  },
  {
    id: "3",
    image: "/assets/promo-3.png",
    title: "Bundle Deal",
    description:
      "Purchase Ayam Woku and Ayam Rica can save 20% on the total cost.",
  },
];

export const Section3: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-20 bg-[#FDD8CD]">
      <div className="container xl:max-w-7xl mx-5 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[30%] flex flex-col justify-center">
          <h1 className="font-bold text-3xl sm:text-4xl text-blue-manadong">
            Promotion
          </h1>
          <div className="w-[65px] h-1 mt-2 bg-red-manadong" />
        </div>
        <div className="lg:w-[70%] grid grid-cols-2 sm:grid-cols-3 gap-4">
          {promo.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="flex justify-center">
                <img
                  src={d.image}
                  alt={`${d.title}-image`}
                  height={200}
                  width={200}
                  className="w-full object-cover"
                />
              </div>
              <div className="px-5 py-4 space-y-2">
                <h1 className="font-semibold text-blue-manadong sm:text-lg">
                  {d.title}
                </h1>
                <p className="flex flex-wrap text-sm">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
