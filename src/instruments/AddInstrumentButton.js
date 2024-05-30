import {Button} from "@mui/material";
import {useState} from "react";
import AddInstrumentDialog from "./AddInstrumentDialog";

const AddInstrumentButton = (props) => {
  const {refreshItems} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="contained"
        sx={{marginTop: '5px'}}
        onClick={() => setOpen(true)}
      >
        Add Instrument
      </Button>
      <AddInstrumentDialog
        open={open}
        onClose={() => setOpen(false)}
        refreshItems={refreshItems}
      />
    </>
  )
}

export default AddInstrumentButton
