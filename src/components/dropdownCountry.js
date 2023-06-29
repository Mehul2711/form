import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import countries from "react-select-country-list";

export default function Country() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {countries()
            .getData()
            .map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
