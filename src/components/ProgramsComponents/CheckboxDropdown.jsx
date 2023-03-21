import * as React from 'react';
import {Checkbox, Select, ListItemText, FormControl, MenuItem } from "@mui/material"

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const CheckboxDropdown = (props) => {
  const [checkedItems, setCheckedItems] = React.useState([]);
  
  const names = props.items


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCheckedItems(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

    props.onItemChecked(value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={checkedItems}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={checkedItems.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CheckboxDropdown