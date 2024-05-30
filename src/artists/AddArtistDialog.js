import api from "../api";
import {Box, Button, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import InstrumentSelect from "./InstrumentSelect";
import {useEffect, useState} from "react";

const AddArtistDialog = (props) => {
  const {onClose, open, refreshItems} = props
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
  }, []);

  const createArtist = async (newArtist) => {
    await api.createArtist(newArtist)
    onClose()
    refreshItems()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const newArtist = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      instrumentId: data.get("instrument")
    }
    createArtist(newArtist)
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a new Artist</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box sx={{marginTop: '10px'}}>
            <TextField name="firstName" label="First Name" variant="outlined"/>
          </Box>
          <Box sx={{marginTop: '10px'}}>
            <TextField name="lastName" label="Last Name" variant="outlined"/>
          </Box>
          <Box sx={{marginTop: '10px'}}>
          <InstrumentSelect instruments={instruments} />
          </Box>

          <Box sx={{marginTop: '10px'}}>
            <Button variant="contained" type="submit">Create</Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddArtistDialog
