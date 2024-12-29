// *********************
// Role of the component: Login component that is displayed on the login page
// Name of the component: LoginComponent.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <LoginComponent />
// Input parameters: no input parameters
// Output: Login component that contains input fields for email and password, and buttons for login with Google and GitHub
// *********************

import { FaReact } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { InputWithLabel, SimpleInput, ThirdPartyAuthButton, WhiteButton } from '..'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { useState } from 'react'

export const LoginComponent = () => {
    const [email, setEmail] = useState('john@email.com')
    const [password, setPassword] = useState('pass1234567890')
    return (
        <div className='w-[500px] h-[750px] dark:bg-gray-900 bg-white flex flex-col justify-between items-center py-10 max-sm:w-[400px] max-[420px]:w-[320px] max-sm:h-[750px]'>
            <div className='flex flex-col items-center gap-10'>
                <FaReact className='text-5xl cursor-pointer dark:text-whiteSecondary text-blackPrimary hover:rotate-180 hover:duration-1000 hover:ease-in-out max-sm:text-4xl' />
                <h2 className='text-2xl font-medium dark:text-whiteSecondary text-blackPrimary max-sm:text-xl'>
                    Welcome to the dashboard!
                </h2>
                <div className='flex gap-5'>
                    <ThirdPartyAuthButton>
                        {' '}
                        <FaGoogle className='text-2xl max-sm:text-xl' />
                    </ThirdPartyAuthButton>
                    <ThirdPartyAuthButton>
                        <FaGithub className='text-2xl max-sm:text-xl' />
                    </ThirdPartyAuthButton>
                </div>

                <p className='text-xl text-gray-700 dark:text-gray-400 max-sm:text-base'>OR</p>

                <div className='flex flex-col w-full gap-5'>
                    <InputWithLabel label='Email'>
                        <SimpleInput
                            type='email'
                            placeholder='Enter a email...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputWithLabel>

                    <InputWithLabel label='Password'>
                        <SimpleInput
                            type='password'
                            placeholder='Enter a password...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputWithLabel>
                </div>
                <p className='text-base text-gray-700 transition-colors cursor-pointer dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600 max-sm:text-sm'>
                    Forgot password?
                </p>
                <WhiteButton
                    link='/'
                    textSize='lg'
                    width='full'
                    py='2'
                    text='Login now'
                ></WhiteButton>
                <p className='flex items-center gap-1 text-base text-gray-700 transition-colors cursor-pointer dark:text-gray-400 max-sm:text-sm'>
                    Not registered yet?{' '}
                    <Link
                        to='/register'
                        className='flex items-center gap-1 dark:text-whiteSecondary text-blackPrimary hover:text-black dark:hover:text-white max-sm:text-sm hover:underline'
                    >
                        Register <FaArrowRight className='mt-[2px]' />
                    </Link>
                </p>
            </div>
        </div>
    )
}
