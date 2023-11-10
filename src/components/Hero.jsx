import React from 'react'
import { heroData } from "../data"
import Header from "./Header"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../variants';


const Hero = () => {
  const { pretitle, title, subtitle, btnText } = heroData
  return (
    <section id='home' className='min-h-[980px] bg-hero bg-cover bg-right'>
      <Header />
      <div className="container mx-auto min-h-[980px] flex justify-center items-center">
        <motion.div variants={staggerContainer(0.3, 1)} initial="hidden" whileInView={'show'} className='text-center flex flex-col items-center'>
          <motion.div variants={fadeIn('down', 'tween', 0.2, 1.1)} className='text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'>{pretitle}
          </motion.div>
          <motion.h1 variants={fadeIn('down', 'tween', 0.3, 1.1)} className='h1 mb-5'>{title}
          </motion.h1>
          <motion.p variants={fadeIn('down', 'tween', 0.4, 1.1)} className='text-white max-w-[540px] mb-8'>{subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
            <button className='btn'>{btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero