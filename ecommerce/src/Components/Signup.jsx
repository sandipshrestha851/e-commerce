import React from 'react'
import {useState} from 'react'
import styles from "./Signup.module.css"

const Signup = () => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [confirm,setConfirm] = useState("");
    const [checkPass,setCheckPass] = useState(true);


    function updateEmail(e) {
        let value = e.target.value;
        setEmail(value);
        localStorage.setItem("email",value);
    }

    function updatePass(e) {
        setPass(e.target.value);
        localStorage.setItem("password",pass);
    }

    function updateConfirm(e) {
        setConfirm(e.target.value);
    }

    function Validity(e){
        
        if(pass!=confirm){
            setCheckPass(false);
            e.preventDefault();
            return false;
        }                             
            setCheckPass(true);
    }

    return (
        <div className={styles.Root}>
            <div className={styles.Container}>
                <h1 className={styles.Heading}>Sign Up</h1>
                <form onSubmit={Validity} className={styles.formInputs} >
                    <input type="email" id="email" placeholder="Email" onChange={updateEmail} /><br />
                    <input type="password" id="password" placeholder="Password" onChange={updatePass} /><br />
                    <input type="password" id="confirm" placeholder="Confirm Password" onChange={updateConfirm}  />
                    <p className={checkPass?styles.invisible:styles.visible}>Password doesnot match!</p>
                <button type="submit" className={styles.signupBtn}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
