import logo from '../assets/images/logo.jfif'
import React, { useState } from 'react';
import { loginService, registerService } from '../services/Auth';
import swal from 'sweetalert';


const Auth = () => {
    const [typeForm, setTypeForm] = useState('login');
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        password: ''
    });
    //cada vez que use un formulario necesito el handel, es generico saber que hace
    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const saveData = (event) => {

        event.preventDefault();
        console.log(form);
        if (typeForm === 'login') {
            //si el email esta vacio o el password esta vacio muestra esto || es o
            if (form.email ==='' || form.password==='') {
                swal({
                    title: "Ops... Algo salio mal",
                    icon: "info",
                    text: "El campo Email y Password es requerido"
                })
                return;
            
            }
            loginService(form)
                .then(response => {
                    console.log(response);
                    swal({
                        title: "Login correcto",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
                    });
                })
                .catch(error => {
                    swal({
                        title: "Ops... Algo salio mal",
                        icon: "error",
                        text: "No se pudo iniciar sesión, verificar la información"
                    });

                    console.log(error);
                })
        } else {
            if (form.email ==='' || form.password==='' || form.nombre ==='') {
                swal({
                    title: "Ops... Algo te faltó",
                    icon: "info",
                    text: "los campoa Nombre, Email y Password son obligatorios"
                })
                return;
            
            }
            registerService(form)
                .then(response => {
                    console.log(response);
                    swal({
                        title: "SingUp correcto",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
                    });
                })
                .catch(error => {
                    console.log(error);
                    swal({
                        title: "Ops... Algo salio mal",
                        icon: "error",
                        text: "No se pudo registrar, verificar la información"
                    });
                })

        }


    }
    const showSignUp = () => {
        setTypeForm('signup');
    };

    const showLogin = () => {
        setTypeForm('login');
    };

    return (
        <>
            <div className='row row-cols-2 row-cols-2 text-center d-flex' >
                <div className="bg-coffe d-flex display-6 justify-content-center align-items-center vh-100 ">

                    <div className="bg-white p-3 rounded-5 text-secondary shadow" style={{ width: '25rem', height: '31rem' }}>
                        <div className='text-center fs-1 fw-bold text-coffe'>
                            <h1>{typeForm === 'login' ? 'Login' : 'Signup'}</h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img className='rounded-5' src={logo} alt="logo-img" style={{ width: '17rem', height: '20rem' }} />
                        </div>

                        <div className="m-3 ">
                            {typeForm === 'login' &&
                                <div className=" gap-1 justify-content-center mt-1 ">
                                    <h5>¿No tienes cuenta?</h5>
                                    <p className="signup" onClick={showSignUp}>Sign Up</p>
                                </div>
                            }

                            {typeForm === 'signup' &&
                                <div className=" gap-1 justify-content-center mt-1">
                                    <h5>¿Tienes cuenta?</h5>
                                    <p className="signup" onClick={showLogin}>Login</p>
                                </div>
                            }

                        </div>

                    </div>

                </div>


                <div className="bg-coffe d-flex justify-content-center align-items-center vh-100 ">
                    <form onSubmit={saveData} className="bg-white p-5 rounded-5 text-secondary shadow " style={{ width: '25rem' }}>
                        {typeForm === 'signup' &&
                            <>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" name="nombre" onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="apellido" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" name="apellido" onChange={handleInputChange} />
                                </div>
                            </>
                        }

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" onChange={handleInputChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={handleInputChange} />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-coffe text-white w-100 mt-4 fw-semibold shadow-sm'>
                            {typeForm === 'login' ? 'Login' : 'Signup'}
                        </button>
                    </form>



                </div>
            </div>
        </>
    );
}

export default Auth;