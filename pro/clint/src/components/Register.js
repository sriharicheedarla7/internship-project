import { Component } from 'react';
import React from 'react';
import Avatar from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
//import { useFormik } from 'formik';
//import {registerValidattion} from '../helper/validate.js'
import {Toaster} from 'react-hot-toast';
//import convertToBase64 from '../helper/convert.js';


/*const Register = () => {

  const [file,setFile] = useState();
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  
    
      
  console.log(Username)

  /*const formik = useFormik({
    initialValues : {
      Username:"",
      Email:"",
      Password :"",
    },
    validate :registerValidattion,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit :async values =>{
      values = await Object.assign(values,{profile : file || " "})
      console.log(values)
    }
  })


  /**formik doensn't support file upload so we need to create this handler 
  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  } 

  const registerUser = async (e) => {
    e.preventDefault()
    //const {Username, Email, Password} = this.state
      const userDetails = {Username, Email, Password}
      console.log(Username)
      console.log("Akhil")
      const url = "http://localhost:3300/registerUser"
      const options={
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
      },
        body:JSON.stringify(userDetails)
      }
      const response = await fetch(url, options)
      //const data = await response.json()
      if (response.ok===true){
      alert("user details saved")  
      }
  }
<input onChange={onUpload} type='file' id='profile' name='profile'/>
  
}*/

class Register extends Component{

  state={Username:"",Email:"", Password:"" }

  handleName =(e) => this.setState({Username:e.target.value})
    
  handleEmail =(e) => this.setState({Email:e.target.value})

  handlePassword =(e) => this.setState({Password:e.target.value})
    
  registerUser = async (e) => {
    e.preventDefault()
    const {Username, Email, Password} = this.state
      const userDetails = {Username, Email, Password}
      console.log(Username)
      const url = "http://localhost:3300/registerUser"
      const options={
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
      },
        body:JSON.stringify(userDetails)
      }
      const response = await fetch(url, options)
      //const data = await response.json()
      if (response.ok===true){
      alert("user details saved")  
      }
  }  

  render(){
    const {Username, Email, Password} = this.state
    return (
      <div className='container mx-auto'>
      <Toaster position ='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center py-3'>
        <div className={styles.glass} style={{width:'35%'}}>
          <div className='text flex flex-col items-center'>
            <h4 className='text-3xl font-bold'>Register</h4>
            <span className='py-4 text-xl text-center text-gray-5 w-2/3'>Happy to Join you !</span>

          </div>
          <form className='py-4'/*onSubmit={formik.handleSubmit}*/>
            <div className='profile flex justify-center py-3'>
              <label htmlFor='profile'>
               <img src={"file" || Avatar} className={styles.profile_img} alt='Avatar' />
              </label>
             
            </div>
            <div className='textbox flex flex-col items-center gap-3'> 
              <input onChange={this.handleName} value={Username}  className={styles.textbox} type='text' placeholder='Enter Profile Name'/>
              <input onChange={this.handleEmail} value={Email}  className={styles.textbox} type='text' placeholder='Enter Email *'/>
              <input onChange={this.handlePassword} value={Password}  className={styles.textbox} type='text' placeholder='Enter Password *'/>
              <button className={styles.btn} type='submit' onClick={this.registerUser}>Register</button>
            </div>
            <div className='py-4 text-center'>
              <span className='text-gray-500'>Already Register ? <Link className='text-red-500' to='/Login'>Login</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default Register