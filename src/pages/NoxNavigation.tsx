import React from 'react';
import classnames from 'classnames';
import NoxItem from '../components/NoxItem';

export default (props) => {
    const { className } = props;

    const navData = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'YouTube', url: 'https://www.youtube.com' },
        { name: 'Facebook', url: 'https://www.facebook.com' },
        { name: 'Twitter', url: 'https://www.twitter.com' },
        { name: 'Instagram', url: 'https://www.instagram.com' },
        { name: 'Youtube', url: 'https://www.youtube.com' },
        { name: 'Bilibili', url: 'https://www.bilibili.com'},
        { name: 'LinkedIn', url: 'https://www.linkedin.com' },
        { name: 'Github', url: 'https://www.github.com' },
        { name: 'Gitee', url: 'https://www.gitee.com' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
        { name: 'Stack Exchange', url: 'https://www.stackexchange.com' },
        { name: 'Netlify', url: 'https://app.netlify.com/' },
        { name: 'Medium', url: 'https://medium.com' },
        { name: 'Dev.to', url: 'https://dev.to' },
        { name: 'Baidu', url: 'https://www.baidu.com' },
        { name: 'Bing', url: 'https://www.bing.com' },
        { name: '清华镜像源', url: 'https://mirrors.tuna.tsinghua.edu.cn' },
        { name: 'Rust语言圣经', url: 'https://course.rs/about-book.html' },
        { name: 'Rust大佬给初学者的学习建议', url: 'https://github.com/rustlang-cn/Rustt/blob/main/Articles/%5B2022-04-02%5D%20Rust%20%E5%A4%A7%E4%BD%AC%E7%BB%99%E5%88%9D%E5%AD%A6%E8%80%85%E7%9A%84%E5%AD%A6%E4%B9%A0%E5%BB%BA%E8%AE%AE.md'},
        { name: 'Slidev', url: 'https://sli.dev/' },
        { name: 'Google 翻译', url: 'https://translate.google.com/'},
        { name: 'DeepL', url: 'https://www.deepl.com/' },
        { name: 'Civitai', url: 'https://civitai.com/' },
        { name: 'QuickRef.ME', url: 'https://quickref.me/' },
        { name: 'JavaPoint', url: 'https://www.javatpoint.com/' },
        { name: 'Docusaurus', url: 'https://docusaurus.io/zh-CN/' },
        { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
        { name: '网线选购', url: 'https://zhuanlan.zhihu.com/p/346120351' },
        { name: 'REG007', url: 'https://www.reg007.com/' },
        { name: '水木社区', url: 'https://www.mysmth.net/nForum/#!mainpage' },
        { name: 'OpenSea', url: 'https://opensea.io/zh-CN' },
        { name: '开发者学习路线', url: 'https://github.com/kamranahmedse/developer-roadmap' },
        { name: 'CS自学指南', url: 'https://csdiy.wiki/' },
        { name: 'Kail Linux', url: 'https://www.kali.org/' },
        { name: 'Tauri', url: 'https://tauri.app/' },
        { name: 'Web.Dev', url: 'https://web.dev/' },
        { name: 'CodeToImg', url: 'https://codetoimg.com/' },
        { name: 'Shields', url: 'https://shields.io/' },
        { name: 'README', url: 'https://github.com/RichardLitt/standard-readme' },
        { name: '百度统计', url: 'https://tongji.baidu.com/web5/welcome/login' },
        { name: '知末', url: 'https://www.znzmo.com/' },
        { name: 'OurSketch', url: 'https://oursketch.com/resource?category=web' },
        { name: 'PngImg', url: 'https://pngimg.com/' }
        
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
