import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import '../sign-up-form/sign-up-form.styles.scss'
import Button from '../button/button.component';


const SignUpForm = () => {

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('password not matchung')
            return;

        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, displayName)
            resetFormFields()


        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email Already in use, Please Sign In')

            } else {
                console.log(error);
            }

        }
    }

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { displayName, email, password, confirmPassword } = formFields

    const changeHandler = (event) => {

        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
        // console.log(formFields);

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account ?</h2>
            <span>Sign up with email & password</span>

            <form onSubmit={handleSignUpSubmit} >

                <FormInput label='Display Name' type="text" onChange={changeHandler} name="displayName" value={displayName} />
                <FormInput label='Email' type="email" onChange={changeHandler} name="email" value={email} />
                <FormInput label='Password Name' type="password" onChange={changeHandler} name="password" value={password} />
                <FormInput label='Confirm Password' type="password" onChange={changeHandler} name="confirmPassword" value={confirmPassword} />

                <Button type='submit'  >Submit</Button>


            </form>




        </div>
    )
}


export default SignUpForm