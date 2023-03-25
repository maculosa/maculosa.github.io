import React from 'react';
import classnames from 'classnames';
import NoxItem from '../components/NoxItem';

export default (props) => {
    const { className } = props;

    const navData = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'Facebook', url: 'https://www.facebook.com' },
        { name: 'Twitter', url: 'https://www.twitter.com' },
        { name: 'Instagram', url: 'https://www.instagram.com' },
        { name: 'Youtube', url: 'https://www.youtube.com' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com' },
        { name: 'Github', url: 'https://www.github.com' },
        { name: 'Gitee', url: 'https://www.gitee.com' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
        { name: 'Stack Exchange', url: 'https://www.stackexchange.com' },
        { name: 'Medium', url: 'https://medium.com' },
        { name: 'Dev.to', url: 'https://dev.to' },
        { name: 'Baidu', url: 'https://www.baidu.com' },
        { name: 'Bing', url: 'https://www.bing.com' },
        { name: '清华镜像源', url: 'https://mirrors.tuna.tsinghua.edu.cn' },
        { name: 'Rust语言圣经', url: 'https://course.rs/about-book.html' },
        { name: 'Slidev', url: 'https://sli.dev/' }
    ]

    return (
        <div className={classnames([className, 'flex', 'justify-start', 'flex-wrap', 'p-4', 'gap-3'])}>
            {
                navData.map(nox => {
                    return (
                        <NoxItem {...nox} />
                    )
                })
            }
        </div>
    )
}
