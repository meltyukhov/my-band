import {useEffect, useState} from "react";
import api from "../api"
import Instrument from "./Instrument";
import {List} from "@mui/material";
import AddInstrumentButton from "./AddInstrumentButton";

const InstrumentsPage = () => {
  const [instruments, setInstruments] = useState([])

  const fetchInstruments = () => {
    api.getInstruments()
      .then(response => response.json())
      .then(objects => {
        objects.sort((a,b) => a.name.localeCompare(b.name))
        setInstruments(objects)
      })
  }

  useEffect(() => {
    fetchInstruments()
  }, [])

  return (
    <div>
      <AddInstrumentButton refreshItems={fetchInstruments}/>
      <List>
        {
          instruments.map(item => (
            <Instrument data={item} key={item.id} refreshItems={fetchInstruments}/>
          ))
        }
      </List>
    </div>
  )
}

export default InstrumentsPage
