import React, { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import BackIcon from "../../public/assets/SVG/back-icon.svg";
import DashboardHeader from "../Components/Header/DashboardHeader";
import WellByLogo from "../../public/assets/images/WellByLogo.png";
import PropTypes from 'prop-types';

function PageContentWrapper({ breadcrumbs, pageTitle, children, backPath }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1); // This will navigate to the previous page if no backPath is provided
    }
  };


  const location = useLocation();
  const pathname = location;

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-black flex justify-center select-none">
      <div className="w-[400px] relative bg-[#EEEEEE]">
        <DashboardHeader />
        <div className="sticky top-0 h-[180px] overflow-hidden rounded-b-[40px] flex items-start justify-center pt-[130px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05]"></div>

        <div className="relative -top-[85px] left-0 right-0">
          <div className="mb-2">
            <div className="flex items-center text-sm justify-end mr-10">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {crumb.active ? (
                    <span className="text-[#3C3C3C] font-bold">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      to={crumb.link}
                      className="text-[#3C3C3C] hover:underline"
                    >
                      {crumb.label}
                    </Link>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-[#3C3C3C]">&gt;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="mx-5 p-5 rounded-lg bg-white shadow-xl left-0 right-0 flex flex-col gap-4">
            <div className="flex items-center">
              <img
                src={BackIcon}
                alt="Back Icon"
                className="w-6 h-6 cursor-pointer mr-4"
                onClick={handleBackClick}
              />
              <h1 className="text-[#3C3C3C] font-semibold text-lg">
                {pageTitle}
              </h1>
            </div>
            <div className="border-b-2 border-[#FF9E00] -mt-1"></div>
            {children}
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2 mt-20 left-0 right-0 -mb-20">
            <img className="w-56 cursor-pointer" onClick={()=>{navigate('/')}} src={WellByLogo} alt="WellBy Logo" />
            <div className="h-1 flex items-center justify-center w-full">
              <div
                className="w-[90%] h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #A0A0A0 50%, transparent 50%)",
                  backgroundSize: "10px 1.2px",
                  backgroundRepeat: "repeat-x",
                }}
              ></div>
            </div>
            <p className="text-xs md:text-sm">
              Powered by:{" "}
              <span className="font-semibold">Wellby Solutions Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

PageContentWrapper.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  backPath: PropTypes.string,
};

export default PageContentWrapper;
