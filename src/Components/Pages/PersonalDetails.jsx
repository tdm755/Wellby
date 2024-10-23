import React from "react";
import DashboardInputs from "../../Utils/DashboardInputs";
import PageContentWrapper from "../../Utils/PageContentWrapper";
import ActionButtons from "../../Utils/ActionButtons";

function PersonalDetails() {
  return (
    <PageContentWrapper
      breadcrumbs={[
        { label: "My Profile", link: "/dashboard" },
        { label: "Personal Details", link: "/personaldetails", active: true },
      ]}
      pageTitle="PERSONAL DETAILS"
      backPath="/dashboard"  // This will make the back button go to the profile page
    >
      <DashboardInputs label="Full Name" type="text" value={'Nitesh Rathod'} readOnlyOf={true} />
      <DashboardInputs label="Middle Name" type="text"  placeholder={'ADD YOUR MIDDLE NAME'} />
      <DashboardInputs label="Last Name" type="text" value={'Rathod'} placeholder={'ADD YOUR LAST NAME'} readOnlyOf={true}/>
      <DashboardInputs label="Gender" type="select" options={['Male', 'Female', 'Other']} />
      <DashboardInputs label="Mobile" type="number" readOnlyOf={true} value={'9820485536'} />
      <DashboardInputs label="Personal Email ID" type="email" value={'niteshrathod@gmail.com'} />
      <DashboardInputs label="Full Address" type="textarea" value={'11/83, Unnat Nagar 3, MG Road, Goregaon (West)'} />
      <DashboardInputs label="Pincode" type="num" value={'400063'} />
      <DashboardInputs label="Nearby Landmark" type="text" placeholder={'ADD NEARBY HOUSE LANDMARK'} />
      <DashboardInputs label="City" type="text" placeholder={'ADD YOUR CITY'}  value={'Mumbai'}/>
      <DashboardInputs label="State" type="text" placeholder={'ADD YOUR STATE'}  value={'Maharashtra'}/>
      <DashboardInputs label="Country" type="text" placeholder={'ADD YOUR COUNTRY'}  value={'India'}/>
      <DashboardInputs label="Date of Birth" type="date" placeholder={'DD/MM/YYYY'}  value={'1990-01-01'} readOnlyOf={true}/>
      <ActionButtons onCancel={() => {}} onSave={() => {}} />
    </PageContentWrapper>
  );
}

export default PersonalDetails;
