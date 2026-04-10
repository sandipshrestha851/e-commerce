import React from 'react'
import { useState } from 'react'
import styles from "./Signup.module.css"
// import Login from "./Login.jsx"
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const [checkPass, setCheckPass] = useState(true);
    const [checkAll, setCheckAll] = useState(true);


    function updateEmail(e) {
        let value = e.target.value;
        setEmail(value);

        console.log(localStorage.getItem("email"));
    }

    function updatePass(e) {
        let value = e.target.value;
        setPass(value);

    }

    function updateConfirm(e) {
        setConfirm(e.target.value);
    }

    function Validity(e) {
        e.preventDefault();
        if (email == "" || pass == "" || confirm == "") {
            setCheckAll(false);
            
            setTimeout(() => {
                setCheckAll(true);
            }, 5000);
            return false;
        }
        if (pass != confirm) {
            setCheckPass(false);
            setTimeout(() => {
                setCheckPass(true);
            }, 5000);
            return false;
        }
            localStorage.setItem("email", email);
            localStorage.setItem("password", pass);
            navigate("/login");
    }

    return (
        <div className={styles.Root}>
            <div className={styles.Container}>
                <h1 className={styles.Heading}>Sign Up</h1>
                <form onSubmit={Validity} className={styles.formInputs} >
                    <input type="email" id="email" placeholder="Email" onChange={updateEmail} /><br />
                    <input type="password" id="password" placeholder="Password" onChange={updatePass} /><br />
                    <input type="password" id="confirm" placeholder="Confirm Password" onChange={updateConfirm} />
                    <p className={`${styles.warningTxt} ${checkAll ? styles.invisible : styles.visible}`}>Email or Password cannot be Empty!</p>
                    <p className={`${styles.warningTxt} ${checkPass ? styles.invisible : styles.visible}`}>Password doesnot match!</p>
                    <button type="submit" className={styles.signupBtn}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
