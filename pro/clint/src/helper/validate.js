import toast from 'react-hot-toast';


/**validaate Username */

function UsernameVerify(error={},values) {
    if(!values.Username){
        error.Username = toast.error('User Name Required...!')
    }
    else if(values.Username.includes(" ")){
        error.Username = toast.error("Invalide User Name.....!")
    }
    return error;
}

/**validate login page user name */

export async function UsernameValidate(values) {
    const errors = UsernameVerify({}, values)
    
    return errors;
}

/**validate Password */

 function PasswordVerify(error={},values) {

    const specialChars = /[!@#$%^&*()_+\-=[\]{};"':\\|,.<>?~]/;

    if(!values.Password){
        error.Password = toast.error('Password Required...!')
    }
    else if(values.Password.includes(" ")){
        error.Password = toast.error("Wrong Password.....!")
    }
    else if(values.Password.length<4){
        error.Password = toast.error("Password Must Morethan 8 Chrctrs.....!")
    }
    else if(!specialChars.test(values.Password)){
        error.Password = toast.error("Password Must Have Special Chracter.....!")
    }
    return error;  
}


/**validate password */

export async function PasswordValidate(values) {
    const errors = PasswordVerify({}, values)    
    return errors;
}

/**validate reset password */

export async function ResetPasswordValidation(values){
    const errors = PasswordVerify({}, values); 

    if(values.Password !== values.confirm_pwd){
        errors.exist = toast.error("Password Not Match...!")
    }

    return errors;
}

/**validate registration */

export async function registerValidattion(values){
    const errors = UsernameVerify({}, values);
    PasswordVerify(errors, values);
    EmailVerify(errors, values);

    return errors;
}

/**validate email */

function EmailVerify(error={}, values) {
    if(!values.email){
        error.email = toast.error("Email Required...!")
    }
    else if(values.email.includes("")){
        error.email = toast.error('Wrong Email ...!')
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email= toast.error("Invalid email address.....!")
    }

    return error;
}

/**validate profile page */

export async function profileValidation(values){
    const error = EmailVerify({},values)
    return error;
}