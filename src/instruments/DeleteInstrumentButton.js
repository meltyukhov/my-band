import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@mui/material";
import api from "../api";

const DeleteInstrumentButton = ({id, refreshItems}) => {
  const onClick = async () => {
    await api.deleteInstrument(id)
    refreshItems()

  }

  return (
    <IconButton onClick={onClick} edge="end" aria-label="delete">
      <DeleteIcon/>
    </IconButton>
  )
}

export default DeleteInstrumentButton
