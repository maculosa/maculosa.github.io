import React from 'react'
import Link from '@docusaurus/Link'

export interface NoxNavItemProps {
    name: string
    url: string
    description?: string
}

export default ({
    name, url, description
}: NoxNavItemProps) => {

    return (
            <Link className="transition-all duration-500 ease-in-out m-2 rounded"
                to={url}
            >
                <div className="text-indigo-800 hover:text-teal-500 font-bold no-underline overflow-hidden overflow-ellipsis whitespace-nowrap">{ name }</div>
                {
                    description && <div className="text-white text-shadow no-underline">{description}</div>
                }
            </Link>
    )
}
