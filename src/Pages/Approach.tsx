import { useState } from "react";
import { IoFlashOutline } from "react-icons/io5";

const Approach = () => {
  const [showApproach, setShowApproach] = useState(1);

  const points = [
    {
      id: 1,
      painpoint: "Lack of transparency",
      approach: `By providing real-time updates and a transparent ledger, Ajo ensures
              that all contributions and disbursements are visible to every member
              of the pool. This eliminates any doubts and builds trust among users.`,
    },
    {
      id: 2,
      painpoint: "Potential loss of funds by ajo collectors",
      approach: `Ajo uses a secure payment gateway to ensure that all transactions are
              secure. This ensures that funds are not lost to fraudsters or hackers.`,
    },
    {
      id: 3,
      painpoint: "Delayed disbursements",
      approach: `Ajo ensures that all disbursements are made promptly to avoid delays.
              This ensures that users can access their funds when they need them.`,
    },
    {
      id: 4,
      painpoint: "Limited inclusivity",
      approach: `Ajo is designed to be inclusive and accessible to everyone. The platform
              is user-friendly and available on both web and mobile devices, making it
              easy for anyone to join and participate in ajo pools.`,
    },
  ];

  const handleShowApproach = (id: number) => {
    setShowApproach(id);
  };

  return (
    <div className="bg-[#4B3737] ">
      <div className="lg:p-24 bg-white rounded-t-[2rem] p-10 relative lg:block flex flex-col justify-center items-center">
        <div className="">
          <h2 className="text-[26px] font-extrabold text-[#0D290A]">
            Pain Points <span className="lg:hidden">&</span>
            <br />{" "}
            <span className="lg:hidden relative bottom-3 font-[600] text-[20px]">
              {" "}
              Our Approach
            </span>
          </h2>
          <div className="flex flex-col gap-4 mt-5 ">
            {points.map((point) => (
              <div
                className="flex lg:flex-row flex-col justify-between"
                key={point.id}
                onClick={() => handleShowApproach(point.id)}
              >
                <div
                  className={` cursor-pointer lg:w-[400px] w-full flex items-center p-4 h-[50px] text-sm ${
                    showApproach === point.id
                      ? "text-white bg-[#3a3a3a] rounded-t-[15px] lg:rounded-[10px]"
                      : "text-[#3a3a3a] bg-[#e8e8e8] rounded-[10px] "
                  }
               hover:text-white hover:bg-[#3a3a3a] transition-all duration-500 `}
                >
                  <p className="text-[16px]">{point.painpoint}</p>
                </div>

                <div
                  className={`${
                    showApproach === point.id
                      ? "block lg:absolute top-[5.1rem] right-16"
                      : "hidden"
                  }`}
                >
                  <h2 className="text-[26px] hidden lg:block font-extrabold text-[#0D290A]">
                    Our Approach
                  </h2>
                  <div className="bg-[#c3b1e1] mt-0 rounded-b-[15px]  lg:mt-5 lg:w-[400px] w-full p-6 lg:rounded-[15px] gap-6 flex flex-col items-start justify-start h-fit ">
                    <div className="bg-[#fdfd96] p-3 rounded-md flex items-center justify-center">
                      <IoFlashOutline className="text-[#292D32] border  border-[#292D32] w-7 h-7 rounded-full p-1" />
                    </div>
                    <p className="text-[16px]">{point.approach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
