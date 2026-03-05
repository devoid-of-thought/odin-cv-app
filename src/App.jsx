import { useState } from 'react'
import Form from './Form.jsx'
import Document from './Document.jsx'
import { generalInformation, educationInformation, experienceInformation } from './Inputs.jsx'
import './App.css'

function App() {
    const [formData, setFormData] = useState({
        generalInformation: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            description: ''
        },
        educationInformation: {
            schoolName: '',
            titleOfStudy: '',
            startOfStudy: '',
            endOfStudy: ''
        },
        experienceInformation: {
            companyName: '',
            positionTitle: '',
            mainResponsibilities: '',
            startOfWork: '',
            endOfWork: ''
        }
    });
    const handleInput = (section, field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: {    
                ...prevData[section],
                [field]: value
            }
        }));
    };
  return (
    <>
      <aside>
    <Form sectionKey="generalInformation" label={generalInformation.label} inputs={generalInformation.inputs} data={formData.generalInformation} onInput={handleInput} />
    <Form sectionKey="educationInformation" label={educationInformation.label} inputs={educationInformation.inputs} data={formData.educationInformation} onInput={handleInput} />
    <Form sectionKey="experienceInformation" label={experienceInformation.label} inputs={experienceInformation.inputs} data={formData.experienceInformation} onInput={handleInput} />
    </aside>
    <main><Document data={formData} /></main>
    
    </>
  )
}

export default App
