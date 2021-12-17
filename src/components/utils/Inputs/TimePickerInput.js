import React from 'react'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from "@mui/lab/AdapterDateFns";


export default function TimePickerInput(props) {
    const {label,time,setTime} = props;

    return (
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
         <TimePicker
        //  views={view ? views : undefined} 
          label={label}
          value={time}
          onChange={(handleTimeChange) =>
          {
              setTime(handleTimeChange);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    
    )
}

