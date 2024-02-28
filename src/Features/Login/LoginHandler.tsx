
import React, { useContext } from 'react'
import {Auth} from '../../Components/AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'
import { userDetailsType } from './types'
import { AxiosError } from 'axios'
import Login from './Login'


const LoginHandler = () => {
    
    const navigate=useNavigate();

    const {mail,login}= useContext(Auth)

    
    const  submit =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        let userDetails:userDetailsType={email:"",password:""}
        for(let[key,value] of formData){
            userDetails[key as keyof userDetailsType]  = value as string;
        }

       let res = await login(userDetails as userDetailsType);
       console.log(mail)
       if(res instanceof AxiosError){
        console.log(res);
       }
       else{
        console.log(res);
        navigate("/todo");

       }
    }
  return (
    <>
    <Login
        submit={submit}
    />
        
  
    </>
    
  )
}


export default LoginHandler
