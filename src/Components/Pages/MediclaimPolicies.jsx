import React from "react";
import DashboardInputs from "../../Utils/DashboardInputs";
import PageContentWrapper from "../../Utils/PageContentWrapper";
import ActionButtons from "../../Utils/ActionButtons";
import DownloadIcon from '../../../public/assets/SVG/download-icon.svg'
import UploadIcon from '../../../public/assets/SVG/upload-icon.svg'
function MediclaimPolicies() {
  return (
    <PageContentWrapper
      breadcrumbs={[
        { label: "My Profile", link: "/dashboard" },
        { label: "Mediclaim Policies", link: "/mediclaimpolicies", active: true },
      ]}
      pageTitle="MEDICLAIM POLICIES"
      backPath="/dashboard"
    >
        <div className="space-y-6">
            <h2 className="text-md font-medium ">Corporate Mediclaim Policy</h2>
            <div className="border border-[#C8C8C8] rounded-lg ">
                <div className=" w-full h-20"></div>
                <div className="bg-[#EEEEEE] w-full h-10 flex justify-between items-center gap-2 px-2 rounded-b-lg">
                    <div className="text-sm font-medium">Nitesh-Mediclaim-Policy.pdf</div>
                    <div className="flex gap-2">
                    <img src={DownloadIcon} alt="download"  className="w-6 h-6"/>
                    <img src={UploadIcon} alt="upload"  className="w-6 h-6"/>
                    </div>
                </div>
            </div>
            <DashboardInputs label="Mediclaim Company" type="text" value={'Manipal Cigna'}/>
            <DashboardInputs label="Mediclaim Policy No" type="text" value={'6697131448383468-7891'} placeholder={'ADD POLICY NO.'}/>    
            <DashboardInputs label="Corporate Policy Expiry Date" type="date2" value={'2026-10-22'} placeholder={'ADD POLICY EXPIRY DATE'}/>        
            <DashboardInputs label="Policy Relationship Manager Name" type="text" placeholder="Enter Manager Name" value={'Ramesh Chauhan'}/>
            <DashboardInputs label="Policy Relationship Manager Mobile" type="number" placeholder="Enter Manager Mobile" value={'9820485536'}/>
            <DashboardInputs label="Corporate Policy Toll Free Number" type="text" placeholder="Enter Toll Free Number" value={'1800594336'}/>        
            <h2 className="text-md font-medium ">Personal Mediclaim Policy</h2> 
            <div className="border border-[#C8C8C8] rounded-lg ">
                <div className=" w-full h-20 justify-center items-center flex px-10">
                    <div className="text-md text-[#C8C8C8] font-medium text-center">ADD PERSONAL MEDICLAIM POLICY</div>
                </div>
                <div className="bg-[#EEEEEE] w-full h-10 flex justify-between items-center gap-2 px-2 rounded-b-lg">
                    <div className="text-sm font-medium"></div>
                    <div className="flex gap-2">
                    <img src={UploadIcon} alt="upload"  className="w-6 h-6"/>
                    </div>
                </div>
            </div>
            <DashboardInputs label="Mediclaim Company" type="text" placeholder="ADD COMPANY NAME" />           
            <DashboardInputs label="Mediclaim Policy No" type="text" placeholder="ADD POLICY NO." />        
            <DashboardInputs label="Corporate Policy Expiry Date" type="date2" placeholder="ADD POLICY EXPIRY DATE"/>        
            <DashboardInputs label="Policy Relationship Manager Name" type="text" placeholder="ADD MANAGER NAME"/>          
            <DashboardInputs label="Policy Relationship Manager Mobile" type="number" placeholder="ADD MANAGER MOBILE"/>        
            <DashboardInputs label="Corporate Policy Toll Free Number" type="text" placeholder="ADD TOLL FREE NUMBER"/>
        </div>
        <ActionButtons onCancel={() => {}} onSave={() => {}} />
    </PageContentWrapper>
  );
}

export default MediclaimPolicies;
