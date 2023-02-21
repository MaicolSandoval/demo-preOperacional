import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
const filter = createFilterOptions();

export default function ACField({ paramsAC  }) {
 
  return (
    <React.Fragment>
      <Autocomplete
        size="small"
        value={paramsAC.value}
        onChange={(event, newValue) => {
          paramsAC.state(newValue);         
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={paramsAC.data || []}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.Nombre;
        }}        
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.Nombre}</li>}
        fullWidth
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label={paramsAC.label} />
        )}
      />
    </React.Fragment>
  );
}
