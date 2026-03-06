import "../styles/Document.css";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiPhone, mdiMapMarkerOutline } from "@mdi/js";

function Document({ generalInfoData, educationInfoData, experienceInfoData }) {
  return (
    <div className="document-preview">
      <header>
        <section className="general-information">
          <h1>
            {generalInfoData.firstName} {generalInfoData.lastName}
          </h1>
          <div className="contact-information">
            <div className="contact-item">
              <Icon path={mdiEmailOutline} size={1} />

              <p>{generalInfoData.email}</p>
            </div>
            <div className="contact-item">
              <Icon path={mdiPhone} size={1} />

              <p>{generalInfoData.phone}</p>
            </div>
            <div className="contact-item">
              <Icon path={mdiMapMarkerOutline} size={1} />

              <p>{generalInfoData.address}</p>
            </div>
          </div>
        </section>
      </header>
      <section className="education-information">
        <h2>Education</h2>
        {educationInfoData.map((school) => (
          <div key={school.id} className="document-item">
            <h3>{school.schoolName}</h3>
            <h4>{school.titleOfStudy}</h4>
            <p className="start">Start: {school.startOfStudy}</p>
            <p className="end">Graduation: {school.endOfStudy}</p>
          </div>
        ))}
      </section>
      <section className="experience-information">
        <h2>Experience</h2>
        {experienceInfoData.map((company) => (
          <div key={company.id} className="document-item experience">
            <h3>{company.companyName}</h3>
            <h4>{company.positionTitle}</h4>
            <p className="start">Start of Work: {company.startOfWork}</p>
            <p className="end">
              End of Work:
              {company.endOfWork}
            </p>
            <p className="responsibilities">{company.mainResponsibilities}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Document;
