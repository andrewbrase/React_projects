import React, { useState } from 'react';
import './FormContact.css';

const FormContact = () => {
    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');

    // this will get the value of what's entered into the input field
    // you can also group states together in one large object instead of individuals
    // ex useState({ object });

    // const [userInput, setUserInput] = useState({
//      firstname : '',
//      lasntname : '',
//          etc...
    // })

    // const titleChangeHandler = (event) => {
//      setUserInput({
//          ...userInput
//          firstname : event.taget.value
// })
    // }

    const firstnameHandler = (value_entered) => {
        setFirst(value_entered.target.value);
    };

    const lastnameHandler = (value_entered) => {
        setLast(value_entered.target.value);
    };

    const emailHandler = (value_entered) => {
        setEmail(value_entered.target.value);
    };

    const ageHandler = (value_entered) => {
        setAge(value_entered.target.value);
    };

    const messageHandler = (value_entered) => {
        setMessage(value_entered.target.value);
    };

    const submitHandler = (event) => {
        // page will not reload - for visual learning, not with actual?
        event.preventDefault();

        // The right way to send form submissions to email is 
        // by receiving the form submissions in a server-side script 
        // and then sending the email. The server side scripting language 
        // (like PHP Perl, ASP) has more features and facilities to send the email.
        // console.log(firstname,lastname,email,age,message)

        const formData = {
            fname : firstname,
            lname : lastname,
            formEmail : email,
            formAge : age,
            formMessage : message
        }

        console.log(formData);

        // two way binding, we feed the state back into the input
        setFirst('');
        setLast('');
        setEmail('');
        setAge('');
        setMessage('');
    }

    return (
        <div className='form-back'>
            <form onSubmit={submitHandler}>
                <div className='form-area'>

                    <h1>Contact Me</h1>

                    <h3>Please provide</h3>
                    <div>
                    <label>First Name:</label>
                    <input id ='firstname' type='text' name='firstname' placeholder='First Name' required value={firstname} onChange={firstnameHandler}></input>
                    </div>

                    <div>
                    <label>Last Name:</label>
                    <input id='lastname' type='text' name='lastname' placeholder='Last Name' required value={lastname} onChange={lastnameHandler}></input>
                    </div>

                    <div>
                    <label>Email:</label>
                    <input id='email' type='email' placeholder="example@domain.com" required value={email} onChange={emailHandler}></input>
                    </div>

                    <div>
                    <h3>Are you over the age of 18?</h3>
                    <label>Yes:</label>
                    <input id='is_of_age' type='radio' name='age' required value='yes' onChange={ageHandler}></input>
                    </div>

                    <div>
                    <label>No:</label>
                    <input type='radio' name='age' required value='no' onChange={ageHandler}></input>
                    </div>

                    <br></br>
                    <label>Message</label>
                    <br></br>
                    <textarea name="comment" placeholder='Enter text here...' rows="4" cols="50" className='text-area' required value={message} onChange={messageHandler}></textarea>
                    <br></br>
                    <input type='submit' value='Send'></input>

                </div>
            </form>
            
        </div>
    );
};

export default FormContact;