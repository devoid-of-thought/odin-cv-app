const generalInformation = {
  id: 1,
  label: "General Information",
  inputs: [
    { id: 1, type: "text", placeholder: "First Name" },
    { id: 2, type: "text", placeholder: "Last Name" },
    { id: 3, type: "email", placeholder: "Email" },
    { id: 4, type: "text", placeholder: "Phone" },
    { id: 5, type: "text", placeholder: "Address" },
    { id: 6, type: "text", placeholder: "Description" },
  ],
};

 const educationInformation = {
  id: 2,
  label: "Education Information",
  inputs: [
    { id: 1, type: "text", placeholder: "School Name" },
    { id: 2, type: "text", placeholder: "Title of Study" },
    { id: 3, type: "date", placeholder: "Date of Study" },
  ],
};
const experienceInformation = {
  id: 3,
  label: "Experience Information",
  inputs: [
    { id: 1, type: "text", placeholder: "Company Name" },
    { id: 2, type: "text", placeholder: "Position Title" },
    { id: 3, type: "date", placeholder: "Main Responsibilities" },
    { id: 4, type: "date", placeholder: "Startof Work" },
    { id: 5, type: "date", placeholder: "End of Work" },
  ],
};

export { generalInformation, educationInformation, experienceInformation };