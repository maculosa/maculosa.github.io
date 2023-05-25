import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import Tippy from '@tippyjs/react'
import "tippy.js/dist/tippy.css"

export interface NoxNavItemProps {
    name: string
    url: string
    icon?: string
    description?: string
}

export default ({
    name, url, icon, description
}: NoxNavItemProps) => {

    function checkImgExists(imgUrl: string) {
        return new Promise(function(resolve, reject) {
            const ImgObj = new Image();
            ImgObj.src = imgUrl;
            ImgObj.onload = function (res) {
                resolve(res)
            }
            ImgObj.onerror = function (err) {
                reject(err)
            }
        })
    }

    const [imgUrl, setImgUrl] = useState(url + '/favicon.ico')

    // checkImgExists(url+ '/favicon.ico').then(() => {
    //     setImgUrl(url + '/favicon.ico')
    // }).catch(() => {
    //     setImgUrl('')
    //     // checkImgExists(url + '/favicon.svg').then(() => {
    //     //     setImgUrl(url + '/favicon.svg')
    //     // }).catch(() => {
    //     //     checkImgExists(url + '/favicon.png').then(() => {
    //     //         setImgUrl(url + '/favicon.png')
    //     //     }).catch(() => {
    //     //         setImgUrl(url + '/logo.svg')
    //     //     })
    //     // })
    // })

    return (
            <Link className="transition-all duration-500 ease-in-out m-2 py-2 hover:no-underline rounded text-teal-600 hover:text-dark-400 hover:bg-[orange] "
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
