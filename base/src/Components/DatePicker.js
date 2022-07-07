import React, {useState} from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import './styles/DatePicker.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function DatePickerComponent(props) {

  let navigate = useNavigate()

  const [guests, setGuests] = React.useState()

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }


  return (
    <div className='datepicker'>
      <DateRangePicker className='pickerBoard' ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of guests</h2>
      <input min={0} defaultValue={2} type='number' onChange={e => setGuests(e)}/>
      <Button onClick={() => navigate('/search', {replace: true})}>Search Best Offers</Button>
    </div>
  )
}

export default DatePickerComponent