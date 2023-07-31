import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ setRegistrasiData }) => {
    const navigate = useNavigate();
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [sandi, setSandi] = useState('');
    const [konfirmasiSandi, setKonfirmasiSandi] = useState('');

    const register = () => {
        // Compare entered username and password during registration
        if (sandi === konfirmasiSandi) {
            setRegistrasiData({ nama, sandi });

            alert('Berhasil');
            navigate('/login');
        } else {
            alert('Gagal bro');
        }
    };

    useEffect(() => {
        const matapsw = document.querySelector('.matapsw');
        const matacpsw = document.querySelector('.matacpsw');
        const psw = document.querySelector('.psw');
        const confirmasi = document.querySelector('.confirpsw');

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

        const lihatcpsw = () => {
            confirmasi.type = confirmasi.type === "password" ? "text" : "password";
            if (confirmasi.type === "password") {
                matacpsw.classList.remove('fa-eye-slash');
                matacpsw.classList.add('fa-eye');
            } else {
                matacpsw.classList.remove('fa-eye');
                matacpsw.classList.add('fa-eye-slash');
            }
        };


        matapsw.addEventListener('click', lihatpsw);
        matacpsw.addEventListener('click', lihatcpsw);

        return () => {
            matapsw.removeEventListener('click', lihatpsw);
            matacpsw.removeEventListener('click', lihatcpsw);
        }
    }, []);




    return (
        <div className="pertama">
            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form id="register-form" action="#">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={sandi}
                                onChange={(e) => setSandi(e.target.value)}
                                className='psw' />
                            <i className='fas fa-eye matapsw'></i>
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                value={konfirmasiSandi}
                                onChange={(e) => setKonfirmasiSandi(e.target.value)}
                                className='confirpsw' />
                            <i className='fas fa-eye matacpsw'></i>
                        </div>
                        <div className="row button">
                            <input type="button" value="Register" onClick={register} />
                        </div>
                        <div className="signup-link">
                            Already a member? <span onClick={() => navigate('/login')}>Login now</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
