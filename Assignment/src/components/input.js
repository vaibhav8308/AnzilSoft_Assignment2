
import React from 'react'
import { useState } from 'react'
import './Input.css'

function Input(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


/* function to Handle FirstName*/
    function handleFirstName(e) {
     setFirstName(e.target.value)
    };
/* function to Handle LastName*/
    function handleLastName(e) {
      setLastName(e.target.value)
    }

/* function to Add Data in table*/
    function AddToTableAll(e) {
        const data = {
            firstName,
            lastName
        };
        props.value(data)
        clearData();
    }

    function clearData(){
        setFirstName("")
        setLastName("")
    }




    return (
        <div className='input-container'>

            <div className='heading'>User Data</div>
            <div>
                <label>FirstName : </label>
                <input placeholder='FirstName' type="text" value={firstName} onChange={handleFirstName} />
            </div>
            <div>
            <label>LastName : </label>
                <input placeholder='LastName' type="text" value={lastName} onChange={handleLastName} />
            </div>
            <div>
                <button type='submit' onClick={AddToTableAll}>Submit</button>

            </div>

        </div>
    )
}

export default Input