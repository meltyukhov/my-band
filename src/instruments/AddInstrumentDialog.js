import {Box, Button, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import api from "../api";

const AddInstrumentDialog = (props) => {
  const {onClose, open, refreshItems} = props

  const createInstrument = async (newInstrument) => {
    await api.createInstrument(newInstrument)
    onClose()
    refreshItems()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const newInstrument = {
      name: data.get("name")
    }
    createInstrument(newInstrument)
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a new Instrument</DialogTitle>
      <DialogContent>
      <form onSubmit={handleSubmit}>
        <Box sx={{marginTop: '10px'}}>
          <TextField id="name" name="name" label="Name" variant="outlined"/>
        </Box>
        <Box sx={{marginTop: '10px'}}>
          <Button variant="contained" type="submit">Create</Button>
        </Box>
      </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddInstrumentDialog
