import React from 'react'
import Link from '@docusaurus/Link'

interface NoxItem {
    name: string
    url: string
    description?: string
}

export default ({
    name, url, description
}: NoxItem) => {

    return (
            <Link className="transition-all duration-500 ease-in-out w-[160px] p-3 bg-white shadow-md hover:shadow-teal-500 rounded"
                to={url}
            >
                <div className="text-indigo-800 font-bold no-underline">{ name }</div>
                <div className="text-white text-shadow no-underline">{description}</div>
            </Link>
    )
}
