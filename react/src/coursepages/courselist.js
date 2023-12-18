
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedList() {
  const [openHtml, setOpenHtml] = React.useState(true);
  const [openCss, setOpenCss] = React.useState(true);
  const [openJs, setOpenJs] = React.useState(true);

  const handleClickHtml = () => {
    setOpenHtml(!openHtml);
  };

  const handleClickCss = () => {
    setOpenCss(!openCss);
  };

  const handleClickJs = () => {
    setOpenJs(!openJs);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '8%', marginLeft: '37%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Course Content
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickHtml}>
        <ListItemText primary="Module 1" />
        {openHtml ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openHtml} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="1. HTML Introduction" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="2. HTML Tags" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="3. HTML Elements" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="4. HTML Forms" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="5. HTML5 Features" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickCss}>
        <ListItemText primary="Module 2" />
        {openCss ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCss} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="1. CSS Basics" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="2. CSS Layout" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="3. CSS Flexbox" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="4. CSS Grid" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickJs}>
        <ListItemText primary="Module 3" />
        {openJs ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openJs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="1. JavaScript Basics" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="2. DOM Manipulation" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="3. Events and Event Handling" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="4. Asynchronous JavaScript" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
