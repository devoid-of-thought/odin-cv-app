const generalInformation = {
  id: 1,
  label: "General Information",
  inputs: [
    { key: "firstName", type: "text", label: "First Name", placeholder: "Jane",className: "first-name" },
    { key: "lastName", type: "text", label: "Last Name", placeholder: "Doe",className: "last-name" },
    {
      key: "email",
      type: "email",
      label: "Email",
      placeholder: "jane.doe@example.com",
    },
    { key: "phone", type: "text", label: "Phone", placeholder: "+1-234-567-8900",className: "phone" },
    { key: "address", type: "text", label: "Address", placeholder: "123 Main Street",className: "address" },
    {
      key: "description",
      type: "text",
      label: "Description",
      className: "description",
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
      className: "school-name",
      placeholder: "University of Example",
    },
    {
      key: "titleOfStudy",
      type: "text",
      label: "Title of Study",
      className: "title-of-study",
      placeholder: "Bachelor of Science in Computer Science",
    },
    { key: "startOfStudy", type: "text", label: "Start of Study", className: "start-of-study", placeholder: "1-1-2024" },
    { key: "endOfStudy", type: "text", label: "End of Study", className: "end-of-study", placeholder: new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear() },
  ],
};

const experienceInformation = {
  id: 3,
  label: "Experience Information",
  inputs: [
    { key: "companyName", type: "text", label: "Company Name", className: "company-name", placeholder: "Company Name" },
    {
      key: "positionTitle",
      type: "text",
      label: "Position Title",
      className: "position-title",
      placeholder: "Position Title",
    },
    {
      key: "mainResponsibilities",
      type: "textarea",
      label: "Main Responsibilities",
      className: "main-responsibilities",
      placeholder: "Main Responsibilities",
    },
    {
      key: "startOfWork",
      type: "text",
      label: "Start of Work",
      className: "start-of-work",
      placeholder: "Start of Work",
    },
    { key: "endOfWork", type: "text", label: "End of Work",className:"end-of-work", placeholder: "End of Work" },
  ],
};

export { generalInformation, educationInformation, experienceInformation };