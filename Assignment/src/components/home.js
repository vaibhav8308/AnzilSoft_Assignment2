import React from 'react'
import './Home.css'
import { useState } from 'react'
import Input from './input'

function Home() {

    const [addName, setAddName] = useState([])

    const tableData = addName.map((ele) => { //  function to add data to tsble row
        return (
            <tr>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
            </tr>
        )
    })
    

    const newRow = (List) => {     // function to add new row
 
        const updateList = [...addName]
        updateList.push(List)
        setAddName(updateList)
    }

    return (
        <div className='output'>
            <Input value={newRow} />
            <table className='table'>
                <thead>
                    <tr>
                        <td>FirstName</td>
                        <td>LastName</td>
                    </tr>

                </thead>
                <tbody>
                    {tableData}
                </tbody>

            </table>
        </div>
    )
}

export default Home