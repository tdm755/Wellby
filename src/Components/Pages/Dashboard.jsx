import React from "react";
import DashboardHeader from "../Header/DashboardHeader";
import HeroImage from "../../../public/assets/SVG/dashboard-hero.svg";
import LogoutIcon from "../../../public/assets/SVG/logout-icon.svg";
import CheckIcon from "../../../public/assets/images/CheckIcon.svg";
import ProfileIcon from "../../../public/assets/images/ProfileIcon.svg";
import DashboardFormCompo from "../../Utils/DashboardFormCompo";
import BuildingIcon from "../../../public/assets/SVG/building-icon.svg";
import EmployeeIcon from "../../../public/assets/SVG/employee-icon.svg";
import LocationIcon from "../../../public/assets/SVG/location-icon.svg";
import WellByLogo from "../../../public/assets/images/WellByLogo.png";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div
        className="w-[400px] relative bg-[#EEEEEE]"
      >
        <DashboardHeader />

        <div className="h-[467px] overflow-hidden relative rounded-b-[40px] flex items-start justify-center pt-[130px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05]">
          <img className="w-[347px]  mt-2" src={HeroImage} alt="" />
        </div>
        <div className="mx-5 p-5 rounded-lg bg-white shadow-xl absolute top-[270px] left-0 right-0 flex flex-col gap-4">

          {/* Logout BTN */}
          <img src={LogoutIcon} alt="Logout" className="w-8 h-8 cursor-pointer absolute top-4 right-4" />

          {/* Upper Content */}
          <div className=" flex flex-col gap-2">
            <div className="">
              <span className="text-[#3C3C3C] font-semibold">Welcome,</span>
              <h3 className="font-bold text-[21px] text-[#FF9E00]">Nitesh Rajkumar Rathod</h3>
            </div>
            <div className="">
              <p className="text-[#787878] text-sm">Looks like your contact has verified as your
                Emergency Connect. Always keep your Health,
                Medical and Emergency Contact details uopdated.</p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="bg-[#2C9E00] w-7 h-7 border rounded-full flex items-center justify-center"><img className="w-3" src={CheckIcon} alt="" /></div>
              <span className="text-[#3C3C3C] font-semibold text-[15px]">Emergency Contact Verified</span>
            </div>
            <hr className="border  border-[#FF9E00]" />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="bg-[#FF9E00] w-7 h-7 border rounded-full flex items-center justify-center"><img className="w-3" src={ProfileIcon} alt="" /></div>
                <span className="text-[#3C3C3C] font-semibold text-[15px] ">QR Profile Valid Till</span>
              </div>
              <span className="text-[#FF9E00] font-semibold text-[15px]">02, Sept 2025</span>
            </div>
          </div>

        </div>

        <div className="px-5">
          <div className="bg-white rounded-lg p-5 shadow-xl mt-28 mb-5 left-0 right-0 ">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b-[1.5px] border-[#CCCCCC] border-dashed pb-5">
                <img src={BuildingIcon} alt="Company" className="w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-[#FFA500] text-sm ">Company</span>
                  <span className="text-[#3C3C3C] font-medium text-[19px]">Unilever</span>
                </div>
              </div>
              <div className="flex items-center gap-3 border-b-[1.5px] border-[#CCCCCC] border-dashed pb-5">
                <img src={EmployeeIcon} alt="Employee ID" className="w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-[#FFA500] text-sm ">Employee ID</span>
                  <span className="text-[#3C3C3C] font-medium text-[19px]">129588</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={LocationIcon} alt="Official Email ID" className="w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-[#FFA500] text-sm">Official Email ID</span>
                  <span className="text-[#3C3C3C] font-medium text-[19px]">nitesh@unilever.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <DashboardFormCompo
              title={'Personal Details'}
              path={'personaldetails'}
              inputs={[
                <input type="text" />,
                <input type="text" />
              ]}
            />
          </div>
        </div>




        <div className="border-b-2 border-[#FF9E00] my-10 mx-5"></div>
        <div className="w-full flex flex-col items-center justify-center mt-10 mb-2 gap-2">
          <img className='w-56' src={WellByLogo} alt="" />
          <div className="h-1 flex items-center justify-center w-full">
            <div
              className="w-[90%] h-full"
              style={{
                backgroundImage: 'linear-gradient(to right, #A0A0A0 50%, transparent 50%)',
                backgroundSize: '10px 1.2px',
                backgroundRepeat: 'repeat-x'
              }}
            >
            </div>
          </div>
          <p className='text-xs md:text-sm'>Powered by: <span className='font-semibold'>Wellby Solutions Pvt. Ltd.</span></p>
        </div>


      </div>
    </div>
  );
}

export default Dashboard;
