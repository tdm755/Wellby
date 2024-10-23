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
       <div className="my-1"></div>
      <DashboardInputs label="Family Physician Full Name" type="text" value={'Nitesh Rathod'} readOnlyOf={true} placeholder={'ADD PRIMARY NAME'}/>
      <DashboardInputs label="Family Physician Mobile" type="number" readOnlyOf={true} value={'9820485536'} placeholder={'ADD PRIMARY MOBILE'} />
      <DashboardInputs label="Blood Group" type="select" options={['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']} placeholder={'ADD YOUR BLOOD GROUP'}/>
      <DashboardInputs label="Allergies(if any)" type="text" placeholder={'ADD ALLERGIES'}/>  
      <DashboardInputs label="Medical Conditions(if any)" type="text" placeholder={'ADD MEDICAL CONDITIONS'}/>  
      <div className="my-4"></div>
      <ActionButtons onCancel={() => {}} onSave={() => {}} />
    </PageContentWrapper>
  );
}

export default MedicalDetails;
