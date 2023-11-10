import React from 'react'
import Newsletter from "./Newsletter"
import Copyright from "./Copyright"
import Socials from "./Socials"
import { footerData } from '../data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'



const Footer = () => {
  const { contact, hours, social } = footerData
  return (
    <footer id='contact' className='relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32'>
      <div className="container mx-auto h-full">
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView={'show'}
        className='h-full flex flex-col gap-y-4'>
          <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          >
            <Newsletter />
          </motion.div>
          <motion.div 
          variants={fadeIn("up", "tween", 0.6, 1.6)}
          className='flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12 items-center text-center lg:items-start lg:text-left'>
            <div className='flex-1 lg:max-w-[170px]'>
              <div className='capitalize texr-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]'>{contact.title}
              </div>
              <div className='capitalize'>{contact.address}</div>
              <div className='capitalize'>{contact.phone}</div>
            </div>
            <div className='flex-1'>
              <div className='capitalize texr-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]'>{hours.title}
              </div>
              <div className='flex gap-x-[46px]'>
                {hours.program.map((item, index) => {
                  return (
                    <div className='capitalize' key={index}>
                      <div>
                        <div>{item.days}</div>
                        <div className='text-[20px] text-accent'>{item.hours}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='flex-1 lg:max-w-[280px] mb-12'>
              <div className='capitalize texr-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]'>{social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
          <Copyright />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer