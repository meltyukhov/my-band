import {ListItem, ListItemButton, ListItemText} from "@mui/material";
import DeleteInstrumentButton from "./DeleteInstrumentButton";


const Instrument = ({data, refreshItems}) => {

  return (
    <div>
      <ListItem
        secondaryAction={<DeleteInstrumentButton id={data.id} refreshItems={refreshItems}/>}
      >
        <ListItemButton>
          <ListItemText primary={data.name}/>
        </ListItemButton>
      </ListItem>
    </div>
  )
}

export default Instrument
