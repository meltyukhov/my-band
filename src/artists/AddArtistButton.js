import {Button} from "@mui/material";
import {useState} from "react";
import AddArtistDialog from "./AddArtistDialog";

const AddArtistButton = (props) => {
  const {refreshItems} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="contained"
        sx={{marginTop: '5px'}}
        onClick={() => setOpen(true)}
      >
        Add Artist
      </Button>
      <AddArtistDialog
        open={open}
        onClose={() => setOpen(false)}
        refreshItems={refreshItems}
      />
    </>
  )
}

export default AddArtistButton
