import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import FormField from './FormField'

const Form = ({setUser}) => {

   
    const [isFieldClean, setIsFieldClean] = useState([false, false]); //Make sure all the fields are ok so it's possible to go to the next step
    const [isButtonEnabled, setIsButtonEnabled] = useState(1); // Enable/Disable next button 
    
    const [email, setEmail] = useState(null);

    //Check if retrieved field value is true to change its corresponding array value
    const handleFieldValue = (index, value) => {
      let updatedArr = isFieldClean;
      updatedArr[index] = value;
      setIsFieldClean(updatedArr);
      if(!isFieldClean.includes(false)) setIsButtonEnabled(0);
    } 
    
    const validateEmail = (email) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) return (true)
        return (false)
       }
    
      const validatePass = (pass) => { 
        
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(pass.match(passw)) return true;
         return false;
      }

    return (
       <form className="w-5/6 flex flex-col gap-5 text-xs">
            <FormField fieldPlaceHolder='Your email' fieldLabel='Email' isFieldClean={isFieldClean} handleField={handleFieldValue} fieldType='text' validator={validateEmail} errorMessage='Email is not valid' index={'0'} onChange={setEmail}/>
            <FormField fieldPlaceHolder='Password' fieldLabel='Password'  handleField={handleFieldValue} isFieldClean={isFieldClean} fieldType='password' validator={validatePass} errorMessage={'Password not strong enough'} index={'1'} onChange={()=>{}}/>
            <Link to="/">
              <button type="submit" className={`${isButtonEnabled === 1 ? 'bg-gray-100 text-gray-400': 'bg-blue-400 text-white'} p-1 py-2 rounded w-full font-semibold transition duration-200`} disabled={isButtonEnabled} onClick={()=>{setUser(email)}}>Register</button>
            </Link>
       </form>
    )
}

export default Form;
