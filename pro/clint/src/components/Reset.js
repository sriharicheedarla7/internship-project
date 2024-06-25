import React from 'react';
import styles from '../styles/Username.module.css';
import { useFormik } from 'formik';
import {ResetPasswordValidation} from '../helper/validate.js'
import {Toaster} from 'react-hot-toast';



const Reset = () => {

  const formik = useFormik({
    initialValues : {
      Password :"",
      confirm_pwd:""
    },
    validate :ResetPasswordValidation,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit :async values =>{
      console.log(values)
    }
  })
  return (
    <div className='container mx-auto'>
      <Toaster position ='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center py-6'>
        <div className={styles.glass} style = {{width:'50%'}}>
          <div className='text flex flex-col items-center'>
            <h4 className='text-4xl font-bold'>Reset</h4>
            <span className='py-4 text-xl text-center text-gray-5 w-2/3'>Enter New Password</span>

          </div>
          <form className='pt-20'onSubmit={formik.handleSubmit}>
           
            <div className='textbox flex flex-col items-center gap-6'> 
              <input {...formik.getFieldProps('Password')} className={styles.textbox} type='text' placeholder='New Password'/>
              <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type='text' placeholder='Confirm Password'/>
              <button className={styles.btn} type='submit'>Reset</button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset