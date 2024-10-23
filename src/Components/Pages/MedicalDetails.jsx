import React from "react";
import DashboardInputs from "../../Utils/DashboardInputs";
import PageContentWrapper from "../../Utils/PageContentWrapper";
import ActionButtons from "../../Utils/ActionButtons";

function MedicalDetails() {
  return (
    <PageContentWrapper
      breadcrumbs={[
        { label: "My Profile", link: "/dashboard" },
        { label: "Medical Details", link: "/medicaldetails", active: true },
      ]}
      pageTitle="MEDICAL DETAILS"
      backPath="/dashboard"  // This will make the back button go to the profile page
    >
      <div className="text-md font-medium text-[#3C3C3C]">Primary Emergency Contact</div>
      <DashboardInputs label="Full Name" type="text" value={'Nitesh Rathod'} readOnlyOf={true} placeholder={'ADD PRIMARY NAME'}/>
      <DashboardInputs label="Mobile" type="number" readOnlyOf={true} value={'9820485536'} placeholder={'ADD PRIMARY MOBILE'} />
      <div className="border-b border-[#C8C8C8] my-4"></div>
      <div className="text-md font-medium text-[#3C3C3C]">Secondary Emergency Contact</div>
      <DashboardInputs label="Full Name" type="text" placeholder={'ADD SECONDARY NAME'} />
      <DashboardInputs label="Mobile" type="number" placeholder={'ADD SECONDARY MOBILE'} />
      <div className="my-4"></div>
      <ActionButtons onCancel={() => {}} onSave={() => {}} />
    </PageContentWrapper>
  );
}

export default MedicalDetails;
