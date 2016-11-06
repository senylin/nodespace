---
title: easyar SDK学习
date: 2016-11-06 22:14:54
tags:
- cs
- ar
- unity
- 2016-2017
---

**参考链接：**
 - http://www.easyar.cn/view/docs/Getting-Started/Getting-Started-with-EasyAR.html
 - http://blog.csdn.net/qinyuanpei/article/details/49500001
 - http://www.zhihu.com/question/35001692?sort=created

<!--more-->
###easyar 简单教程

 http://blog.csdn.net/qinyuanpei/article/details/49500001

ar技术（增强现实技术）
**easyar**是国内开发的比较成功的增强现实引擎，主要基于unity游戏引擎，能够快速的将AR软件发布到各个平台，该sdk提供了许多实用的接口和api，详细可以在[easyar](https://www.easyar.cn) 的官网上有提供对应的文档参考查看，
简单的操作可以根据上方csdn博客的链接参考学习。


###easyar 学习记录

目前easyar的最新版本是1.3.1版本，在此之前共有六个版本，每经过0.1版本都有一定大改动，我学习的大多参考问答、教程有很多是基于easyar1.2.0版本的，1.3.1版本相较于1.2.0版本，在配置easyar的文件和脚本上有所变动，如对target事件的接口的写法。

学习easyar可以先下载[easyar](https://www.easyar.cn)官网对应的unity sample，并配置在新的unity项目下，通过对他提供实例的操作和分析，可以简单的掌握easyar的使用方法。

如HelloAR这个sample，
打开这个项目，assets下包括
 - EasyAR easyar的配置环境
 - HelloAR 这个项目的主要空间
 - plugins 针对不同平台的插件
 - streamingassets 图片及识别脚本的目录

主要可以通过修改streamingassets 目录下的target.json文件来修改该项目所要识别的图片并且，图片也要出现在同目录下，
```
{
  "images" :
  [
    {
      "image" : "sightplus/argame00.jpg",
      "name" : "argame"
    },
    {
      "image" : "idback.jpg",
      "name" : "idback",
      "size" : [8.56, 5.4],
      "uid" : "uid-string"
    }
  ]
}

```
以上为target.json文件的基本模版，通过修改对应的image和name并对应到scenes中的元素就可以实现简单的AR效果。如helloar scenes中的 ImageTarget-idcark元素，并将其中的对应模型修改，就能改动成我们需要的AR效果。

###学习总结

由于easyar主要使用cs语言编写脚本，同时除了官方论坛外没有可靠社区，此学习资源较为贫瘠，网上大多都是简单的入门教程，无深入的研究教程，好在easyar作为开发软件，可以让我们去阅读其编写的API。但是其学习难度相对复杂，其中的unity类需要对unity和cs要有较好基础，当然简单使用并没有问题，目前我们的项目也只是对easyar进行简单的使用。
