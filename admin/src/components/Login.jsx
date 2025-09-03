import React, { useEffect } from 'react'
import axios from 'axios';
import { backend_url } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post(`${backend_url}/api/v1/users/admin`, { email, password });
            if (res.data.success) {
                setToken(res.data.token);
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center bg-gray-100 justify-center w-full'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler} className='flex flex-col'>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type='email' placeholder='Enter Email Address' required />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type='password' placeholder='Enter Password' required />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login