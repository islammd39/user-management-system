import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="h-[600px] justify-center items-center flex">
        <form className=' shadow-2xl py-5 px-5 rounded-xl'>
            <div className='text-center text-xl my-5 text-bold'>
            <h2 className='text-warning'>Register !!</h2>
            </div>
           <div className="form-control">
                <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control my-5">
                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            </div>
            <h5 className='mt-1'>Already Have an Account? <span><Link to='/' className='link text-warning'>LOGIN</Link></span></h5>
            <button className="btn btn-primary my-5 w-full">Sign up</button>
            </form>
        </div>
    );
};

export default Register;