import React, { useState, useEffect } from "react"
import Contact from "./Components/Contact/Contact"
import Overiew from "./Components/Overiew/Overview"
import Document from "./Components/Document/Document"
import { Http } from "./Shared/Index"
import Div from "./CssCompany"

export default function Company() {
  const [company, setCompany] = useState({ data: [] });

  const addDocument = async (addDocument) => {
    try {
      const data = await Http.post('company/documents', addDocument)
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
      <Overiew />
      <Contact data={showContact} />
      <Document data={showDocument} addDocument={addDocument} />
    </Div>
  )
}
