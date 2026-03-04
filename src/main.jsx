import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Form.jsx'
import Document from './Document.jsx'
import { generalInformation, educationInformation, experienceInformation } from './Inputs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <aside>
    <Form label={generalInformation.label} inputs={generalInformation.inputs} />
    <Form label={educationInformation.label} inputs={educationInformation.inputs} />
    <Form label={experienceInformation.label} inputs={experienceInformation.inputs} />
    </aside>
    <main><Document /></main>
    
  </StrictMode>,
)
