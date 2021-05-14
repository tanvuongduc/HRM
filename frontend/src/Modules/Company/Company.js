import React, { useState, useEffect } from "react";
import ContactEdit from "./components/ContactEdit/ContactEdit";
import DocumentsEdit from "./components/DocumentsEdit/DocumentsEdit";
import OveriewEdit from "./components/OveriewEdit/OveriewEdit.js";
import { Http } from './Shared/index';
import axios from 'axios';

const Company = () => {
  const path = window.location.pathname
  const [company, setCompany] = useState({ data: [] })

  const [Documents, setDocuments] = useState([])
  const addDocument = data => {
    setDocuments([data, ...Documents])
  }


  useEffect(async () => {
    const data1 = await Http.get('company')
    setCompany(data1)
  }, []);
  const showData = company.data.map(e => (e.documents))
  const showContact = company.data.map(e => (e.contact))
  return (
    <div className="Company">
      <OveriewEdit />
      <ContactEdit data={showContact} />
      <DocumentsEdit data={showData} addDocument={addDocument} />

    </div>
  )
}

export default Company
