import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold '>Log In with</h1>
            <div className=" space-y-3 my-3 ">
                <button className='btn btn-outline btn-secondary w-full p-4'><FaGoogle/> Log In With Google</button>
                <button className='btn btn-outline btn-primary w-full p-4'><FaGithub />Log In With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;