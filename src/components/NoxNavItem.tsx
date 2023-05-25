import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import Tippy from '@tippyjs/react'
import "tippy.js/dist/tippy.css"
import styles from './NoxNavItem.module.css'
import { clsx } from 'clsx'

export interface NoxNavItemProps {
    name: string
    url: string
    icon?: string
    description?: string
}

export default ({
    name, url, icon, description
}: NoxNavItemProps) => {

    return (
            <Link className={clsx(styles['nox-btn'], styles['btn-16'], 'transition-all duration-500 ease-in-out m-2 py-2 hover:no-underline rounded text-slate-900')
            }
                to={url}
            >
                <Tippy content={name} theme="translucent">
                    <div className="flex items-center justify-center text-center font-bold no-underline overflow-hidden overflow-ellipsis whitespace-nowrap">
                        <img className="h-[20px] mr-[4px]" src={icon} />
                        { name }
                    </div>
                </Tippy>
                {
                    description && <div className="text-white text-shadow no-underline">{description}</div>
                }
            </Link>
    )
}
