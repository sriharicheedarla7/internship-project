import React from 'react';
import Avatar from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
import { useFormik } from 'formik';
import {PasswordValidate} from '../helper/validate.js'
import {Toaster} from 'react-hot-toast';



const Password = () => {

  const formik = useFormik({
    initialValues : {
      Password :""
    },
    validate :PasswordValidate,
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
        <div className={styles.glass}>
          <div className='text flex flex-col items-center'>
            <h4 className='text-4xl font-bold'>Hello We Meet Again..!</h4>
            <span className='py-4 text-xl text-center text-gray-5 w-2/3'>Explane More By Connecting With Us</span>

          </div>
          <form className='py-4'onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={Avatar} className={styles.profile_img} alt='Avatar' />
            </div>
            <div className='textbox flex flex-col items-center gap-6'> 
              <input {...formik.getFieldProps('Password')} className={styles.textbox} type='text' placeholder='Enter Password'/>
              <button className={styles.btn} type='submit'>Let's Go</button>
            </div>
            <div className='py-4 text-center'>
              <span className='text-gray-500'>Forgot Password ? <Link className='text-red-500' to='/Recovery'>Recovery</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Password