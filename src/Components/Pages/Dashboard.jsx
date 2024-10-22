import React from "react";
import DefaultBackground from "../../../public/assets/images/default-background.png";
import Header from "../Header";
import HeroImage from "../../../public/assets/SVG/dashboard-hero.svg";
import LogoutIcon from "../../../public/assets/SVG/logout-icon.svg";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div
        className="w-[400px] relative"
        style={{ backgroundImage: `url(${DefaultBackground})` }}
      >
        <Header />
        <div className="h-[400px] overflow-hidden relative rounded-b-[40px] pt-[130px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05]">
          <img className="" src={HeroImage} alt="" />
        </div>
        <div className="mx-5 h-[250px] rounded-lg bg-white shadow-xl absolute top-[270px] left-0 right-0">
          <div className="absolute top-4 right-4">
            <img src={LogoutIcon} alt="Logout" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
