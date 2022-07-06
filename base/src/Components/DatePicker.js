import React, {useState} from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import './styles/DatePicker.css'

function DatePickerComponent() {

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const selRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function getSel(ranges) {
    setStartDate(ranges.sel.startDate)
    setEndDate(ranges.sel.endDate)
  }

  return (
    <div className='datepicker'>
      <DateRangePicker ranges={[selRange]} onChange={getSel} />
    </div>
  )
}

export default DatePickerComponent