import React, { useEffect } from "react";
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
import DashboardInputs from "../../Utils/DashboardInputs";
import EditIcon from '../../../public/assets/images/EditIcon.svg'
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location;

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div
        className="w-[400px] relative bg-[#EEEEEE]"
      >
        <DashboardHeader />

        <div className="h-[467px] overflow-hidden relative rounded-b-[40px] flex items-start justify-center pt-[130px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05]">
          <img className="w-[347px]  mt-2 " src={HeroImage} alt="" />
        </div>


        <div className="mx-5 p-5 rounded-lg bg-white shadow-xl absolute top-[270px] left-0 right-0 flex flex-col gap-4">

          {/* Logout BTN */}
          <img onClick={()=>{navigate('/')}} src={LogoutIcon} alt="Logout" className="w-8 h-8 cursor-pointer absolute top-4 right-4" />

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


        <div className="px-5 mb-24">
          <div className="bg-white rounded-lg p-5 shadow-xl mt-20 left-0 right-0 ">
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

          <hr className="border mt-6 mb-6 border-[#FF9E00]" />

          {/* Personal Details */}
          <div className="">
            <DashboardFormCompo
              title={'Personal Details'}
              path={'/personaldetails'}
              inputs={[
                <DashboardInputs label={'Full Name'} type={'text'} value={'Nitesh Rathod'} readOnlyOf={true} />,
                <DashboardInputs label={'Mobile'} type={'number'} value={9384754535} readOnlyOf={true} />,
                <DashboardInputs label={'Personal Email ID'} type={'text'} value={'Nitesh Rathod'} readOnlyOf={true} />,
                <DashboardInputs label={'Address'} type={'textarea'} value={'11/83, Unnat Nagar 3, MG Road, Goregaon (West)'} readOnlyOf={true} />,
                <DashboardInputs label={'Nearby Landmark'} type={'text'} value={'Shabri Hotel, Goregaon'} readOnlyOf={true} />,
                <DashboardInputs label={'Pin Code'} type={'num'} value={'400019'} readOnlyOf={true} />,
                <DashboardInputs label={'City'} type={'text'} value={'Mumbai'} readOnlyOf={true} />,
                <DashboardInputs label={'State'} type={'text'} value={'Maharashtra'} readOnlyOf={true} />,
              ]}
            />
          </div>


          {/* Emergengy Contacts */}
          <div className="mt-12">
            <div className='w-full border rounded-lg bg-white shadow-xl'>
              <div className="bg-gradient-to-t from-[#FFB404] to-[#FFCE05] h-12 rounded-lg flex items-center justify-between px-4 shadow-lg">
                <span className='tracking-[0.20em] font-semibold text-white text-md uppercase'>Emergency Contacts</span>
                <img onClick={() => { navigate('/emergencycontacts') }} className='w-6' src={EditIcon} alt="" />
              </div>

              <h4 className='pl-4 pt-4 pb-2 font-semibold text-[#3C3C3C]'>Primary Emergency Contact</h4>
              <div className={`px-4 flex flex-col gap-5`}>
                <DashboardInputs label={'Full Name'} type={'text'} value={'Nitesh Rathod'} readOnlyOf={true} />
                <DashboardInputs label={'Mobile'} type={'number'} value={''} readOnlyOf={true} />
              </div>
              <div className="flex items-center justify-center"><hr className="border mt-6 mb-6 border-[#C8C8C8] w-[90%]" /></div>
              <h4 className='pl-4 pb-2 font-semibold text-[#3C3C3C]'>Secondary Emergency Contact</h4>
              <div className={`px-4 pb-7 flex flex-col gap-5`}>
                <DashboardInputs label={'Full Name'} type={'text'} value={'Nitesh Rathod'} readOnlyOf={true} />
                <DashboardInputs label={'Mobile'} type={'number'} value={''} readOnlyOf={true} />
              </div>
            </div>
          </div>

          {/* Medical Details */}
          <div className="mt-12">
            <DashboardFormCompo
              title={'Medical Details'}
              path={'/medicaldetails'}
              inputs={[
                <DashboardInputs label={'Family Physician Name'} type={'text'} value={'Akshay Sinha'} readOnlyOf={true} />,
                <DashboardInputs label={'Family Physician Number'} type={'number'} value={9820485536} readOnlyOf={true} />,
                <DashboardInputs label={'Blood Group'} type={'text'} value={'O +ve'} readOnlyOf={true} />,
                <DashboardInputs label={'Allergies (If any)'} type={'text'} value={'Pepper, Peanuts'} readOnlyOf={true} />,
                <DashboardInputs label={'Medical Conditions (If any)'} type={'text'} value={'High Blood Pressure'} readOnlyOf={true} />,
              ]}
            />
          </div>


          {/* Mediclaim Policies */}
          <div className="mt-12">
            <div className='w-full border rounded-lg bg-white shadow-xl'>
              <div className="bg-gradient-to-t from-[#FFB404] to-[#FFCE05] h-12 rounded-lg flex items-center justify-between px-4 shadow-lg">
                <span className='tracking-[0.20em] font-semibold text-white text-md uppercase'>Mediclaim Policies</span>
                <img onClick={() => { navigate('/mediclaimpolicies') }} className='w-6' src={EditIcon} alt="" />
              </div>

              <h4 className='pl-4 pt-4 pb-2 font-semibold text-[#3C3C3C]'>Corporate Mediclaim Policy</h4>
              <div className={`px-4 flex flex-col gap-5`}>
                <DashboardInputs label={'Mediclaim Company'} type={'text'} value={'Manipal Cigna'} readOnlyOf={true} />
                <DashboardInputs label={'Mediclaim Policy No'} type={'num'} value={5095491581} readOnlyOf={true} />
                <DashboardInputs label={'Corporate Policy Expiry Date'} type={'text'} value={'27, January 2025'} readOnlyOf={true} />
                <DashboardInputs label={'Policy Relationship Manager Name'} type={'text'} value={'Rajkumar Tiwari'} readOnlyOf={true} />
                <DashboardInputs label={'Policy Relationship Manager Mobile'} type={'number'} value={9820485536} readOnlyOf={true} />
                <DashboardInputs label={'Corporate Policy Toll Free Number'} type={'num'} value={18004259449} readOnlyOf={true} />
              </div>
              <div className="flex items-center justify-center"><hr className="border mt-6 mb-6 border-[#C8C8C8] w-[90%]" /></div>
              <h4 className='pl-4 pb-2 font-semibold text-[#3C3C3C]'>Personal Mediclaim Policy</h4>
              <div className={`px-4 pb-7 flex flex-col gap-5`}>
                <DashboardInputs label={'Mediclaim Company'} type={'text'} value={'Manipal Cigna'} readOnlyOf={true} />
                <DashboardInputs label={'Mediclaim Policy No'} type={'num'} value={5095491581} readOnlyOf={true} />
                <DashboardInputs label={'Corporate Policy Expiry Date'} type={'text'} value={'27, January 2025'} readOnlyOf={true} />
                <DashboardInputs label={'Policy Relationship Manager Name'} type={'text'} value={'Rajkumar Tiwari'} readOnlyOf={true} />
                <DashboardInputs label={'Policy Relationship Manager Mobile'} type={'number'} value={9820485536} readOnlyOf={true} />
                <DashboardInputs label={'Corporate Policy Toll Free Number'} type={'num'} value={18004259449} readOnlyOf={true} />
              </div>
            </div>
          </div>




        </div>



        <div className="w-full flex flex-col items-center justify-center mt-10 mb-2 gap-2">
          <img className='w-56 cursor-pointer' onClick={()=>{navigate('/')}} src={WellByLogo} alt="" />
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
