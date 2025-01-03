// *********************
// Role of the component: Register component that displays the registration form with email, password, and confirm password fields and buttons for registration with Google and GitHub
// Name of the component: RegisterComponent.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <RegisterComponent />
// Input parameters: no input parameters
// Output: RegisterComponent component that contains input fields for email, password, and confirm password, and buttons for registration with Google and GitHub
// *********************

import { FaReact } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { useState } from 'react'
import ThirdPartyAuthButton from '@/components/ThirdPartyAuthButton'
import InputWithLabel from '@/components/InputWithLabel'
import SimpleInput from '@/components/SimpleInput'
import WhiteButton from '@/components/WhiteButton'

const RegisterComponent = () => {
    const [email, setEmail] = useState('john@email.com')
    const [password, setPassword] = useState('pass1234567890')
    const [confirmPassword, setConfirmPassword] = useState('pass1234567890')

    return (
        <div className='w-[500px] h-[800px] dark:bg-gray-900 bg-white flex flex-col justify-between items-center py-10 max-sm:w-[400px] max-[420px]:w-[320px] max-sm:h-[750px]'>
            <div className='flex flex-col items-center gap-10'>
                <FaReact className='text-5xl cursor-pointer dark:text-whiteSecondary text-blackPrimary hover:rotate-180 hover:duration-1000 hover:ease-in-out max-sm:text-4xl' />
                <h2 className='text-2xl font-medium dark:text-whiteSecondary text-blackPrimary max-sm:text-xl'>
                    Register on the dashboard!
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
                            onChange={e => setEmail(e.target.value)}
                        />
                    </InputWithLabel>

                    <InputWithLabel label='Password'>
                        <SimpleInput
                            type='password'
                            placeholder='Enter a password...'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </InputWithLabel>

                    <InputWithLabel label='Confirm password'>
                        <SimpleInput
                            type='password'
                            placeholder='Confirm a password...'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </InputWithLabel>
                </div>

                <WhiteButton link='/login' textSize='lg' width='full' py='2' text='Register now'></WhiteButton>
                <p className='flex items-center gap-1 text-base text-gray-700 transition-colors cursor-pointer dark:text-gray-400 max-sm:text-sm'>
                    Have an account?{' '}
                    <Link
                        to='/login'
                        className='flex items-center gap-1 dark:text-whiteSecondary text-blackPrimary hover:text-black dark:hover:text-white max-sm:text-sm hover:underline'
                    >
                        Login <FaArrowRight className='mt-[2px]' />
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default RegisterComponent
