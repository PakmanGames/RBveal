import {
  FaPrint,
  FaFileAlt,
  FaBell,
  FaGift,
  FaUniversity,
} from "react-icons/fa";

const Summary = ({name}) => {
  console.log(name)
  return (
    <div
      className="flex justify-center items-end pb-8 h-56"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('/mountains.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-3/5 h-1/5 flex flex-row text-white items-center justify-center">
        <div className="w-3/5">
          <h1 className="text-3xl">Accounts Summary</h1>
          <h2 className="text-xl">Good Evening, {name}</h2>
        </div>
        <div className="text-sm flex flex-row w-2/5 text-center justify-end">
          <div className="flex flex-col items-center justify-center">
            <a href="" className="flex flex-col items-center w-24 space-y-2">
              <FaFileAlt size={20} />
              <span>Statements/ Documents</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="" className="flex flex-col items-center w-24 space-y-2">
              <FaBell size={20} />
              <span>Messages/ Alerts</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="" className="flex flex-col items-center w-24 space-y-2">
              <FaGift size={20} />
              <span>Offers</span>
              <span className="">For You</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="" className="flex flex-col items-center w-24 space-y-2">
              <FaUniversity size={20} />
              <span>Beyond Banking</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="" className="flex flex-col items-center w-24 space-y-2">
              <FaPrint size={20} />
              <span>Print</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Summary;
