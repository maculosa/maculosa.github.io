import React from 'react'
import Link from '@docusaurus/Link'
import NoxNavItem, { NoxNavItemProps } from './NoxNavItem'

interface NoxNavModuleProps {
    key?: string
    type?: string
    label: string
    children: NoxNavItemProps[]
}

export default ({
    label, children
}: NoxNavModuleProps) => {

    return (
        <div className="w-[100%] bg-[#ffffffcc] p-[16px] rounded-[8px]">
            <h3 className="font-bold text-[22px] mb-[8px]">{ label }</h3>
            <div className="grid grid-cols-5 gap-[16px]">
                {
                    children.map(item => (
                        <NoxNavItem {...item} />
                    ))
                }
            </div>
        </div>
    )
}
