import api from "../api";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteArtistButton = ({id, refreshItems}) => {
  const onClick = async () => {
    await api.deleteArtist(id)
    refreshItems()
  }

  return (
    <IconButton onClick={onClick} edge="end" aria-label="delete">
      <DeleteIcon/>
    </IconButton>
  )
}

export default DeleteArtistButton
