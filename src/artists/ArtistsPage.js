import {useEffect, useState} from "react";
import api from "../api";
import Artist from "./Artist";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import AddArtistButton from "./AddArtistButton";

const ArtistsPage = () => {
  const [artists, setArtists] = useState([])

  const fetchArtists = () => {
    api.getArtists()
      .then(response => response.json())
      .then(items => setArtists(items))
  }

  useEffect(() => {
    fetchArtists()
  }, []);

  return (
    <div>
      <AddArtistButton refreshItems={fetchArtists}/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fist Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Instrument</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {artists.map(item => <Artist data={item} key={item.id} refreshItems={fetchArtists}/>)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ArtistsPage
