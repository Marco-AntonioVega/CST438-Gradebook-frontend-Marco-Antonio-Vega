import React from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

function UpdateForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit} class="formSpacing">
            <div>
                <label>Assignment Name:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>Due Date:
                    <input
                        type="date"
                        name="dueDate"
                        value={inputs.dueDate}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>Course ID:
                    <input
                        type="text"
                        name="courseID"
                        value={inputs.courseID}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <Button 
                    type="submit"
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
                <UpdateForm />
            </main>
        );
      }
}

export default NewAssignment;