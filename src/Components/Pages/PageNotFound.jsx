import pageNotFoundImage from "../../../public/assets/images/pageNotFoundImage.svg";
import ContactIcon from "../../../public/assets/images/ContactIcon.svg";
import PageNotFoundGreenLine from "../../../public/assets/images/PageNotFoundGreenLine.svg";
import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/logo.svg';
import HeaderRightSideLogo from '../../../public/assets/images/HeaderRightSideLogo.png';



function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-black flex justify-center">
            <div
                className="MainContainer relative bg-[#EEEEEE]"
            >
                <header className='absolute w-full MainHeaderWidth py-3 top-0 items-center justify-center z-40 transition-colors duration-300 mt-2'>
                    <div className="flex items-center flex-wrap">
                        <div className="flex items-center justify-center w-[15%]">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="w-8 cursor-pointer"
                                onClick={() => { navigate('/') }}
                            />
                        </div>
                        <div className="flex-grow w-[85%] h-11 flex  justify-center items-end bg-[#002D3A] rounded-l-full ">
                            <div className=" border-white h-full flex items-center justify-center w-full">
                                <span className="text-white whitespace-nowrap font-bold text-center w-full text-[0.80rem]">
                                    Safety is Everyone&apos;s responsibility
                                </span>
                            </div>
                            <img className='h-8' src={HeaderRightSideLogo} alt="" />
                        </div>
                    </div>
                </header>


                <div className=" flex items-end w-full h-full">
                    <div className="bg-[#D9DDDD] h-[85%]  w-full rounded-t-[40px] flex flex-col gap-7 items-center justify-between py-2">
                        <div className="mt-5 flex flex-col gap-3">
                            <div className="">
                                <img className='w-52' src={pageNotFoundImage} alt="pageNotFoundImage" />
                            </div>
                            <div className=" flex flex-col gap-7">
                                <h4 className='flex flex-col text-center text-2xl'><span className=' font-bold text-[#1DBF3C]'>Ooops...</span><span className='text-xl text-[#3C3C3C]'>Profile In-Active or <br /> Not Found!</span></h4>
                                <span className='text-[#3C3C3C] text-sm font-semibold'>Contact your service provider.</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2 px-7">
                            <div className="">
                                <p className='text-[#002D3A] text-sm font-bold'>Or you can reach us at</p>
                                <div className='flex items-center gap-1 text-[15px]'><img className='w-4 mt-1' src={ContactIcon} alt="" /><span>connect@wellbyindia.com</span></div>
                            </div>
                            <div className=""><img src={PageNotFoundGreenLine} alt="" /></div>
                            <div className="">
                                <span className='text-xs font-semibold'>Wellby Solutions Pvt. Ltd.</span>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default PageNotFound
