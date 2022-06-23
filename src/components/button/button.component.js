import React from 'react'
import  './button.styles.scss'

const BUTTON_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

export default function Button({ children, button_type, ...otherProps }) {
    return (
        <div>
            <button {...otherProps}

                className={`${BUTTON_CLASSES[button_type]} button-container`}  >

                {children}


            </button>


        </div>
    )
}
