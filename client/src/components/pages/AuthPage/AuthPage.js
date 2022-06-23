import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useHttp } from "../../../hooks/http.hook";
// import { Loader } from "../../Loader/Loader";

export const AuthPage = () => { 
    const auth = useContext(AuthContext)
    const { loading, error, request, clearError } = useHttp()
    const [message, setMessage] = useState("")
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    useEffect(() => { 
        console.log("Error", error)
        setMessage(error)
        // clearError()
    }, [error])


    useEffect(() => { 
        setTimeout(clearMessage, 3000)
    }, [message])

    const clearMessage = () => { 
        if (message) { 
            setMessage("")
            clearError()
        }
        return
    }    

    const changeHandler = (event) => { 
        setForm({ ...form, [event.target.name] : event.target.value })
    }    

    const registerHandler = async () => { 
        try {
            const data = await request("/api/auth/registration", "POST", { ...form })
            setMessage(data.message)
        } catch (error) { }
    }

    const loginHandler = async () => { 
        try {
            const data = await request("/api/auth/login", "POST", { ...form })
            auth.login(data.token, data.userId, data.userEmail)
            setMessage(data.message)
        } catch (error) { }
    }

    return (
        <div className="auth">
            <div className="auth__card">
                <span className="auth__title">Авторизация</span>
                <span className="auth__message">{message}</span>
                <div className="auth__email">
                    <input
                        className="auth__email-input"
                        placeholder="Введите email"
                        id="email"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="auth__password">
                    <input
                        className="auth__password-input"   
                        placeholder="Введите пароль"
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="password">Пароль</label>
                </div>   
                
                <div className="auth__action">
                <button
                    className="auth__enter"
                    style={{marginRight: 10}}
                    disabled={loading}
                    onClick={loginHandler}
                >
                Войти
                </button>
                <button
                    className="auth__reg"
                    onClick={registerHandler}
                    disabled={loading}
                >
                Регистрация
                </button>
            </div>            
            </div>
        </div>
    )
}