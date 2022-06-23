import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    

} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {

    const logUser = async () => {

        const { user } = await signInWithGooglePopup()
        /* this method create or get user dor ref  */
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In</h1>

            <button onClick={logUser}>Sign In With Google Pop up</button>
            <SignUpForm />

        </div>
    )
}
export default SignIn