import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logUser = async () => {

        const {user} = await signInWithGooglePopup()
        /* this method create or get user dor ref  */
        console.log(user);

    }



    return (
        <div>
            <h1>Sign In</h1>

            <button onClick={logUser}>Sign In With Google Pop up</button>

        </div>


    )
}
export default SignIn