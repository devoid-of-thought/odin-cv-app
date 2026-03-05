  import './Document.css'

  function Document({ generalInfoData, educationInfoData, experienceInfoData }) {
    return (
      <div className="document-preview">
      <header>
        <h1>My CV</h1>
      </header>
      <section className='general-information'>
        <h2>General Information</h2>
        <p>First Name: {generalInfoData.firstName}</p>
        <p>Last Name: {generalInfoData.lastName}</p>
        <p>Email: {generalInfoData.email}</p>
        <p>Phone: {generalInfoData.phone}</p>
        <p>Address: {generalInfoData.address}</p>
        <p>Description: {generalInfoData.description}</p>
      </section>
      <section className='education-information'>
        <h2>Education</h2>
        {educationInfoData.map((school) => (
          <div key={school.id} className="document-item">
            <p>School Name: {school.schoolName}</p>
            <p>Title of Study: {school.titleOfStudy}</p>
            <p>Start of Study: {school.startOfStudy} - End of Study: {school.endOfStudy}</p>
          </div>
        ))}
      </section>
      <section className='experience-information'>
        <h2>Experience</h2>
        {experienceInfoData.map((company) => (
          <div key={company.id} className="document-item">
            <p>Company Name: {company.companyName}</p>
            <p>Position Title: {company.positionTitle}</p>
            <p>Main Responsibilities: {company.mainResponsibilities}</p>
            <p>Start of Work: {company.startOfWork} - End of Work: {company.endOfWork}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Document