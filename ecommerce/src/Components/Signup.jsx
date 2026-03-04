import React from 'react'
import styles from "./Signup.module.css"

const Signup = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.Container}>
                <h1 className={styles.Heading}>Sign Up</h1>
                <form className={styles.formInputs} action="">
                    <input type="email" id="email" placeholder="Email" /><br />
                    <input type="password" id="password" placeholder="Password" /><br />
                    <input type="password" id="confirm" placeholder="Confirm Password" />
                <button className={styles.signupBtn}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
