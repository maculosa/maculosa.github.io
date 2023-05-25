import React from "react";
import classnames from "classnames";
import NoxItem from "../components/NoxNavItem";
import NoxNavModule from "../components/NoxNavModule";

export default (props) => {
  const { className } = props;

  const navData = [
    {
      type: "group",
      label: "搜索引擎",
      key: "search-group",
      children: [
        { name: "Google", url: "https://www.google.com" },
        { name: "Baidu", url: "https://www.baidu.com" },
      ],
    },
    {
      type: "group",
      label: "开发",
      key: "develop-group",
      children: [
        { name: "Github", url: "https://www.github.com" },
        { name: "Gitee", url: "https://www.gitee.com" },
        { name: "Stack Overflow", url: "https://stackoverflow.com" },
        { name: "Dev.to", url: "https://dev.to" },
        { name: "Netlify", url: "https://app.netlify.com/" },
        { name: "Google 翻译", url: "https://translate.google.com/" },
        { name: "DeepL", url: "https://www.deepl.com/" },
      ],
    },
    {
      type: "group",
      label: "镜像源",
      key: "mirrors",
      children: [
        { name: "清华镜像源", url: "https://mirrors.tuna.tsinghua.edu.cn" },
      ],
    },
    {
      type: "group",
      label: "前端开发",
      key: "front-end",
      children: [],
    },
    {
      type: "group",
      label: "语言框架",
      key: "program-framework",
      children: [
        { name: "Naive UI", url: "https://naiveui.com/" },
        { name: "Element UI", url: "https://element-plus.org" },
        { name: "Ant Design", url: "https://ant.design" },
        { name: "Ant Design Vue", url: "https://antdv.com" },
        { name: "Tauri", url: "https://tauri.app/" },
        { name: "Rust语言圣经", url: "https://course.rs/about-book.html" },
        {
          name: "Rust大佬给初学者的学习建议",
          url: "https://github.com/rustlang-cn/Rustt/blob/main/Articles/%5B2022-04-02%5D%20Rust%20%E5%A4%A7%E4%BD%AC%E7%BB%99%E5%88%9D%E5%AD%A6%E8%80%85%E7%9A%84%E5%AD%A6%E4%B9%A0%E5%BB%BA%E8%AE%AE.md",
        },
      ],
    },
    {
      type: "group",
      label: "Linux",
      key: "linux",
      children: [
        { name: "Arch Linux", url: "https://archlinux.org" },
        { name: "Kail Linux", url: "https://www.kali.org/" },
      ],
    },
    {
      type: "group",
      label: "Other",
      key: "other",
      children: [
        { name: "YouTube", url: "https://www.youtube.com" },
        { name: "Facebook", url: "https://www.facebook.com" },
        { name: "Twitter", url: "https://www.twitter.com" },
        { name: "Instagram", url: "https://www.instagram.com" },
        { name: "Youtube", url: "https://www.youtube.com" },
        { name: "Bilibili", url: "https://www.bilibili.com" },
        { name: "LinkedIn", url: "https://www.linkedin.com" },
        { name: "Stack Exchange", url: "https://www.stackexchange.com" },
        { name: "Medium", url: "https://medium.com" },
        { name: "Bing", url: "https://www.bing.com" },
        { name: "Slidev", url: "https://sli.dev/" },
        { name: "Civitai", url: "https://civitai.com/" },
        { name: "QuickRef.ME", url: "https://quickref.me/" },
        { name: "JavaPoint", url: "https://www.javatpoint.com/" },
        { name: "Docusaurus", url: "https://docusaurus.io/zh-CN/" },
        { name: "TailwindCSS", url: "https://tailwindcss.com/" },
        { name: "网线选购", url: "https://zhuanlan.zhihu.com/p/346120351" },
        { name: "REG007", url: "https://www.reg007.com/" },
        { name: "水木社区", url: "https://www.mysmth.net/nForum/#!mainpage" },
        { name: "OpenSea", url: "https://opensea.io/zh-CN" },
        {
          name: "开发者学习路线",
          url: "https://github.com/kamranahmedse/developer-roadmap",
        },
        { name: "CS自学指南", url: "https://csdiy.wiki/" },
        { name: "Web.Dev", url: "https://web.dev/" },
        { name: "CodeToImg", url: "https://codetoimg.com/" },
        { name: "Shields", url: "https://shields.io/" },
        {
          name: "README",
          url: "https://github.com/RichardLitt/standard-readme",
        },
        {
          name: "百度统计",
          url: "https://tongji.baidu.com/web5/welcome/login",
        },
        { name: "知末", url: "https://www.znzmo.com/" },
        {
          name: "OurSketch",
          url: "https://oursketch.com/resource?category=web",
        },
        { name: "PngImg", url: "https://pngimg.com/" },
      ],
    },
  ];

  return (
    <div
      className={classnames([
        className,
        "flex",
        "justify-start",
        "flex-wrap",
        "p-4",
        "gap-3",
      ])}
    >
      {navData.map((nox) => {
        if (nox.type && nox.type === "group") {
          return <NoxNavModule {...nox} />;
        }
        return null;
      })}
    </div>
  );
};
