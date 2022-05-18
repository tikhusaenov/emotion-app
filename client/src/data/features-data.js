import React from 'react'

import { BsFillShieldLockFill } from 'react-icons/bs'
import { IoIosOptions } from 'react-icons/io'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { BiDollar, BiSupport } from 'react-icons/bi'
import { GrHostMaintenance } from 'react-icons/gr'

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />

export const featuresData = [
    {
        name: 'Best API',
        description: 'We offer the best API to detect your emotions',
        icon: iconStyle(AiOutlineCloudUpload),
        imgClass: 'one',
    },
    {
        name: 'Ease of Use',
        description: 'Our service is easy to use for all people',
        icon: iconStyle(IoIosOptions),
        imgClass: 'two',
    },
    {
        name: 'Maintenance',
        description: 'Every day we try to improve our project',
        icon: iconStyle(GrHostMaintenance),
        imgClass: 'three',
    },
]
