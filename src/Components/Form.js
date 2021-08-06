import React from 'react';
import './style.css';



const Form = (props) => {

    const [data, setData] = React.useState('');

    const [isValid, setIsValid] = React.useState(true);
    
    const textSubmission = (event) => {
        const InputText = event.target.value
        if (InputText.trim().length > 0) {
            setIsValid(true)
            setData(InputText)
        } else {
            setData('')
        }
    }

    const formSubmission = (event) => {
        event.preventDefault();

        if (data.trim().length > 0) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }

        props.text(data);
        setData('');
    }


    return (
        <div className="main">
            <div className="content">
                <form onSubmit={formSubmission} className="InputForm">
                    <div className="label">Task Name:</div>
                    <div className="theInput"><input className={!isValid ? "Invalid": ''} onChange={textSubmission} type="text" value={data} placeholder="Enter Your Text" /></div>
                    <div className="theButton"><button className="Button" type="submit">Add Task</button></div>
                </form>
            </div>
        </div>
    );
}


export default Form;