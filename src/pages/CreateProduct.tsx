import { ImageUpload, InputWithLabel, Sidebar } from '../components'
import { HiOutlineSave } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AiOutlineSave } from 'react-icons/ai'
import SimpleInput from '../components/SimpleInput'
import TextAreaInput from '../components/TextAreaInput'
import SelectInput from '../components/SelectInput'
import { selectList, stockStatusList } from '../utils/data'

const CreateProduct = () => {
    return (
        <div className='flex h-auto border-t border-blackSecondary border-1 dark:bg-blackPrimary bg-whiteSecondary'>
            <Sidebar />
            <div className='w-full hover:bg-blackPrimary bg-whiteSecondary '>
                <div className='py-10 dark:bg-blackPrimary bg-whiteSecondary'>
                    <div className='flex items-center justify-between px-4 pb-8 border-b border-gray-800 sm:px-6 lg:px-8 max-sm:flex-col max-sm:gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Add new product
                            </h2>
                        </div>
                        <div className='flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center'>
                            <button className='flex items-center justify-center w-48 py-2 text-lg duration-200 border border-gray-600 dark:bg-blackPrimary bg-whiteSecondary dark:hover:border-gray-500 hover:border-gray-400 gap-x-2'>
                                <AiOutlineSave className='text-xl dark:text-whiteSecondary text-blackPrimary' />
                                <span className='font-medium dark:text-whiteSecondary text-blackPrimary'>
                                    Save draft
                                </span>
                            </button>
                            <Link
                                to='/products/add-product'
                                className='flex items-center justify-center w-48 py-2 text-lg duration-200 dark:bg-whiteSecondary bg-blackPrimary dark:hover:bg-white hover:bg-black gap-x-2'
                            >
                                <HiOutlineSave className='text-xl dark:text-blackPrimary text-whiteSecondary' />
                                <span className='font-semibold dark:text-blackPrimary text-whiteSecondary'>
                                    Publish product
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Add Product section here  */}
                    <div className='grid grid-cols-2 px-4 pt-8 pb-8 sm:px-6 lg:px-8 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10'>
                        {/* left div */}
                        <div>
                            <h3 className='text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Basic information
                            </h3>

                            <div className='flex flex-col gap-5 mt-4'>
                                <InputWithLabel label='Title'>
                                    <SimpleInput type='text' placeholder='Enter a product title...' />
                                </InputWithLabel>

                                <InputWithLabel label='Description'>
                                    <TextAreaInput placeholder='Enter a product description...' rows={4} cols={50} />
                                </InputWithLabel>

                                <InputWithLabel label='Category'>
                                    <SelectInput selectList={selectList} />
                                </InputWithLabel>
                            </div>

                            <h3 className='mt-16 text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Pricing & Inventory
                            </h3>

                            <div className='flex flex-col gap-5 mt-4'>
                                <div className='grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5'>
                                    <InputWithLabel label='Base pricing'>
                                        <SimpleInput type='number' placeholder='Enter a product base pricing...' />
                                    </InputWithLabel>

                                    <InputWithLabel label='Price with dicount'>
                                        <SimpleInput type='number' placeholder='Enter a price with discount...' />
                                    </InputWithLabel>
                                </div>

                                <div className='grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5'>
                                    <InputWithLabel label='Stock'>
                                        <SimpleInput type='number' placeholder='Enter a product stock...' />
                                    </InputWithLabel>

                                    <InputWithLabel label='SKU'>
                                        <SimpleInput type='text' placeholder='Enter a product SKU...' />
                                    </InputWithLabel>
                                </div>
                                <InputWithLabel label='Stock status'>
                                    <SelectInput selectList={stockStatusList} />
                                </InputWithLabel>
                            </div>

                            <h3 className='mt-16 text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Delivery
                            </h3>

                            <div className='flex flex-col gap-5 mt-4'>
                                <div className='grid grid-cols-2 gap-x-5 gap-y-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5'>
                                    <InputWithLabel label='Weight (kg)'>
                                        <SimpleInput type='number' placeholder='Enter a product weight...' />
                                    </InputWithLabel>
                                    <InputWithLabel label='Length (cm)'>
                                        <SimpleInput type='number' placeholder='Enter a product length...' />
                                    </InputWithLabel>
                                    <InputWithLabel label='Width (cm)'>
                                        <SimpleInput type='number' placeholder='Enter a product width...' />
                                    </InputWithLabel>
                                    <InputWithLabel label='Height (cm)'>
                                        <SimpleInput type='number' placeholder='Enter a product height...' />
                                    </InputWithLabel>
                                </div>
                            </div>
                            <div>
                                <h3 className='mt-16 text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                    SEO
                                </h3>

                                <div className='flex flex-col gap-5 mt-4'>
                                    <InputWithLabel label='Meta title'>
                                        <SimpleInput type='text' placeholder='Enter a meta title...' />
                                    </InputWithLabel>

                                    <InputWithLabel label='Meta description'>
                                        <TextAreaInput placeholder='Enter a meta description...' rows={4} cols={50} />
                                    </InputWithLabel>
                                </div>
                            </div>
                        </div>

                        {/* right div */}
                        <div>
                            <h3 className='text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Product images
                            </h3>

                            <ImageUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateProduct
