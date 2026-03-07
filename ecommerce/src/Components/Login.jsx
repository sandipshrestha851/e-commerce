import React from 'react'
import {useState} from 'react'
import styles from "./Login.module.css"

const Login = () => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [checkPass,setCheckPass] = useState(true);


    function updateEmail(e) {
        let value = e.target.value;
        setEmail(value);
    }

    function updatePass(e) {
        let value = e.target.value;
        setPass(value);
    }

    function Validity(e){
        
        if(pass!=localStorage.getItem("password") || email!=localStorage.getItem("email") ){
            setCheckPass(false);
            e.preventDefault();
            return false;
        }                             
            setCheckPass(true);
    }

    return (
        <div className={styles.Root}>
            <div className={styles.Container}>
                <h1 className={styles.Heading}>Login</h1>
                <form onSubmit={Validity} className={styles.formInputs} >
                    <input type="email" id="email" placeholder="Email" onChange={updateEmail} /><br />
                    <input type="password" id="password" placeholder="Password" onChange={updatePass} /><br />
                    <p className={checkPass?styles.invisible:styles.visible}>Invalid email or password !</p>
                <button type="submit" className={styles.LoginBtn}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
