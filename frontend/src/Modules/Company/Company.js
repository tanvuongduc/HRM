import React, { useState, useEffect } from "react";
import ContactEdit from "./components/ContactEdit/ContactEdit";
import DocumentsEdit from "./components/DocumentsEdit/DocumentsEdit";
import OveriewEdit from "./components/OveriewEdit/OveriewEdit.js";
import {Http} from './Shared/index';
import axios from 'axios';

const Company = () => {
  const path = window.location.pathname
  const [data, setData] = useState([])

  const [Documents, setDocuments] = useState([])
  const addDocument = data => {
    setDocuments([data, ...Documents])
  }


  // const getcompany = async () => {
  //   const data = await axios.get('http://localhost:3000/company')
  //   console.log(data, 'aaaaa')
  // }

  // useEffect(() => {
  //   getcompany()
  // }, [])


  
useEffect(() => {
    Http.get('company').then(e => {
      setData(...data, e)
    })
  }, []);

  return (
    <div className="Company">
      <OveriewEdit />
      <ContactEdit />
      <DocumentsEdit data1={data} addDocument={addDocument} />
    </div>
  )
}

export default Company
