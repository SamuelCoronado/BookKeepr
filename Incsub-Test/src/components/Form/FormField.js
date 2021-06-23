import React, {useState} from 'react'
import './FormFieldCSS.css'


const Select = ({selectOptions, placeholder}) => {
    return(
    <select name="" id="" placeholder={placeholder}>
        {
            selectOptions.map((selectOption) => <option value={selectOption}>{selectOption}</option>)
        }
    </select>
    )
}

const FormField = ({fieldLabel, fieldPlaceHolder, fieldType, selectOptions, validator, errorMessage, isFieldClean, handleField, index }) => {


    //State used in case a field is password type. This way is easier to switch between pass and text type
    const [type, setType] = useState('password');

    const [isClean, setIsClean] = useState(true);

    //Helper function to show/hide password
    const toggleType = (type) => {
        type === 'text'? setType('password'): setType('text');
    }

   if(isFieldClean == null) return null
   else{
    
    return(
    
        <div className={`field ${!isClean && 'error'}`} >
            {
                fieldType === 'select'? 
                <>
                    <Select selectOptions={selectOptions} placeholder={fieldPlaceHolder} />
                    <label htmlFor="">{fieldLabel}</label>
                </>
                :
                <>
                <input type={fieldType === 'password'? type : fieldType} placeholder={fieldPlaceHolder} onChange={(e) => {handleField(index, validator(e.target.value)); setIsClean(isFieldClean[index])}} className={!isClean && 'input-error'}/>
                {
                    fieldType === 'password' &&  <i class="fas fa-eye" onClick={() => toggleType(type)}></i>
                }
                <label htmlFor="">{fieldLabel}</label>
                </>
            }
            {
                !isClean && <p>{errorMessage}</p>
            }
        </div>
            
            )
   }

   
}

export default FormField
