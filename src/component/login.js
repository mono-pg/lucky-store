import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ handleLogin, registrasiData }) => {
    const navigate = useNavigate();
    const [nama, setNama] = useState('');
    const [sandi, setSandi] = useState('');

    const login = () => {
        if (nama === registrasiData.nama && sandi === registrasiData.sandi) {
            alert('Login Berhasil');
            handleLogin(nama);
            navigate('/');
        } else {
            alert('Username atau password yang anda berikan salah');
        }
    };



    useEffect(() => {
        const matapsw = document.querySelector('.matapsw');
        const psw = document.querySelector('.psw');

        const lihatpsw = () => {
            psw.type = psw.type === "password" ? "text" : "password";
            if (psw.type === "password") {
                matapsw.classList.remove('fa-eye-slash');
                matapsw.classList.add('fa-eye');
            } else {
                matapsw.classList.remove('fa-eye');
                matapsw.classList.add('fa-eye-slash');
            }
        };


        matapsw.addEventListener('click', lihatpsw);

        return () => {
            matapsw.removeEventListener('click', lihatpsw);
        }
    }, []);
    return (
        <div className="pertama">
            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form id="login-form" action="#">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                required
                                className="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="psw"
                                value={sandi}
                                onChange={(e) => setSandi(e.target.value)}
                            />
                            <i className='fas fa-eye matapsw'></i>
                        </div>
                        <div className="pass"><span>Forgot password?</span></div>
                        <div className="row button">
                            <input type="button" value="Login" onClick={login} />
                        </div>
                        <div className="signup-link">
                            Not a member? <span onClick={() => navigate('/register')}>Signup now</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
