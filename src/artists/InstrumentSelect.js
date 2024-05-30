import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const InstrumentSelect = ({instruments}) => {
  const [instrumentId, setInstrumentId] = useState('')

  const handleChange = (event) => {
    setInstrumentId(event.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Instrument</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={instrumentId}
        label="Instrument"
        onChange={handleChange}
        name="instrument"
      >
        {instruments.map(item => <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>)}

      </Select>
    </FormControl>
  )
}

export default InstrumentSelect
