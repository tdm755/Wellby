import React from "react";
import DefaultBackground from "../../../public/assets/images/default-background.png";
import DashboardHeader from "../Header/DashboardHeader";
import HeroImage from "../../../public/assets/SVG/dashboard-hero.svg";
import LogoutIcon from "../../../public/assets/SVG/logout-icon.svg";
import CheckIcon from "../../../public/assets/images/CheckIcon.svg";
import ProfileIcon from "../../../public/assets/images/ProfileIcon.svg";
import BuildingIcon from "../../../public/assets/SVG/building-icon.svg";
import EmployeeIcon from "../../../public/assets/SVG/employee-icon.svg";
import LocationIcon from "../../../public/assets/SVG/location-icon.svg";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div
        className="w-[400px] relative"
        style={{ backgroundImage: `url(${DefaultBackground})` }}
      >
        <DashboardHeader />
        <div className="h-[467px] overflow-hidden relative rounded-b-[40px] pt-[130px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05]">
          <img className="" src={HeroImage} alt="" />
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
            <hr className="border  border-[#FF9E00]"/>
            <div className="flex items-center justify-between">
               <div className="flex gap-2">
                  <div className="bg-[#FF9E00] w-7 h-7 border rounded-full flex items-center justify-center"><img className="w-3" src={ProfileIcon} alt="" /></div>
                  <span className="text-[#3C3C3C] font-semibold text-[15px] ">QR Profile Valid Till</span>
               </div>
               <span className="text-[#FF9E00] font-semibold text-[15px]">02, Sept 2025</span>
            </div>
          </div>
         
        </div>
        <div className="bg-white rounded-lg p-5 shadow-xl mt-44 mb-5 left-0 right-0 mx-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={BuildingIcon} alt="Company" className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-[#FFA500] text-sm font-semibold">Company</span>
                <span className="text-[#3C3C3C] font-bold">Unilever</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={EmployeeIcon} alt="Employee ID" className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-[#FFA500] text-sm font-semibold">Employee ID</span>
                <span className="text-[#3C3C3C] font-bold">129588</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={LocationIcon} alt="Official Email ID" className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-[#FFA500] text-sm font-semibold">Official Email ID</span>
                <span className="text-[#3C3C3C] font-bold">nitesh@unilever.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
