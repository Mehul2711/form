import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const hobbies = [
  { value: "reading", label: "Reading" },
  { value: "gaming", label: "Gaming" },
  { value: "sports", label: "Sports" },
  { value: "cooking", label: "Cooking" },
  { value: "painting", label: "Painting" },
  { value: "music", label: "Music" },
  { value: "traveling", label: "Traveling" },
  { value: "photography", label: "Photography" },
  { value: "writing", label: "Writing" },
  { value: "dancing", label: "Dancing" },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Hobbies</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {hobbies.map((hobby) => (
            <MenuItem
              key={hobby.value}
              value={hobby.value}
              style={getStyles(hobby.value, personName, theme)}
            >
              {hobby.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
