import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"


export async function register(req,res) {
    try {
        const {username , password , email , profile} = req.body;
        /** check the existing user */
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({username} , function(err,user){
                if(err) reject(new Error(err))
                if(user) reject({error :'Please use unique username'})

                resolve();
            })
        });

        /**check for existing email */
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({email},function(err,user){
                if(err) reject(new Error(err))
                if(email)reject({error: 'Please use Unique email'})

                resolve();   
            })
        });


        Promise.all([existEmail,existUsername]).then(()=>{
            if(password){
                bcrypt.hash(password,10)
                .then(hashedPassword =>{

                    const user = new UserModel({
                        username,
                        password: hashedPassword,
                        profile : profile || '',
                        email : email
                    })

                    //return save result as a response
                    user.save()
                    .then(result => res.status(200).send({msg : "User Register Successfull"}))
                    .catch(error => res.status(500).send({error}))

                }).catch(error =>{
                    return res.status(500).send({
                        error :"Enable to hashed password"
                    })
                })
            }

        }).catch(error=>{
            return res.status(500).send({error})
        })
        
    } catch (error) {
        return res.status(500).send(error);        
    }    
}

export async function login(req,res) {
    
    const{ username, password} = req.body;

    try {

        UserModel.findOne({username})
        .then(user =>{
            bcrypt.compare(password, user.password)
            .then(passwordCheck =>{
                if(!passwordCheck) return res.status(400).send({error : "Don't have Pssword"});
                
                // create jwt token

                const token = jwt.sign({
                    userId: user._Id,
                    username : user.username
                }, 'secret',{expiresIn : '24h'});

                return res.status(200).send({
                    msg: 'Login Successfull....!',
                    username : user.username,
                    token
                })
                

            })
            .catch(error =>{
                return res.status(400).send({error : "Pssword dose not match"})                               
            })

        })
        .catch(error =>{
            return res.status(404).send({error : "Username not found"})
        })
        
    } catch (error) {
        return res.status(500).send(error);          
    }
 
}

export async function getUser(req,res) {
    res.json('getUser route')    
}

export async function generateOTP(req,res) {
    res.json('generateOTP route')    
}

export async function verifyOTP(req,res) {
    res.json('verifyOTP route')    
}

export async function createResetSession(req,res) {
    res.json('createResetSession route')    
}

export async function updateUser(req,res) {
    res.json('updateUser route')    
}

export async function resetPassword(req,res) {
    res.json('resetPassword route')    
}

