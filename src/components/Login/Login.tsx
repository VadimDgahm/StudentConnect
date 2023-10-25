import React, {FC, useState} from 'react';
import {useFormik} from 'formik';
import {loginTC} from '../../redux/reducers/authReducer';
import {useApp, useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {selectors} from '../../utils/Selectors';
import {Redirect} from 'react-router-dom';
type LoginPropsType = {

}

type FormikErrorType = {
    email?: string,
    password?: string,
    rememberMe?: boolean
}
const LoginForm = () => {
    const dispatch = useAppDispatch()
    const captcha = useAppSelector(selectors.captcha)
    const [formError, setFormError] = useState<string | null>(null);

    const isAuth = useAppSelector(selectors.isAuth)
    let formik = useFormik({
        initialValues:{
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit(value){
            let res = dispatch(loginTC(value))
            res.then(result => {
               if(result?.data.resultCode === 1 ){
                   setFormError(result.data.messages[0])
               }
            })

        },
        validate(values){
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            }else if( values.password.length <= 5){
                errors.password = 'Password can has more 5 symbols'
            }
            return errors

        }
    })
    if(isAuth) return <Redirect to={'profile'}/>

    return (<form onSubmit={formik.handleSubmit}>
        <div>
        <input placeholder={'Email'} {...formik.getFieldProps("email")}/>
            <div>{ formik.touched.email && formik.errors.email && <span style={{color: 'red'}}>{formik.errors.email}</span>}</div>
        </div>
        <div>
        <input type="password" placeholder={'Password'} {...formik.getFieldProps("password")} />
        </div>
        <div>{ formik.touched.password && formik.errors.password && <span style={{color: 'red'}}>{formik.errors.password}</span>}</div>
        <input  type="checkbox" {...formik.getFieldProps("rememberMe")}/> Remember me
        {captcha && <div><img src={captcha}/>
            <input type="captcha" placeholder={'Введите то что на картинке'} {...formik.getFieldProps("captcha")} /></div>}
        <button disabled={!!Object.keys(formik.errors).length} type={'submit'} >Login</button>
        {formError && <div>{formError}</div>}


    </form>)
}
const Login:FC<LoginPropsType> = () => {
    return (
        <div >
            <LoginForm />
        </div>
    );
}

export default Login;
