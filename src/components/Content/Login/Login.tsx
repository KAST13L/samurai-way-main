import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} type="text" placeholder={'login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} type="password" placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox" />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

