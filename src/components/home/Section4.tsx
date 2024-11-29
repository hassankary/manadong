import { FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";

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
];

export const Section4: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-20 bg-blue-200">
      <div className="container xl:max-w-7xl mx-5 space-y-10">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl text-blue-manadong">
            Reviews
          </h1>
          <div className="w-[65px] h-1 mt-2 bg-red-manadong" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((d) => (
            <div
              key={d.id}
              className="relative flex gap-4 p-8 bg-white border rounded-lg shadow-lg"
            >
              <FaQuoteRight className=" h-5 w-5 absolute top-2 left-2 text-yellow-400" />
              <FaQuoteLeft className=" h-5 w-5 absolute bottom-2 right-2 text-yellow-400" />
              <div className="flex flex-col justify-start gap-2">
                <h1 className="font-semibold text-blue-manadong sm:text-lg">
                  {d.username}
                </h1>
                <p className="text-sm">{d.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
