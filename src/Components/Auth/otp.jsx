import Logo from "../../../public/logo.svg";
import HeaderRightSideLogo from "../../../public/assets/images/HeaderRightSideLogo.png";
import HeroImage from "../../../public/assets/SVG/dashboard-hero.svg";
import CloseIcon from "../../../public/assets/icons/close-icon.svg";

function Login({ onClose }) {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      {/* Gradient background with hero image */}
      <div className="relative MainContainer h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFCB05] to-[#FFA500]">
          {/* Header */}
          <div className="flex items-center mt-4">
            <div className="flex items-center justify-center w-[15%] ">
              <img src={Logo} alt="Logo" className="w-8 cursor-pointer" />
            </div>
            <div className="flex-grow w-[85%] h-11 flex justify-center items-end bg-[#002D3A] rounded-l-full shadow-xl shadow-red-500/45">
              <div className="border-white h-full flex items-center justify-center w-full">
                <span className="text-white whitespace-nowrap font-bold text-center w-full text-[0.80rem]">
                  Safety is Everyone&apos;s responsibility
                </span>
              </div>
              <img
                className="h-8"
                src={HeaderRightSideLogo}
                alt="Header Right Logo"
              />
            </div>
          </div>
          
          {/* Hero Image */}
          {/* <div className="absolute inset-x-0 bottom-[435px] flex justify-center items-end mx-5">
            <img src={HeroImage} alt="Hero" className="w-full max-w-md" />
          </div> */}
        </div>
        
        {/* White part overlaying the gradient and hero image */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 h-[480px]">
          {/* Close button */}
          <div onClick={onClose} className="absolute z-50 top-4 right-4 flex items-center">
            <button 
              className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <span className="text-black text-sm font-bold">CLOSE</span>
              <img src={CloseIcon} alt="Close" className="w-4 h-4 cursor-pointer invert"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
