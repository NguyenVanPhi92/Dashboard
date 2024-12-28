// Developer: Nguyen Van Phi
// Version: 1.0

import { FaReact } from 'react-icons/fa6'
import { HiOutlineBell, HiOutlineMenu, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { toggleDarkMode } from '../features/darkMode/darkModeSlice'
import { setSidebar } from '../features/dashboard/dashboardSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import SearchInput from './SearchInput'

const Header = () => {
    const dispatch = useAppDispatch()
    const { darkMode } = useAppSelector((state) => state.darkMode)

    return (
        <header className='relative dark:bg-blackPrimary bg-whiteSecondary'>
            <div className='flex justify-between items-center px-9 py-5 max-xl:flex-col max-xl:gap-y-7 max-[400px]:px-4'>
                <HiOutlineMenu
                    className='absolute text-2xl cursor-pointer dark:text-whiteSecondary text-blackPrimary bottom-7 left-5 xl:hidden max-sm:static max-sm:order-1'
                    onClick={() => dispatch(setSidebar())}
                />
                <Link to='/'>
                    <FaReact className='text-4xl cursor-pointer dark:text-whiteSecondary text-blackPrimary hover:rotate-180 hover:duration-1000 hover:ease-in-out' />
                </Link>
                <SearchInput />
                <div className='flex items-center gap-4 max-xl:justify-center'>
                    <span className='dark:text-whiteSecondary text-blackPrimary'>EN</span>
                    {darkMode ? (
                        <HiOutlineSun
                            onClick={() => dispatch(toggleDarkMode())}
                            className='text-xl cursor-pointer dark:text-whiteSecondary text-blackPrimary'
                        />
                    ) : (
                        <HiOutlineMoon
                            onClick={() => dispatch(toggleDarkMode())}
                            className='text-xl cursor-pointer dark:text-whiteSecondary text-blackPrimary'
                        />
                    )}
                    <Link to='/notifications'>
                        <HiOutlineBell className='text-xl dark:text-whiteSecondary text-blackPrimary' />
                    </Link>
                    <Link to='/profile'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/src/assets/profile.jpg'
                                alt='profile'
                                className='w-10 h-10 rounded-full'
                            />
                            <div className='flex flex-col'>
                                <p className='text-base dark:text-whiteSecondary text-blackPrimary max-xl:text-sm'>
                                    Phi Nguyen
                                </p>
                                <p className='text-sm dark:text-whiteSecondary text-blackPrimary max-xl:text-xs'>
                                    Web Developer
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header
