// *********************
// Role of the component: ProductTable component that displays the products in a table
// Name of the component: ProductTable.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductTable />
// Input parameters: no input parameters
// Output: ProductTable component that displays the products in a table
// *********************

import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { HiOutlinePencil } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi'
import { HiOutlineEye } from 'react-icons/hi'
import { productAdminItems } from '../utils/data'

const inStockClass: string = 'text-green-400 bg-green-400/10 flex-none rounded-full p-1'
const outOfStockClass: string = 'text-rose-400 bg-rose-400/10 flex-none rounded-full p-1'

const ProductTable = () => {
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
                        Product
                    </th>
                    <th scope='col' className='table-cell py-2 pl-0 pr-8 font-semibold'>
                        SKU
                    </th>
                    <th scope='col' className='table-cell py-2 pl-0 pr-8 font-semibold'>
                        Status
                    </th>
                    <th scope='col' className='table-cell py-2 pl-0 pr-8 font-semibold lg:pr-20'>
                        Price
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
                {productAdminItems.map((item) => (
                    <tr key={nanoid()}>
                        <td className='py-4 pl-4 pr-8 sm:pl-6 lg:pl-8'>
                            <div className='flex items-center gap-x-4'>
                                <img
                                    src={item.product.imageUrl}
                                    alt=''
                                    className='w-8 h-8 bg-gray-800 rounded-full'
                                />
                                <div className='text-sm font-medium leading-6 truncate dark:text-whiteSecondary text-blackPrimary'>
                                    {item.product.name}
                                </div>
                            </div>
                        </td>
                        <td className='table-cell py-4 pl-0 pr-4 pr-8'>
                            <div className='flex gap-x-3'>
                                <div className='font-mono text-sm leading-6 dark:text-whiteSecondary text-blackPrimary'>
                                    {item.sku}
                                </div>
                            </div>
                        </td>
                        <td className='py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20'>
                            <div className='flex items-center justify-start gap-x-2'>
                                <div
                                    className={
                                        item.status === 'In stock' ? inStockClass : outOfStockClass
                                    }
                                >
                                    <div className='h-1.5 w-1.5 rounded-full bg-current' />
                                </div>
                                <div className='block dark:text-whiteSecondary text-blackPrimary'>
                                    {item.status}
                                </div>
                            </div>
                        </td>
                        <td className='table-cell py-4 pl-0 pr-8 text-sm font-medium leading-6 dark:text-rose-200 text-rose-600 lg:pr-20'>
                            {item.price}
                        </td>
                        <td className='table-cell py-4 pl-0 pr-4 pr-6 text-sm leading-6 text-right dark:text-whiteSecondary text-blackPrimary lg:pr-8'>
                            <div className='flex justify-end gap-x-1'>
                                <Link
                                    to='/products/1'
                                    className='flex items-center justify-center block w-8 h-8 border border-gray-600 cursor-pointer dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary hover:border-gray-400'
                                >
                                    <HiOutlinePencil className='text-lg' />
                                </Link>
                                <Link
                                    to='/products/1'
                                    className='flex items-center justify-center block w-8 h-8 border border-gray-600 cursor-pointer dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary hover:border-gray-400'
                                >
                                    <HiOutlineEye className='text-lg' />
                                </Link>
                                <Link
                                    to='#'
                                    className='flex items-center justify-center block w-8 h-8 border border-gray-600 cursor-pointer dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary hover:border-gray-400'
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
export default ProductTable
