---
title: hexo的入坑简介
date: 2016-10-27 11:47:00
tags:
- javascript
- nodejs
- hexo
- blog

photos: http://static.open-open.com/lib/uploadImg/20150620/20150620203424_361.png

---

## HEXO跳坑小技巧1.0
此博客仅记录我的无知，毫无参考价值

<!--more-->

### 前言

大概好久以前就听说了这个**hexo**这个简单快速强大的nodejs静态博客框架，但是由于本人的学习惰性以及记忆模糊等问题，直到最近才过来学习一下这个框架。同时有学习过nodejs的架构，突然就对hexo很有兴趣，所以就去简单的学习了一下这个博客框架

我的github pages: **https://senylin.github.io**

 **开发环境**
 - ubuntu15.04
 - node v5.10.1
 - npm 3.8.3
 - hexo 3.2.2

### hexo下载与配置

hexo的下载和配置网上有很多资源，我也就不写教程什么的了，不过有一点要注意，就是网上的教程有的是**2.x版本**有的是**3.x版本**，根据我遇到的坑来说，主要还是**配置文件**上的一些差异和各种**插件**的问题，3.x比之2.x多了点规范，拆了点插件，我这种菜鸟还看不出什么，我就直接从3.x版本学起。

### hexo学习资源

**[hexo官网](https://hexo.io/)**
英文比较简单，可以看一下


主要配置流程是:在系统中配置好node环境和npm，通过npm下载安装hexo，然后:

```
sudo npm install hexo -g
mkdir blog
hexo init
npm install
hexo generator
hexo server
```

以上是最简单的配置操作，通过打开 loaclhost://4000 就能看见hexo默认的主题，不过具估计一般人走不通，还是按照**下面的链接**学习为好。

**[Hexo静态博客使用指南](http://www.tuicool.com/articles/BVrmY3)**
来自segmentfault的hexo教程，比较全面的hexo教程

**[HEXO+Github,搭建属于自己的博客](http://www.jianshu.com/p/465830080ea9)**
来自简书的hexo+gihub pages教程，他的版本是3.1.1,可以主要参考他的配置文件和问题解决以及推荐的主题。

**[简明Github Pages与Hexo教程](http://www.jianshu.com/p/05289a4bc8b2)**
简书的教程2号，比较详细和复杂，不过没讲node环境，我没仔细看

**[voidKing的hexo教程](http://www.voidking.com/2015/05/30/deve-hexo-build-environment/)**
围观一下大神的hexo界面以及文章

**[yilia作者的博客备份](https://github.com/litten/BlogBackup)**
学习一波yilia主题的配置

**PS:以上是我学习hexo的主要参考;**

### 正文
**hexo操作**

以下为hexo常用6个命令,||前后两种写法都可以使用
`hexo generator || hexo g`
生成静态页面
`hexo server || hexo s`
启动4000端口，浏览blog
`hexo deploy || hexo d`
开始部署
`hexo clean`
清除页面
`hexo new post <title>`
生成.md文件
`hexo new page <title>`
根据md文件，添加静态页面

**部署github pages**

在自己的github上申请一个repository，命名为senylin.github.io，第一个字符必须为github的id，一个github帐号只能申请一个github pages，同时可以通过**https://senylin.github.io**访问你的页面(这里senylin是我的id)

在这个repo的**settings**中的Options中有github pages，点击Lanch automatic page generator创建一个默认主题(我们部署hexo的时候会全部覆盖)，然后在hexo的_config.yml中配置
```
deploy:
  type: git
  repo: https://github.com/senylin/senylin.github.io.git 
  branch: master
```

hexo d的时候就会自行部署到你的github pages

github pages具体请自行查询

**重要的小tips**

 ***1.*** 
hexo以及他的主题都是通过**.yml文件**配置，也就是说yml文件能修改大部分基本内容，而yml格式必须严格遵守:'变量名冒号空格参数'这个形式
`type: git`
不然yml文件将会报错，如上**git前面有个空格**，很重要


***2.*** 
hexo3.x版本**配置github pages**时必须采用一下格式
```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/senylin/senylin.github.io.git 
  branch: master
```
**github，repository**等词可能无法识别，
ps如上，看我的repo后面的内容我采用的是**https**的方式建立链接，需要每次重新输入github的信息进行hexo deploy
如果换成**ssh**的方式建立链接则不需要。即
`repo: git@github.com:senylin/senylin.github.io.git`
但是我报错了-_-||
如果deploy中配置不正确，进行hexo d操作时就会报各种错


***3.***
在**修改hexo的css**时可以在命令行中输入hexo s ，打开localhost://4000，修改刷新修改刷新，我一开始没意识到

修改css样式前，先用编辑器将css解压缩，便于阅读

修改css时，现在chrome的控制台找到目标class，复制粘帖到编辑器中查询，比较快


***4.*** 
先hexo new post <  > 再 hexo new page <  > 生成页面，删除界面直接把source/_posts目录下的对应.md文件删除,再重新
`hexo clean`
`hexo g` 
`hexo s`
即可,但是**我报错了**，最后还重新部署了blog，所以生成页面还是小心为上


***5.*** 

**hexo主题 yilia配置**

**安装yilia**
在blog目录下
`git clone https://github.com/litten/hexo-theme-yilia themes/yilia`
将github中的hexo-theme-yilia项目clone到themes目录下并命名为yilia
然后将blog目录下的**_config.yml**文件下面的themes改为yilia
```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: yilia
```
yilia通过blog中themes/yilia/_config.yml文件配置，修改yml文件中的参数就能更改博客的界面

以下是我 **yilia的配置文件**

```
# Header菜单栏

menu:
  主页: /
  随笔: /tags/随笔
  简介: /self

# SubNav 图标链接 #表示没有使用
subnav:
  github: "https://github.com/senylin"
  weibo: "#"
  rss: "#"
  #douban: "#"
  #mail: "#"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"

rss: /atom.xml

# 是否需要修改 root 路径
# 如果您的网站存放在子目录中，例如 http://yoursite.com/blog，
# 请将您的 url 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
root: 

# Content
excerpt_link: more
fancybox: true
mathjax: false

# 是否开启动画效果
animate: true

# 是否在新窗口打开链接
open_in_new: false

# Miscellaneous
google_analytics: ''
favicon: /favicon.png

#你的头像url，一般采用以下方式导入头像
avatar: http://ww3.sinaimg.cn/mw690/9193aaf8jw1f8ph6eer3dj20c90c7myn.jpg

#是否开启分享
share_jia: true
share_addthis: true

#是否开启多说评论，填写你在多说申请的项目名称 duoshuo: duoshuo-key
#若使用disqus，请在博客config文件中填写disqus_shortname，并关闭多说评论
duoshuo: false

# 如不需要，将该项置为false
# 比如
#smart_menu: 对应小导航栏
#  friends: false

smart_menu:
  innerArchive: '所有文章'
  tagcloud: '标签'
  friends: '友链'
  aboutme: '关于我'

friends:
  友情链接1: http://localhost:4000/
  友情链接2: http://localhost:4000/
  友情链接3: http://localhost:4000/
  友情链接4: http://localhost:4000/
  友情链接5: http://localhost:4000/
  友情链接6: http://localhost:4000/

aboutme: 很惭愧<br><br>只做了一点微小的工作<br>谢谢大家
```

### hexo插件学习

还没学会，尴尬

