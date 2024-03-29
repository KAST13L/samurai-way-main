import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCaptchaTC, loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootType} from "../../redux/redux-store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
type FormOwnType = {
    captcha: string | null
}
const LoginForm: React.FC<InjectedFormProps<FormDataType, FormOwnType> & FormOwnType > = (props) => {
    return (
        <form onSubmit={props.handleSubmit} style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <div>
                Test account: <hr/>
                Email: free@samuraijs.com <hr/>
                Password: free <hr/>
            </div>
            <div>
                <Field component={'input'} name={'login'} type="text" placeholder={'login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} type="password" placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox" />Remember me
            </div>
            <div style={{color: "red"}}>
                <h3>{props.error}</h3>
            </div>
            {props.captcha && <img src={props.captcha} alt="i"/>}
            {props.captcha && <Field component={'input'} name={'captcha'} type={'text'} placeholder={'symbols'}/>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, FormOwnType>({form:'login'})(LoginForm)

export const Login = (props: MapDispatchToPropsType & MapStateToPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
            <h1>LOGIN</h1>
            <div>
                <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
            </div>
        </div>
    );
};


type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}

const mapStateToProps = (state: RootType): MapStateToPropsType => {
    return {
        isAuth: state.Auth.isAuth,
        captcha: state.Auth.captcha
    }
}

export const LoginContainer = connect(mapStateToProps, {loginTC,getCaptchaTC})(Login)

