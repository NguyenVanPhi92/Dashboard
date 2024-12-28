import { AiOutlineSave } from 'react-icons/ai'
import { HiOutlineSave } from 'react-icons/hi'
import { InputWithLabel, Sidebar, SimpleInput, TextAreaInput, WhiteButton } from '../components'

const CreateOrder = () => {
    return (
        <div className='flex h-auto border-t border-blackSecondary border-1 dark:bg-blackPrimary bg-whiteSecondary'>
            <Sidebar />
            <div className='w-full dark:bg-blackPrimary bg-whiteSecondary '>
                <div className='py-10 dark:bg-blackPrimary bg-whiteSecondary'>
                    <div className='flex items-center justify-between px-4 pb-8 border-b border-gray-800 sm:px-6 lg:px-8 max-sm:flex-col max-sm:gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Add new order
                            </h2>
                        </div>
                        <div className='flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center'>
                            <button className='flex items-center justify-center w-48 py-2 text-lg duration-200 border border-gray-600 dark:bg-blackPrimary bg-whiteSecondary dark:hover:border-gray-500 hover:border-gray-400 gap-x-2'>
                                <AiOutlineSave className='text-xl dark:text-whiteSecondary text-blackPrimary' />
                                <span className='font-medium dark:text-whiteSecondary text-blackPrimary'>
                                    Save draft
                                </span>
                            </button>
                            <WhiteButton
                                link='/orders/add-order'
                                textSize='lg'
                                width='48'
                                py='2'
                                text='Publish order'
                            >
                                <HiOutlineSave className='text-xl dark:text-blackPrimary text-whiteSecondary' />
                            </WhiteButton>
                        </div>
                    </div>

                    {/* Add Product section here  */}
                    <div className='grid grid-cols-2 px-4 pt-8 pb-8 sm:px-6 lg:px-8 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10'>
                        {/* left div */}
                        <div>
                            <h3 className='text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Order information
                            </h3>

                            <div className='flex flex-col gap-5 mt-4'>
                                <InputWithLabel label='Customer name'>
                                    <SimpleInput
                                        type='text'
                                        placeholder='Enter a customer name...'
                                    />
                                </InputWithLabel>

                                <InputWithLabel label='Customer lastname'>
                                    <SimpleInput
                                        type='text'
                                        placeholder='Enter a customer lastname...'
                                    />
                                </InputWithLabel>

                                <InputWithLabel label='Company name (optional)'>
                                    <SimpleInput
                                        type='text'
                                        placeholder='Enter a company name...'
                                    />
                                </InputWithLabel>

                                <InputWithLabel label='Country'>
                                    <SimpleInput type='text' placeholder='Enter a country...' />
                                </InputWithLabel>

                                <InputWithLabel label='Street and house number'>
                                    <SimpleInput
                                        type='text'
                                        placeholder='Enter a street and house number...'
                                    />
                                </InputWithLabel>

                                <InputWithLabel label='City'>
                                    <SimpleInput type='text' placeholder='Enter a city...' />
                                </InputWithLabel>

                                <InputWithLabel label='Zip code'>
                                    <SimpleInput type='text' placeholder='Enter a zip code...' />
                                </InputWithLabel>

                                <InputWithLabel label='Phone number'>
                                    <SimpleInput
                                        type='text'
                                        placeholder='Enter a phone number...'
                                    />
                                </InputWithLabel>

                                <InputWithLabel label='Email address'>
                                    <SimpleInput
                                        type='text'
                                        placeholder='Enter a email address...'
                                    />
                                </InputWithLabel>

                                <InputWithLabel label='Order notice'>
                                    <TextAreaInput placeholder='Enter a order notice...' />
                                </InputWithLabel>
                            </div>
                        </div>

                        {/* right div */}
                        <div>
                            <h3 className='text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Products in order
                            </h3>

                            <div>
                                <div className='flex flex-col gap-5 mt-4'>
                                    <InputWithLabel label='Search products'>
                                        <SimpleInput type='text' placeholder='Search products...' />
                                    </InputWithLabel>
                                    <InputWithLabel label='Quantity'>
                                        <SimpleInput
                                            type='number'
                                            placeholder='Enter a quantity...'
                                        />
                                    </InputWithLabel>
                                    <WhiteButton
                                        link='/orders/add-order'
                                        textSize='lg'
                                        width='full'
                                        py='2'
                                        text='Add product'
                                    />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <h3 className='text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                    Total
                                </h3>
                                <div className='flex flex-col gap-5 mt-4'>
                                    <div className='flex items-center justify-between'>
                                        <span className='dark:text-whiteSecondary text-blackPrimary'>
                                            Total products
                                        </span>
                                        <span className='dark:text-whiteSecondary text-blackPrimary'>
                                            0
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='dark:text-whiteSecondary text-blackPrimary'>
                                            Total price
                                        </span>
                                        <span className='dark:text-whiteSecondary text-blackPrimary'>
                                            0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateOrder
