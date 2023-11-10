import React, { useState } from 'react'
import { reservationData } from '../data'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import '../timepicker.css';
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

const Reservation = () => {
  const { title, subtitle, modelImg, btnText} = reservationData
  const [startDate, setStartDate] = useState(new Date())
  const [value, setValue] = useState("10:00")
  return (
    null
  )
}

export default Reservation