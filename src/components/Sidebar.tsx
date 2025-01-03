// Developer: Nguyen Van Phi
// Version: 1.0

import { useState } from 'react'
import {
    HiLogin,
    HiOutlineHome,
    HiOutlineInformationCircle,
    HiOutlineStar,
    HiOutlineTag,
    HiOutlineTruck,
    HiOutlineUser,
    HiOutlineX,
    HiUserGroup
} from 'react-icons/hi'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { setSidebar } from '../features/dashboard/dashboardSlice'
import { useAppDispatch, useAppSelector } from '../hooks'

const Sidebar = () => {
    const [isLandingOpen, setIsLandingOpen] = useState(false)
    const [isAuthOpen, setIsAuthOpen] = useState(false)
    const { isSidebarOpen } = useAppSelector(state => state.dashboard)
    const dispatch = useAppDispatch()

    // Determine the sidebar class based on isSidebarOpen
    const sidebarClass: string = isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'

    const navActiveClass: string =
        'block dark:bg-whiteSecondary flex items-center self-stretch gap-4 py-4 px-6 cursor-pointer max-xl:py-3 dark:text-blackPrimary bg-white text-blackPrimary'
    const navInactiveClass: string =
        'block flex items-center self-stretch gap-4 py-4 px-6 dark:bg-blackPrimary dark:hover:bg-blackSecondary cursor-pointer max-xl:py-3 dark:text-whiteSecondary hover:bg-white text-blackPrimary bg-whiteSecondary'

    return (
        <div className='relative'>
            <div
                className={`w-72 h-[100vh] dark:bg-blackPrimary bg-whiteSecondary pt-6 xl:sticky xl:top-0 xl:z-10 max-xl:fixed max-xl:top-0 max-xl:z-10 xl:translate-x-0 ${sidebarClass}`}
            >
                <HiOutlineX
                    className='mb-2 ml-auto mr-2 text-2xl cursor-pointer dark:text-whiteSecondary text-blackPrimary xl:py-3'
                    onClick={() => dispatch(setSidebar())}
                />
                <div>
                    <div
                        onClick={() => setIsLandingOpen(() => !isLandingOpen)}
                        className='flex items-center self-stretch block gap-4 px-6 py-4 cursor-pointer dark:bg-blackPrimary dark:hover:bg-blackSecondary max-xl:py-3 dark:text-whiteSecondary hover:bg-white text-blackPrimary bg-whiteSecondary'
                    >
                        <HiOutlineHome className='text-xl' />
                        <span className='text-lg'>Landing pages</span>
                    </div>
                    {isLandingOpen && (
                        <div>
                            <NavLink
                                to='/'
                                className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                            >
                                <HiOutlineHome className='text-xl' />
                                <span className='text-lg'>Overview v1</span>
                            </NavLink>

                            <NavLink
                                to='/landing-v2'
                                className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                            >
                                <HiOutlineHome className='text-xl' />
                                <span className='text-lg'>Overview v2</span>
                            </NavLink>
                        </div>
                    )}

                    <NavLink
                        to='/products'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineDevicePhoneMobile className='text-xl' />
                        <span className='text-lg'>Products</span>
                    </NavLink>
                    <NavLink
                        to='/categories'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineTag className='text-xl' />
                        <span className='text-lg'>Categories</span>
                    </NavLink>
                    <NavLink
                        to='/orders'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineTruck className='text-xl' />
                        <span className='text-lg'>Orders</span>
                    </NavLink>
                    <NavLink
                        to='/users'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineUser className='text-xl' />
                        <span className='text-lg'>Users</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Reviews</span>
                    </NavLink>
                    {/* <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Payment</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Shipping</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Warehouse</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Inventory</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Promotions</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Product_Promotions</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Wishlist</span>
                    </NavLink>
                    <NavLink
                        to='/reviews'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineStar className='text-xl' />
                        <span className='text-lg'>Analytics</span>
                    </NavLink> */}

                    <div
                        onClick={() => setIsAuthOpen(() => !isAuthOpen)}
                        className='flex items-center self-stretch block gap-4 px-6 py-4 cursor-pointer dark:bg-blackPrimary dark:hover:bg-blackSecondary max-xl:py-3 dark:text-whiteSecondary hover:bg-white text-blackPrimary bg-whiteSecondary'
                    >
                        <HiUserGroup className='text-xl' />
                        <span className='text-lg'>Auth</span>
                    </div>
                    {isAuthOpen && (
                        <div>
                            <NavLink
                                to='/login'
                                className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                            >
                                <HiLogin className='text-xl' />
                                <span className='text-lg'>Login</span>
                            </NavLink>
                            <NavLink
                                to='/register'
                                className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                            >
                                <HiUserGroup className='text-xl' />
                                <span className='text-lg'>Register</span>
                            </NavLink>
                        </div>
                    )}
                </div>

                <div className='absolute bottom-0 w-full border-t border-1 dark:border-blackSecondary border-blackSecondary'>
                    <NavLink
                        to='/help-desk'
                        className={isActiveObj => (isActiveObj.isActive ? navActiveClass : navInactiveClass)}
                    >
                        <HiOutlineInformationCircle className='text-xl' />
                        <span className='text-lg'>Help Desk</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
