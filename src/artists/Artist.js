import {useEffect, useState} from "react";
import api from "../api";
import {TableCell, TableRow} from "@mui/material";
import DeleteArtistButton from "./DeleteArtistButton";

const Artist = ({data, refreshItems}) => {
  const [instrument, setInstrument] = useState("")

  const getInstrument = () => {
    api.getInstrument(data.instrumentId)
      .then(response => response.json())
      .then(item => setInstrument(item.name))
  }

  useEffect(() => {
    getInstrument()
  }, []);

  return (
    <TableRow>
      <TableCell>{data.firstName}</TableCell>
      <TableCell>{data.lastName}</TableCell>
      <TableCell>{instrument}</TableCell>
      <TableCell><DeleteArtistButton id={data.id} refreshItems={refreshItems}/></TableCell>
    </TableRow>
  )
}

export default Artist
