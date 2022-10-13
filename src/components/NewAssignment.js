import React from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

function UpdateForm() {
    const [inputs, setInputs] = useState({name: "", dueDate: "", courseID: ""});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8081/gradebook/newAssignment/' + inputs.courseID,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: inputs.name,
                dueDate: inputs.dueDate
            })
        })
        .then(response => {
                var msg = document.getElementById("statusMsg");
                if(response.status == 200) {
                    msg.innerText = "Assignment added successfully";
                    msg.classList.remove("failureStatus");
                    msg.classList.add("successStatus");
                } else {
                    msg.innerText = "Assignment was unable to be added";
                    msg.classList.remove("successStatus");
                    msg.classList.add("failureStatus");
                }
        } )
        .catch(err => console.error(err))
    }
    
    return (
        <form onSubmit={handleSubmit} class="formSpacing">
            <div>
                <label>Assignment Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={inputs.name}
                        onChange={handleChange}
                        className = "formInputMargin"
                    />
                </label>
            </div>

            <div>
                <label>Due Date:
                    <input
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        value={inputs.dueDate}
                        onChange={handleChange}
                        className = "formInputMargin"
                    />
                </label>
            </div>

            <div>
                <label>Course ID:
                    <input
                        type="text"
                        name="courseID"
                        id="courseID"
                        value={inputs.courseID}
                        onChange={handleChange}
                        className = "formInputMargin"
                    />
                </label>
            </div>

            <div>
                <Button 
                    type="submit"
                    id="submit"
                    variant="outlined"
                    color="primary"
                    style={{margin: 10}}>
                    Add Assignment
                </Button>
            </div>
        </form>
      );
}
class NewAssignment extends React.Component {
      render() {
        return (
            <main>
                <h1>Add New Assignment</h1>
                <div id="statusMsg"></div>
                <UpdateForm />
            </main>
        );
      }
}

export default NewAssignment;