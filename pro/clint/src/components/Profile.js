import React, { useState } from 'react';
import Avatar from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
import { useFormik } from 'formik';
import {profileValidation} from '../helper/validate.js'
import {Toaster} from 'react-hot-toast';
import convertToBase64 from '../helper/convert.js';


const Profile = () => {

  const [file,setFile] = useState();

  const formik = useFormik({
    initialValues : {
      Firstname:"",
      Lastname:"",
      Mobile :"",
      Email:"",
      Address:""
    },
    validate :profileValidation,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit :async values =>{
      values = await Object.assign(values,{profile : file || " "})
      console.log(values)
    }
  })


  /**formik doensn't support file upload so we need to create this handler */
  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className='container mx-auto'>
      <Toaster position ='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center py-3'>
        <div className={styles.glass} style={{width:'35%'}}>
          <div className='text flex flex-col items-center'>
            <h4 className='text-3xl font-bold'>Profile</h4>
            <span className='py-4 text-xl text-center text-gray-5 w-2/3'>You can Update Details !</span>

          </div>
          <form className='py-4'onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-3'>
              <label htmlFor='profile'>
               <img src={file || Avatar} className={styles.profile_img} alt='Avatar' />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile'/>
            </div>
            <div className='textbox flex flex-col items-center gap-3'>

              <div className='flex w-3/4 gap-3'>
                <input {...formik.getFieldProps('first Name')} className={styles.textbox} type='text' placeholder='Enter First Name'/>
                <input {...formik.getFieldProps('last Name')} className={styles.textbox} type='text' placeholder='Enter Last Name'/>
              </div>

              <div className='flex w-3/4 gap-3'>
                <input {...formik.getFieldProps('mobile')} className={styles.textbox} type='text' placeholder='Enter Mobile Number'/>
                <input {...formik.getFieldProps('email')} className={styles.textbox} type='text' placeholder='Enter Email Id'/>
              </div>

                <input {...formik.getFieldProps('address')} className={styles.textbox} type='text' placeholder='Enter Address'/>                
                <button className={styles.btn} type='submit'>Update</button>

            </div>
            <div className='py-4 text-center'>
              <span className='text-gray-500'>Already Register ? <Link className='text-red-500' to='/Login'>Logout</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile