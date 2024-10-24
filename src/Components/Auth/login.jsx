import Logo from "../../../public/logo.svg";
import HeaderRightSideLogo from "../../../public/assets/images/HeaderRightSideLogo.png";
import HeroImage from "../../../public/assets/SVG/dashboard-hero.svg";

function Login() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="bg-gradient-to-b from-[#FFCB05] to-[#FFA500] h-[50vh] w-[400px] rounded-b-[40px] flex flex-col">
        {/* Header moved to the top of the gradient div */}
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
        <img src={HeroImage} alt="Hero Image" className="w-full h-full" />
        <div className="bg-white rounded-t-3xl flex-grow flex flex-col p-6">
        
        </div>
       
      </div>
    </div>
  );
}

export default Login;
