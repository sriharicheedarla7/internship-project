import React from 'react';
import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';



const Recovery = () => {

  return (
    <div className='container mx-auto'>
      <Toaster position ='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center py-6'>
        <div className={styles.glass}>
          <div className='text flex flex-col items-center'>
            <h4 className='text-4xl font-bold'>Recovery </h4>
            <span className='py-4 text-xl text-center text-gray-5 w-2/3'>Enter OTP to Recover Password</span>

          </div>
          <form className='pt-20'>

            <div className='textbox flex flex-col items-center gap-6'> 
              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-gray-500'>Enter 6 Degit OTP send your Email Address</span>
                <input className={styles.textbox} type='text' placeholder='Enter OTP'/>
              </div>
              <button className={styles.btn} type='submit'>Recover</button>
            </div>
            <div className='py-4 text-center'>
              <span className='text-gray-500'>Can't get OTP ? <button className='text-red-500'>Resend</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery