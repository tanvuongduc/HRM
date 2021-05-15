import React, { useState, useEffect } from "react"
import ContactEdit from "./components/ContactEdit/ContactEdit"
import DocumentsEdit from "./components/DocumentsEdit/DocumentsEdit"
import OveriewEdit from "./components/OveriewEdit/OveriewEdit"
import { Http } from "./Shared/index"
import Div from "./Div"

export default function Company() {
  const [company, setCompany] = useState({ data: [] });

  const addDocument = async (addDocument) => {
    try {
      const data = await Http.put('company/documents', addDocument)
      setCompany(data)
    } catch (err) {
      console.log(err)
    }
  };

  const getData = async () => {
    try {
      const data = await Http.get('company')
      setCompany(data)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getData()
  }, []);

  const showDocument = company.data.map(e => (e.documents));
  const showContact = company.data.map(e => (e.contact));
  
  return (
    <Div>
      <OveriewEdit />
      <ContactEdit data={showContact} />
      <DocumentsEdit data={showDocument} addDocument={addDocument} />
    </Div>
  )
}
