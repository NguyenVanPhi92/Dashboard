// *********************
// Role of the component: User table component that displays the user table with the user name, email address, role, last login date, and actions
// Name of the component: UserTable.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <UserTable />
// Input parameters: no input parameters
// Output: UserTable component that displays the user table with the user name, email address, role, last login date, and actions
// *********************

import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { HiOutlinePencil } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi'
import { HiOutlineEye } from 'react-icons/hi'
import { userAdminItems } from '../utils/data'

const UserTable = () => {
    return (
        <table className='w-full mt-6 text-left whitespace-nowrap max-lg:block max-lg:overflow-x-scroll'>
            <colgroup>
                <col className='w-full sm:w-4/12' />
                <col className='lg:w-4/12' />
                <col className='lg:w-2/12' />
                <col className='lg:w-1/12' />
                <col className='lg:w-1/12' />
            </colgroup>
            <thead className='text-sm leading-6 border-b border-white/10 dark:text-whiteSecondary text-blackPrimary'>
                <tr>
                    <th scope='col' className='py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8'>
                        User
                    </th>
                    <th scope='col' className='table-cell py-2 pl-0 pr-8 font-semibold'>
                        Email address
                    </th>
                    <th scope='col' className='table-cell py-2 pl-0 pr-8 font-semibold'>
                        Role
                    </th>
                    <th scope='col' className='table-cell py-2 pl-0 pr-8 font-semibold lg:pr-20'>
                        Date
                    </th>
                    <th
                        scope='col'
                        className='table-cell py-2 pl-0 pr-4 font-semibold text-right sm:pr-6 lg:pr-8'
                    >
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className='divide-y divide-white/5'>
                {userAdminItems.map((item) => (
                    <tr key={nanoid()}>
                        <td className='py-4 pl-4 pr-8 sm:pl-6 lg:pl-8'>
                            <div className='flex items-center gap-x-4'>
                                <img
                                    src={item.user.imageUrl}
                                    alt=''
                                    className='w-8 h-8 bg-gray-800 rounded-full'
                                />
                                <div className='text-sm font-medium leading-6 truncate dark:text-whiteSecondary text-blackPrimary'>
                                    {item.user.name}
                                </div>
                            </div>
                        </td>
                        <td className='table-cell py-4 pl-0 pr-4 pr-8'>
                            <div className='flex gap-x-3'>
                                <div className='py-1 text-sm leading-6 dark:text-whiteSecondary text-blackPrimary'>
                                    {item.email}
                                </div>
                            </div>
                        </td>
                        <td className='py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20'>
                            <div className='flex items-center justify-start gap-x-2'>
                                <div className='block font-medium dark:text-whiteSecondary text-blackPrimary'>
                                    {item.role}
                                </div>
                            </div>
                        </td>
                        <td className='table-cell py-4 pl-0 pr-8 text-sm leading-6 dark:text-whiteSecondary text-blackPrimary lg:pr-20'>
                            {item.lastLogin}
                        </td>
                        <td className='table-cell py-4 pl-0 pr-4 pr-6 text-sm leading-6 text-right dark:text-whiteSecondary text-blackPrimary lg:pr-8'>
                            <div className='flex justify-end gap-x-1'>
                                <Link
                                    to='/users/1'
                                    className='flex items-center justify-center block w-8 h-8 border border-gray-600 cursor-pointer dark:bg-blackPrimary dark:text-whiteSecondary text-blackPrimary dark:hover:border-gray-500 hover:border-gray-400'
                                >
                                    <HiOutlinePencil className='text-lg' />
                                </Link>
                                <Link
                                    to='/users/1'
                                    className='flex items-center justify-center block w-8 h-8 border border-gray-600 cursor-pointer dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary dark:hover:border-gray-500 hover:border-gray-400'
                                >
                                    <HiOutlineEye className='text-lg' />
                                </Link>
                                <Link
                                    to='#'
                                    className='flex items-center justify-center block w-8 h-8 border border-gray-600 cursor-pointer dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary dark:hover:border-gray-500 hover:border-gray-400'
                                >
                                    <HiOutlineTrash className='text-lg' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default UserTable
