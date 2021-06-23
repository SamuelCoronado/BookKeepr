import React, {useState, useEffect} from 'react'
import FormField from './FormField'

const Form = () => {

   
    const [isFieldClean, setIsFieldClean] = useState([false, false, false]); //Make sure all the fields are ok so it's possible to go to the next step
    const [isButtonEnabled, setIsButtonEnabled] = useState(1); // Enable/Disable next button 

    //Check if retrieved field value is true to change its corresponding array value
    const handleFieldValue = (index, value) => {
      let updatedArr = isFieldClean;
      updatedArr[index] = value;
      setIsFieldClean(updatedArr);
      if(!isFieldClean.includes(false)) setIsButtonEnabled(0);
    } 
    
    const validateEmail = (email) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
         {
           return (true)
         }
           return (false)
       }
    
       const validateName =(name) => {
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(!regName.test(name)){
            return false;
        }else{
            return true;
        }
    }
    
      const validatePass = (pass) => { 
        
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(pass.match(passw)) return true;
         return false;
      }

    return (
       <form className="flex flex-col gap-5 md:pr-28">
            <FormField fieldPlaceHolder='Your full name here' isFieldClean={isFieldClean} handleField={handleFieldValue} fieldLabel='Full Name' fieldType='text' validator={validateName} errorMessage='Name is not valid' index={'0'} />
            <FormField fieldPlaceHolder='Your email' fieldLabel='Email' isFieldClean={isFieldClean} handleField={handleFieldValue} fieldType='text' validator={validateEmail} errorMessage='Email is not valid' index={'1'}/>
            <FormField fieldPlaceHolder='I indetify myself as' fieldLabel='User Type' fieldType='select' selectOptions={['asdsa','adssadas','erger']} />
            <FormField fieldPlaceHolder='Password' fieldLabel='Password'  handleField={handleFieldValue} isFieldClean={isFieldClean} fieldType='password' validator={validatePass} errorMessage={'Password not strong enough'} index={'2'}/>
            <button type="submit" className={`${isButtonEnabled === 1 ? 'bg-gray-100 text-gray-400': 'bg-blue-400 text-white'} p-1 py-2 font-semibold transition duration-200`} disabled={isButtonEnabled}>Next</button>
            <p className="font-sans">By clicking the "Next" button, you agree to creating a free account and to <span className="font-semibold text-blue-500">Terms of Service</span> and <span className="font-semibold text-blue-500">Privacy Policy</span></p>
       </form>
    )
}

export default Form;
