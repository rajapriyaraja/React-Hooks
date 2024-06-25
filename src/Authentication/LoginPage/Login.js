import React, { useState } from 'react'
import { useFormik } from 'formik';


export const Login = () => {
    const[fname,setName]=useState('')
    const [pass,setPass]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(fname)
        console.log(pass)
    }
  return (
    <>
    <div className='qwert'>
    <form  onSubmit={handleSubmit}>
    <h1>Login</h1>
        <div className='abw_tdf'>
            <label className='lab_rt'>Name/Username</label>
            <input
            type='text'
             value={fname}
             placeholder='Enter your name'
             onChange={(e)=>setName(e.target.value)}/>
    
            <label>Password</label>
            <input
            className='bw-gh'
             type='text'
             value={pass}
             placeholder='Enter your password'
             onChange={(e)=>setPass(e.target.value)}/>
            <button
            type='submit'>Login</button>
        </div>
    </form>
    </div>
    </>
  )
}