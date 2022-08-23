import './FormContact.css';

const FormContact = () => {
    return (
        <div className='form-back'>
            <form action='' method=''>
                <div className='form-area'>

                    <h1>Contact Me</h1>

                    <h3>Please provide</h3>
                    <div>
                    <label for='firstname'>First Name:</label>
                    <input id ='firstname' type='text' name='firstname' placeholder='First Name' required></input>
                    </div>

                    <div>
                    <label for='lastname'>Last Name:</label>
                    <input id='lastname' type='text' name='lastname' placeholder='Last Name' required></input>
                    </div>

                    <div>
                    <label for='email'>Email:</label>
                    <input id='email' type='email' placeholder="example@domain.com" required></input>
                    </div>

                    <div>
                    <h3>Are you over the age of 18?</h3>
                    <label for='is_of_age'>Yes:</label>
                    <input id='is_of_age' type='radio' name='age' value='yes' required></input>
                    </div>

                    <div>
                    <label for='not_of'>No:</label>
                    <input type='radio' name='age' value='no' required></input>
                    </div>

                    <br></br>
                    <label for='textarea'>Message</label>
                    <br></br>
                    <textarea name="comment" placeholder='Enter text here...' rows="4" cols="50" className='text-area' required></textarea>
                    <br></br>
                    <input type='submit' value='Send'></input>

                </div>
            </form>

        </div>
    );
};

export default FormContact;