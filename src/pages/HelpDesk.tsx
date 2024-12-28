import { HiOutlineInformationCircle } from 'react-icons/hi'
import { FAQSection, SearchInput, Sidebar } from '../components'
import { faqs } from '../utils/data'

const HelpDesk = () => {
    return (
        <div className='flex h-auto border-t border-blackSecondary border-1 dark:bg-blackPrimary bg-whiteSecondary'>
            <Sidebar />
            <div className='w-full dark:bg-blackPrimary bg-whiteSecondary'>
                <div className='py-10 dark:bg-blackPrimary bg-whiteSecondary'>
                    <div className='flex items-center justify-between px-4 pb-8 border-b border-gray-800 sm:px-6 lg:px-8 max-sm:flex-col max-sm:gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary'>
                                Help Desk
                            </h2>
                        </div>
                        <button className='flex items-center justify-center w-48 py-2 text-lg duration-200 border border-gray-600 dark:bg-blackPrimary bg-whiteSecondary dark:hover:border-gray-500 hover:border-gray-400 gap-x-2'>
                            <HiOutlineInformationCircle className='text-xl dark:text-whiteSecondary text-blackPrimary' />
                            <span className='font-medium dark:text-whiteSecondary text-blackPrimary'>
                                Get Help
                            </span>
                        </button>
                    </div>
                    {/* Search Input for questions */}
                    <div className='px-4 pt-8 pb-8 sm:px-6 lg:px-8'>
                        <SearchInput />
                        <p className='mt-4 dark:text-whiteSecondary text-blackPrimary'>
                            Welcome to the Help Desk. How can we assist you today?
                        </p>
                    </div>
                    {/* FAQ Section */}
                    <FAQSection faqs={faqs} />
                </div>
            </div>
        </div>
    )
}
export default HelpDesk
