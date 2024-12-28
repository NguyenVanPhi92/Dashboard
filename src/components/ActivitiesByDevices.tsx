// *********************
// Role of the component: Component that displays single activity by devices
// Name of the component: ActivitiesByDevices.tsx
// Developer: Nguyen Van Phi
// Version: 1.0
// Component call: <Activities />
// Input parameters: No input parameters
// Output: single activities by country
// *********************

import { FaApple } from 'react-icons/fa6'
import SingleActivity from './SingleActivity'
import { FaWindows } from 'react-icons/fa6'
import { FaAndroid } from 'react-icons/fa6'
import { FaLinux } from 'react-icons/fa6'
import { FaQuestion } from 'react-icons/fa6'

const Activities = () => {
    return (
        <div className='activity-main'>
            <h4 className='text-2xl dark:text-whiteSecondary text-blackPrimary font-bold mb-7 max-[440px]:text-left'>
                Activity by devices
            </h4>
            <div className='w-full flex flex-col gap-y-4 max-[440px]:grid max-[440px]:grid-cols-2 max-[390px]:grid-cols-1'>
                <SingleActivity
                    mainTitle='Apple devices'
                    totalVisitors='5,200'
                    totalMoney='$2300,20'
                    percent='+20%'
                >
                    <FaApple className='text-3xl dark:text-blackPrimary text-whiteSecondary' />
                </SingleActivity>
                <SingleActivity
                    mainTitle='Windows devices'
                    totalVisitors='2,200'
                    totalMoney='$1100,30'
                    percent='+5%'
                >
                    <FaWindows className='text-3xl dark:text-blackPrimary text-whiteSecondary' />
                </SingleActivity>
                <SingleActivity
                    mainTitle='Android devices'
                    totalVisitors='7,200'
                    totalMoney='$7100,99'
                    percent='+105%'
                >
                    <FaAndroid className='text-3xl dark:text-blackPrimary text-whiteSecondary' />
                </SingleActivity>
                <SingleActivity
                    mainTitle='Linux devices'
                    totalVisitors='103'
                    totalMoney='$140'
                    percent='-3%'
                >
                    <FaLinux className='text-3xl dark:text-blackPrimary text-whiteSecondary' />
                </SingleActivity>
                <SingleActivity
                    mainTitle='Mac devices'
                    totalVisitors='1700'
                    totalMoney='$10500'
                    percent='+350%'
                >
                    <FaApple className='text-3xl dark:text-blackPrimary text-whiteSecondary' />
                </SingleActivity>
                <SingleActivity
                    mainTitle='Other'
                    totalVisitors='1200'
                    totalMoney='$1000'
                    percent='+22%'
                >
                    <FaQuestion className='text-3xl dark:text-blackPrimary text-whiteSecondary' />
                </SingleActivity>
            </div>
        </div>
    )
}
export default Activities
