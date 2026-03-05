import './Document.css'

function Document({data}) {
  return (
    <>
      <header>
        <h1>My CV</h1>
      </header>
      <section className='general-information'>
        <h2>General Information</h2>
        
        <p>First Name: {data.generalInformation.firstName}</p>
        <p>Last Name: {data.generalInformation.lastName}</p>
        <p>Email: {data.generalInformation.email}</p>
        <p>Phone: {data.generalInformation.phone}</p>
        <p>Address: {data.generalInformation.address}</p>
        <p>Description: {data.generalInformation.description}</p>
      </section>
      <section className='education-information'>
        <h2>Education</h2>
        <p>School Name: {data.educationInformation.schoolName}</p>
        <p>Title of Study: {data.educationInformation.titleOfStudy}</p>
        <p>Start of Study: {data.educationInformation.startOfStudy} - End of Study: {data.educationInformation.endOfStudy}</p>
      </section>
      <section className='experience-information'>
        <h2>Experience</h2>
        <p>Company Name: {data.experienceInformation.companyName}</p>
        <p>Position Title: {data.experienceInformation.positionTitle}</p>
        <p>Main Responsibilities: {data.experienceInformation.mainResponsibilities}</p>
        <p>Start of Work: {data.experienceInformation.startOfWork} - End of Work: {data.experienceInformation.endOfWork}</p>
      </section>
    </>
  )
}

export default Document 