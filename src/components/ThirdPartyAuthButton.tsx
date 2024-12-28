// *********************
// Role of the component: Third party authentication button component that displays the third party authentication button
// Name of the component: ThirdPartyAuthButton.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ThirdPartyAuthButton><FaGoogle className="text-2xl max-sm:text-xl" /></ThirdPartyAuthButton>
// Input parameters: no input parameters
// Output: ThirdPartyAuthButton component that displays the third party authentication button
// *********************

const ThirdPartyAuthButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className='flex items-center justify-center h-12 transition-colors bg-gray-100 dark:bg-blackPrimary hover:bg-whiteSecondary dark:hover:bg-gray-800 dark:hover:bg-gray-100 w-44 max-sm:w-32 max-sm:h-10 dark:text-whiteSecondary text-blackPrimary'>
            {children}
        </button>
    )
}
export default ThirdPartyAuthButton
