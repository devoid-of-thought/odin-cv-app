    import { useState, useEffect } from "react";
    import Form from "./Form.jsx";
    import Document from "./Document.jsx";
    import {
    generalInformation,
    educationInformation,
    experienceInformation,
    } from "./Inputs.jsx";
    import "./App.css";
    import Button from "./Button.jsx";
    import Icon from "@mdi/react";
    import { mdiPencil, mdiCloseBox } from "@mdi/js";

    function App() {
    const [generalInfoData, setgeneralInfoData] = useState({
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        phone: "(123) 456-7890",
        address: "123 Uranium City, Saskatchewan, Canada",
        description: "Rollercoaster mechanic with 10 years of experience.",
    });

    const [educationInfoData, seteducationInfoData] = useState([
        {
        id: crypto.randomUUID(),
        schoolName: "University of Toronto",
        titleOfStudy: "Bachelor of Science in Mechanical Engineering",
        startOfStudy: "2022-09-01",
        endOfStudy: "2024-05-31",
        },
        {
        id: crypto.randomUUID(),
        schoolName: "University of Toronto",
        titleOfStudy: "Associate of Applied Science in Automotive Technology",
        startOfStudy: "2018-09-01",
        endOfStudy: "2020-05-31",
        },
    ]);

    const [experienceInfoData, setexperienceInfoData] = useState([
        {
        id: crypto.randomUUID(),
        companyName: "Some Work",
        positionTitle: "Rollercoaster Mechanic",
        mainResponsibilities: "Maintain and repair rollercoasters to ensure safety and optimal performance.",
        startOfWork: "2020-06-01",
        endOfWork: "2023-05-31",
        },
        {
        id: crypto.randomUUID(),
        companyName: "Some Work",
        positionTitle: "Automotive Technician",
        mainResponsibilities: "Perform routine maintenance and repairs on vehicles.",
        startOfWork: "2022-06-01",
        endOfWork: "2025-05-31",
        },
    ]);

    const handleInput = (section, field, value, id = null) => {
        if (section === "generalInformation") {
        setgeneralInfoData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        } else if (section === "educationInformation") {
        seteducationInfoData((prevData) =>
            prevData.map((school) =>
            String(school.id) === String(id)
                ? { ...school, [field]: value }
                : school,
            ),
        );
        } else if (section === "experienceInformation") {
        setexperienceInfoData((prevData) =>
            prevData.map((company) =>
            String(company.id) === String(id)
                ? { ...company, [field]: value }
                : company,
            ),
        );
        }
    };

    const handleAddEducation = () => {
        if (rolledId !== "education") {
        setRolled("education");
        }
        seteducationInfoData((prevData) => [
        ...prevData,
        {
            id: crypto.randomUUID(),
            schoolName: "Your School Name",
            titleOfStudy: "Your Degree Title",
            startOfStudy: "2020-09-01",
            endOfStudy: "2024-05-31",
        },
        ]);
    };

    const handleAddExperience = () => {
        if (rolledId !== "experience") {
        setRolled("experience");
        }   
        setexperienceInfoData((prevData) => [
        ...prevData,
        {
            id: crypto.randomUUID(),
            companyName: "Your Company Name",
            positionTitle: "Your Position Title",
            mainResponsibilities: "Your Main Responsibilities",
            startOfWork: "2022-06-01",
            endOfWork: "2025-05-31",
        },
        ]);
    };
    const [rolledId, setRolled] = useState(null);

    const handleRollDown = (id) => {
        setRolled((prev) => (prev === id ? null : id));
    };

    const [openModalId, setOpenModal] = useState(null);
    const toggleModal = (id) => {
    setOpenModal((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (openModalId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModalId]);

    const activeEducation = educationInfoData.find((s) => s.id === openModalId);
    const activeExperience = experienceInfoData.find((e) => e.id === openModalId);

    console.log(rolledId);  
    return (
        <>
        <aside>
            <div className="form-section">
            <div className="form-header">
                <h2>{"General Information"}</h2>
            </div>
            <Form
                sectionKey="generalInformation"
                label={generalInformation.label}
                inputs={generalInformation.inputs}
                data={generalInfoData}
                onInput={handleInput}
            />
            </div>
            <div className="form-section">
            <div className="form-header">
                <h2>{"Education"}</h2>
                <Button onClick={() => handleRollDown("education")}>
                {rolledId === "education" ? "+" : "-"}
                </Button>
            </div>

            {rolledId === "education" && (
                <div className="education-list-container">
                {educationInfoData.map((school) => (
                    <div key={school.id} className="school-group-container">
                    {educationInfoData.length >= 1 && (
                        <h3>{school.schoolName}</h3>
                    )}
                    <Button onClick={() => toggleModal(school.id)}>
                        <Icon path={mdiPencil} size={1} />
                    </Button>
                    </div>
                ))}
                {activeEducation && (
                    <div className="modal-backdrop">
                    <dialog className="form-modal" open>
                    <Form
                        sectionKey="educationInformation"
                        label={educationInformation.label}
                        inputs={educationInformation.inputs}
                        data={activeEducation}
                        onInput={handleInput}
                    />
                    <Button onClick={() => toggleModal(activeEducation)}>
                        <Icon path={mdiCloseBox} size={1} />
                    </Button>
                    </dialog>
                    </div>
                )}
                </div>
            )}

            <Button onClick={handleAddEducation}>+ Add</Button>
            </div>
            <div className="form-section">
            <div className="form-header">
                <h2>{"Work"}</h2>
                <Button onClick={() => handleRollDown("work")}>
                {rolledId === "work" ? "+" : "-"}
                </Button>
            </div>

            {rolledId === "work" && (
                <div className="work-list-container">
                {experienceInfoData.map((company) => (
                    <div key={company.id} className="company-group-container">
                    {educationInfoData.length >= 1 && (
                        <h3>{company.companyName}</h3>
                    )}
                    <Button onClick={() => toggleModal(company.id)}>
                        <Icon path={mdiPencil} size={1} />
                    </Button>
                    </div>
                ))}
                {activeEducation&& (
                    <dialog className="form-modal" open>
                    <Form
                        sectionKey="experienceInformation"
                        label={experienceInformation.label}
                        inputs={experienceInformation.inputs}
                        data={activeExperience
                        }
                        onInput={handleInput}
                    />

                    </dialog>
                )}
                </div>
            )}

            <Button onClick={handleAddExperience}>+ Add</Button>
            </div>
        </aside>
        <main>
            <Document
            generalInfoData={generalInfoData}
            educationInfoData={educationInfoData}
            experienceInfoData={experienceInfoData}
            />
        </main>
        </>
    );
    }

    export default App;
