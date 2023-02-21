import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectField({ params }) {
  params = params || {};
  params.Seleccione =
    params.Seleccione !== undefined ? params.Seleccione : true;
  params.random = params.random !== undefined ? params.random : true;
  const [age, setAge] = React.useState("");

  //console.log(params.Seleccione);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const randomDdl = params.random
    ? Math.random().toString(36).substring(2, 6)
    : "";

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ paddingRight: "10px", backgroundColor: "#fff" }}
          id={(params.id || "LblElem") + "_" + randomDdl}
        >
          {params.label || ""}
        </InputLabel>
        <Select
          size="small"
          sx={{ textAlign: "left" }}
          labelId="demo-simple-select-label"
          id={(params.id || "LblElem") + "_" + randomDdl}
          value={
            params.value ||
            (params.Seleccione || (params.data || []).length == 0
              ? "-1"
              : params.data[0][params.ColumnText])
          }
          label="Age"
          onChange={handleChange}
        >
          {params.Seleccione && <MenuItem value={-1}>--Seleccione--</MenuItem>}
          {(params.data || []).length > 0
            ? (params.data || []).map((data, index) => (
                <MenuItem key={index} value={data[params.ColumnText] || "-1"}>
                  {data[params.ColumnText] || ""}
                </MenuItem>
              ))
            : params.Seleccione && (
                <MenuItem value={-1}>--Seleccione--</MenuItem>
              )}
        </Select>
      </FormControl>
    </Box>
  );
}
