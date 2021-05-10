import React, { useState } from "react";
import ContactEdit from "./components/ContactEdit/ContactEdit";
import DocumentsEdit from "./components/DocumentsEdit/DocumentsEdit";
import OveriewEdit from "./components/OveriewEdit/OveriewEdit.js";
import Container from '@material-ui/core/Container';


const Company = () => {
  const path = window.location.pathname
  const [Documents, setDocuments] = useState([
    {
      title: 'Linh vuc Hoat Dong',
      desc: 'hoat dong trong linh vuc IT'
    },
    {
      title: 'Linh vuc Hoat Dong',
      desc: 'hoat dong trong linh vuc IT'
    },
  ])
  const document = Documents.map((data, index) => {
    return (
      <div key={index}>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>

    )
  })

  return (
    <Container className="Company">
      <OveriewEdit>
      </OveriewEdit>
      <hr></hr>
      <DocumentsEdit document={document}></DocumentsEdit>
      <hr></hr>
      <ContactEdit></ContactEdit>
    </Container>
  )
}

export default Company

