import React from 'react'
import { useState,useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import styles from "./Login.module.css"
import loader from "../assets/success.mp4"
import {ProductsKeys} from '../main.jsx'

const Login = () => {
    
    const {loggedIn,setLoggedIn} = useContext(ProductsKeys);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [checkPass, setCheckPass] = useState(true);
    const [checkAll, setCheckAll] = useState(true);
    const [success, setSuccess] = useState(false);


    function updateEmail(e) {
        let value = e.target.value;
        setEmail(value);
    }

    function updatePass(e) {
        let value = e.target.value;
        setPass(value); 
    }

    function Validity(e) {
        e.preventDefault();
        if (pass == "" || email == "") {
            setCheckAll(false);
            setInterval(() => {
                setCheckAll(true);
            }, 5000);
            return false;
        }
        else if (pass != localStorage.getItem("password") || email != localStorage.getItem("email")) {
            setCheckPass(false);
            setInterval(() => {
                setCheckPass(true);
            }, 5000);
            return false;
        }
        else {
            setCheckAll(true);
            setCheckPass(true);
            setSuccess(true);
            setLoggedIn(true);
            setTimeout(() => {
                navigate("/")
            }, 3000);
        }

    }
    return (
        <div className={styles.Root}>
            <video width="100" autoPlay muted loop playsInline className={`${styles.Loader} ${success ? styles.see : styles.noSee}`}>
                <source src={loader} type="video/mp4" />
            </video>
            <div className={styles.Container}>
                <h1 className={styles.Heading}>Login</h1>
                <form onSubmit={Validity} className={styles.formInputs} >
                    <input type="email" id="email" placeholder="Email" onChange={updateEmail} /><br />
                    <input type="password" id="password" placeholder="Password" onChange={updatePass} /><br />
                    <p className={`${styles.warningTxt} ${checkPass ? styles.invisible : styles.visible}`}>Invalid email or password !</p>
                    <p className={`${styles.warningTxt} ${checkAll ? styles.invisible : styles.visible}`}>Email or Password cannot be Empty!</p>
                    <button type="submit" className={styles.LoginBtn}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
