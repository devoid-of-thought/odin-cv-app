const generalInformation = {
  id: 1,
  label: "General Information",
  inputs: [
    { key: "firstName", type: "text", label: "First Name", placeholder: "Jane" },
    { key: "lastName", type: "text", label: "Last Name", placeholder: "Doe" },
    {
      key: "email",
      type: "email",
      label: "Email",
      placeholder: "jane.doe@example.com",
    },
    { key: "phone", type: "text", label: "Phone", placeholder: "+1-234-567-8900" },
    { key: "address", type: "text", label: "Address", placeholder: "123 Main Street" },
    {
      key: "description",
      type: "text",
      label: "Description",
      placeholder: "Brief description about yourself",
    },
  ],
};

const educationInformation = {
  id: 2,
  label: "Education Information",
  inputs: [
    {
      key: "schoolName",
      type: "text",
      label: "School Name",
      placeholder: "University of Example",
    },
    {
      key: "titleOfStudy",
      type: "text",
      label: "Title of Study",
      placeholder: "Bachelor of Science in Computer Science",
    },
    { key: "startOfStudy", type: "text", label: "Start of Study", placeholder: "1-1-2024" },
    { key: "endOfStudy", type: "text", label: "End of Study", placeholder: new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear() },
  ],
};

const experienceInformation = {
  id: 3,
  label: "Experience Information",
  inputs: [
    { key: "companyName", type: "text", label: "Company Name", placeholder: "Company Name" },
    {
      key: "positionTitle",
      type: "text",
      label: "Position Title",
      placeholder: "Position Title",
    },
    {
      key: "mainResponsibilities",
      type: "text",
      label: "Main Responsibilities",
      placeholder: "Main Responsibilities",
    },
    {
      key: "startOfWork",
      type: "text",
      label: "Start of Work",
      placeholder: "Start of Work",
    },
    { key: "endOfWork", type: "text", label: "End of Work", placeholder: "End of Work" },
  ],
};

export { generalInformation, educationInformation, experienceInformation };