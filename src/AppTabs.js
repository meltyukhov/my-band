import {Box, Tab, Tabs} from "@mui/material";
import InstrumentsPage from "./instruments/InstrumentsPage";
import {useState} from "react";
import ArtistsPage from "./artists/ArtistsPage";

const CustomTabPanel = (props) => {
  const {children, value, index} = props
  return (
    <div hidden={value !== index}>
      {value === index && children}
    </div>
  )
}

const AppTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Artists"/>
          <Tab label="Instruments"/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ArtistsPage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <InstrumentsPage/>
      </CustomTabPanel>
    </Box>
  )
}

export default AppTabs
