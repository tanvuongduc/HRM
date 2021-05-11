import React, { useState } from "react";
import ContactEdit from "./components/ContactEdit/ContactEdit";
import DocumentsEdit from "./components/DocumentsEdit/DocumentsEdit";
import OveriewEdit from "./components/OveriewEdit/OveriewEdit.js";

const Company = () => {
  const path = window.location.pathname
  const [Documents, setDocuments] = useState([])
  const addDocument = data => {
    setDocuments([data, ...Documents])
  }
  const document = Documents.map((data, index) => {
    return (
      <div key={index}>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>

    )
  })

  return (
    <div className="Company">
      <OveriewEdit />
      <ContactEdit />
      <DocumentsEdit document={document} addDocument={addDocument} />
    </div>
  )
}

export default Company
