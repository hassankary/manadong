export const Section1: React.FC = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex">
      <div className="hidden w-[30%] lg:flex justify-center items-center px-[4%] bg-[#FDD8CD] animate-fade-right animate-duration-700 animate-delay-100">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-5xl text-red-manadong">Manadong</h1>
            <p className="mt-2 text-2xl text-black">
              is a Manado dish with a spicy and appetizing flavour.
            </p>
          </div>
          <h1 className="font-bold text-2xl text-red-manadong">
            #NIkmatnyaGaPakeRibet
          </h1>
          <div className="">
            <button className="p-3 font-bold text-blue-manadong hover:text-white hover:bg-blue-manadong active:scale-95 border border-blue-manadong rounded-md transition-all">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%] animate-fade-down animate-duration-700 animate-delay-100">
        <img
          src={"/assets/banner.jpg"}
          alt="banner-image"
          height={1200}
          width={1700}
          className="object-cover"
        />
      </div>
    </div>
  );
};
