import React, { useEffect, useState } from "react";
import { Select, MenuItem, SelectChangeEvent, Box } from "@mui/material";
import SelectInterface from "../../interface/SelectInterface";

export default function SelectUI({
  options,
  defaultValue,
  autoWidth,
  onValueChange,
  width,
  height,
  sxSelect,
  sxStartIcon,
  sxEndIcon,
}: SelectInterface) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedValue(value);
    onValueChange?.(value); 
  };

  const renderOption = (option) => (
    <>
      {option.startIcon && (
        <Box component="span" sx={sxStartIcon}>
          {option.startIcon}
        </Box>
      )}
      <Box component="span">{option.label}</Box>
      {option.endIcon && (
        <Box component="span" sx={sxEndIcon}>
          {option.endIcon}
        </Box>
      )}
    </>
  );

  const renderValue = (value: string) => {
    const selectedOption = options.find((option) => option.value === value);
    return (
      <Box display="flex" alignItems="center">
        {selectedOption && renderOption(selectedOption)}
      </Box>
    );
  };

  return (
    <Select
      autoWidth={autoWidth}
      value={selectedValue}
      onChange={handleChange}
      renderValue={renderValue}
      sx={sxSelect || { width:  width, height: height }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {renderOption(option)}
        </MenuItem>
      ))}
    </Select>
  );
}
