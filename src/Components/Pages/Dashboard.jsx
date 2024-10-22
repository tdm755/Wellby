import React from "react";
import DefaultBackground from "../../../public/assets/images/default-background.png";
import DashboardHeader from "../Header/DashboardHeader";
import HeroImage from "../../../public/assets/SVG/dashboard-hero.svg";
import LogoutIcon from "../../../public/assets/SVG/logout-icon.svg";
import CheckIcon from "../../../public/assets/images/CheckIcon.svg";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div
        className="w-[400px] relative"
        style={{ backgroundImage: `url(${DefaultBackground})` }}
      >
        <DashboardHeader />
        <div className="h-[400px] overflow-hidden relative rounded-b-[40px] pt-[130px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05]">
          <img className="" src={HeroImage} alt="" />
        </div>
        <div className="mx-5 p-5 h-[250px] rounded-lg bg-white shadow-xl absolute top-[270px] left-0 right-0">
            <img src={LogoutIcon} alt="Logout" className="w-8 h-8 cursor-pointer absolute top-4 right-4" />

            <div className=" flex flex-col gap-2">
              <div className="">
                <span className="text-[#3C3C3C] font-semibold">Welcome,</span>
                <h3 className="font-bold text-[22px] text-[#FF9E00]">Nitesh Rajkumar Rathod</h3>
              </div>
              <div className="">
                <p className="text-[#787878] text-sm">Looks like your contact has verified as your
                  Emergency Connect. Always keep your Health, 
                  Medical and Emergency Contact details uopdated.</p>
              </div>
            </div>

            <div className="flex gap-2">
               <div className="bg-[#2C9E00] w-7 h-7 border rounded-full flex items-center justify-center"><img className="w-3" src={CheckIcon} alt="" /></div> <span>Emergency Contact Verified</span>
            </div>
            <div className="">
                <div className=""> <img src="" alt="" /> <span></span></div>
                <span></span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
