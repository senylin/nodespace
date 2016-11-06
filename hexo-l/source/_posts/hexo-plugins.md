---
title: hexo-yilia主题插件配置
date: 2016-11-05 22:00:00
tags:
- hexo
- nodejs
- yilia
- hexo-plugins
---

参考资料:
[Hexo折腾记——基本配置篇](https://yq.aliyun.com/articles/8607)
[使用Hexo搭建博客（四），博客的部件和插件](http://www.jianshu.com/p/739bf1305e66)
[基于swiftype应用于Hexo-Yilia-主题的站内搜索引擎](http://blog.csdn.net/mjoinir/article/details/47108235)
[多说](http://duoshuo.com/)
[switftype](https://swiftype.com/)
[B站多说评论框css样式](http://www.hibenben.com/1029.html)
[jiathis](http://www.jiathis.com/register/)
[Hexo，Yilia主题添加站内搜索功能](http://www.yehbeats.com/2015/04/08/hexo-search/)
[hexo + github + 多说 来搭建免费博客](http://blog.netpi.me/%E5%AE%9E%E7%94%A8/hexo/)
[Hexo站点中添加文章目录以及归档](http://www.ituring.com.cn/article/199624)

<!--more-->

###我的开发环境：

 - ubuntu15.04
 - node v5.10.1
 - npm 3.8.3
 - hexo 3.2.2

###正文

以下插件的具体学习链接都在顶部，下面我就是简单的分享一下自己的配置过程

####switftype---站内搜索功能

[switftype官网](https://swiftype.com/)
[Hexo，Yilia主题添加站内搜索功能](http://www.yehbeats.com/2015/04/08/hexo-search/)
主要还是紧抱上述链接的教程
在switftype官网上注册并创建属于自己的search field
以下是我申请的代码
```
<script type="text/javascript">
  (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
  (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
  e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
  })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');
  
  _st('install','EJPZudqtRB4sry2b6eGq','2.0.0');
</script>
```
然后修改themes中yilia主题中的config.yml配置

添加search目录

在left-col.ejs中添加输入框及search.ejs
```
	<% if (theme.swift_search&&theme.swift_search.enable){ %>
		<form class="search" action="<%- config.root %>search/index.html" method="get" accept-charset="utf-8">
			<label>Search</label>
			<input type="text" id="seny-default-search" class="st-default-search-input" maxlength="30" placeholder="Search" />
		</form>
	<% } %>
```
注意此处input的class和id应当为自己在switftype中设置的

并在footer.ejs中添加生成的js代码

如上方法就能简单的使用站内搜索功能，
但是果然不修改他的css样式，非常难看，所以我们必须添加css样式:
```
.search{position: relative;top:-10px;padding:0 0 0 .5em;z-index: 9;width: 100%;}
form input.st-default-search-input{
	font-size: 12px;
	padding: 4px 9px 4px 27px;
	height: 20px;
	width: 190px;
	color: #666;
	border: 1px solid #ccc;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-ms-border-radius: 10px;
	-o-border-radius: 10px;
	border-radius: 10px;
	-webkit-box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.17);
	-moz-box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.17);
	box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.17);
	outline: none;
	background: #fcfcfc url(/img/'\e827'.png) no-repeat 7px 7px;
}
.search input{
    border :1px solid white;
    color:white;
    background:white;
    padding-left:2em;
     width: 4em;
     transition: 0s;
    }
 .search label{
    display:none;
   }
```
但是教程中的yilia目测和我不是一个版本，目前我的yilia版本中是使用的是**scss**，而教程中并不是，所以我将其转化为最基本的css添加到我的main.css中，and boom！！！  发生了点小问题，我决定暂时不处理，二哈二哈。

####多说---博客评论功能

由于yilia主题的配置中自带了对duoshuo的支持，所以配置多说相对简单，我们仅需要在yilia的config中，修改这一行(ps:在此之前当然当然要前设置好[多说](http://duoshuo.com/)的帐号,二哈，具体教程应该上面有个链接有)
```
#是否开启多说评论，填写你在多说申请的项目名称 duoshuo: duoshuo-key
#若使用disqus，请在博客config文件中填写disqus_shortname，并关闭多说评论
duoshuo: 379dc69397f265bca629fc0eaf452d04
```
将配置duoshuo：加上你在多说官网申请的key即可，

然后打开layout/post目录下的duoshuo.ejs文件，将其修改为多说为你提供的html即可
```
<div class="duoshuo">
<!-- 多说评论框 start -->
	<div class="ds-thread" data-thread-key="<%=key%>" data-title="<%=title%>" data-url="<%=url%>"></div>
<!-- 多说评论框 end -->
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
var duoshuoQuery = {short_name:"senylin"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
	</script>
<!-- 多说公共JS代码 end -->
</div>

```

当然使用插件最大的问题还是修改css样式，在此我仅提供在下的评论框样式

```
/*多说附加样式*/
#ds-reset .ds-avatar{background:none !important; box-shadow:none !important;}
#ds-reset .ds-avatar img , #ds-thread #ds-reset ul.ds-children .ds-avatar img{width:60px !important;height:60px !important;-webkit-transition: .8s;-moz-transition: .8s;-o-transition: .8s;-ms-transition: .8s;padding:3px;border: 1px solid #ddd;background: #fff;border-radius:30px !important;}
.ds-post:hover .ds-avatar img{transform:rotate(720deg);-webkit-transform:rotate(720deg);-moz-transform:rotate(720deg);-o-transform:rotate(720deg);-ms-transform:rotate(720deg);border-radius:30px !important;}
#ds-reset .ds-avatar img:hover{transform:rotate(720deg);-webkit-transform:rotate(720deg);-moz-transform:rotate(720deg);-o-transform:rotate(720deg);-ms-transform:rotate(720deg);border-radius:30px !important;}
#ds-thread #ds-reset .ds-comment-body, #ds-thread #ds-reset ul.ds-children .ds-comment-body{padding-left:50px !important;}
#ds-thread #ds-reset .ds-comment-body, #ds-thread #ds-reset ul.ds-children .ds-comment-body{padding-left:50px !important;}
.ds-post:hover{background:#eee !important;}
#ds-thread #ds-reset ul.ds-children .ds-avatar{width:50px !important;}
#ds-thread #ds-reset .ds-replybox{padding: 0 0 0 60px !important;}
#ds-reset #ds-ctx .ds-ctx-entry .ds-ctx-body{margin-left: 50px !important;}
#ds-recent-comments li.ds-comment:nth-of-type(1){border:none !important;}
/*多说附加样式结束*/
/** 多说最近留言样式 **/
#ds-recent-comments .ds-avatar img{   
    width:100px;height:100px; /*设置图像的长和宽，这里要根据自己的评论框情况更改*/  
    border-radius: 50px;/*设置图像圆角效果,在这里我直接设置了超过width/2的像素，即为圆形了*/  
    -webkit-border-radius: 50px;/*圆角效果：兼容webkit浏览器*/  
    -moz-border-radius:50px;   
    box-shadow: inset 0 -1px 0 #3333sf;/*设置图像阴影效果*/  
    -webkit-box-shadow: inset 0 -1px 0 #3333sf;   
    -webkit-transition: 0.4s;      
    -webkit-transition: -webkit-transform 0.4s ease-out;   
    transition: transform 0.4s ease-out;/*变化时间设置为0.4秒(变化动作即为下面的图像旋转360读）*/  
    -moz-transition: -moz-transform 0.4s ease-out;   
}    
#ds-recent-comments .ds-avatar img:hover{/*设置鼠标悬浮在头像时的CSS样式*/  
    box-shadow: 0 0 10px #fff; rgba(255,255,255,.6), inset 0 0 20px rgba(255,255,255,1);   
    -webkit-box-shadow: 0 0 10px #fff; rgba(255,255,255,.6), inset 0 0 20px rgba(255,255,255,1);   
    transform: rotateZ(360deg);/*图像旋转360度*/  
    -webkit-transform: rotateZ(360deg);   
    -moz-transform: rotateZ(360deg);   
}
/** 扑街 **/
#ds-thread #ds-reset .ds-textarea-wrapper textarea {
background: url(http://diygod.qiniudn.com/plbj.png) right no-repeat;}
#ds-thread #ds-reset ul.ds-comments-tabs li.ds-tab a.ds-current {border:0px;color:#848568;text-shadow:none}
#ds-thread #ds-reset .ds-highlight {font-family:FangSong;font-size:14px;font-weight:bold;color:#698376 !important;}
#ds-thread #ds-reset ul.ds-comments-tabs li.ds-tab a.ds-current:hover {color:#696a52;background:#d4d6ba}
#ds-thread #ds-reset a.ds-highlight:hover {color:#696a52 !important;}

#ds-thread {padding-left:40px!important;}
#ds-thread #ds-reset li.ds-post,#ds-thread #ds-reset #ds-hot-posts {overflow:visible}
#ds-thread #ds-reset .ds-post-self {padding:10px 0 10px 10px!important;}
#ds-thread #ds-reset li.ds-post,#ds-thread #ds-reset .ds-post-self {border:0 !important;}
#ds-reset .ds-avatar, #ds-thread #ds-reset ul.ds-children .ds-avatar {position:absolute;top:26px;left:-14px;padding:5px;width:36px;height:36px;box-shadow:-1px 0 1px rgba(0,0,0,.15) inset;border-radius:46px; background:#E5E6D0;}
#ds-thread #ds-reset ul.ds-children .ds-avatar {left:-13px;}
#ds-thread .ds-avatar a {display:inline-block;padding:0px; width:32px;height:32px;border:0px solid #b9baa6;border-radius:50%; background-color:#fff !important}
#ds-thread .ds-avatar a:hover {border-color:#de5a4e}
#ds-thread .ds-avatar > img {margin:1px 0 0 1px}
#ds-thread #ds-reset .ds-replybox {box-shadow:none;}
#ds-thread #ds-reset ul.ds-children .ds-replybox.ds-inline-replybox a.ds-avatar,
#ds-reset .ds-replybox.ds-inline-replybox a.ds-avatar {left: 0;top: 0; padding: 0;width: 32px !important;height: 32px !important; background: none;box-shadow: none; } 
#ds-reset .ds-replybox.ds-inline-replybox a.ds-avatar img {width: 32px !important;height: 32px !important; border-radius:50%;} 
#ds-reset .ds-replybox a.ds-avatar,
#ds-reset .ds-replybox .ds-avatar img { padding:0;width:38px !important;height:38px !important; border-radius:5px; }
#ds-reset .ds-avatar img {width:32px !important;height:32px !important;border-radius:32px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.22);
							-webkit-transition:.4s all ease-in-out;-moz-transition:.4s all ease-in-out;-o-transition:.4s all ease-in-out;-ms-transition:.4s all ease-in-out;transition:.4s all ease-in-out;
							}
.ds-post-self:hover .ds-avatar img {-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}

#ds-thread #ds-reset .ds-comment-body {background: #FFFFFF;padding:15px 15px 12px 32px;border-radius:5px; box-shadow:0 1px 2px rgba(0,0,0,.15), 0 1px 0 rgba(255,255,255,.75) inset;}

#ds-thread #ds-reset .ds-comment-body p{color:#787968}
#ds-thread #ds-reset .ds-comments a.ds-user-name {font-weight:bold;color:#696A52 !important;}
#ds-thread #ds-reset .ds-comments a.ds-user-name:hover {color:#D32 !important;}

#ds-thread #ds-reset #ds-hot-posts {border:0!important;}
#ds-reset #ds-hot-posts .ds-gradient-bg {background:none;}

#ds-reset #ds-bubble #ds-ctx .ds-ctx-entry {padding:0;}
#ds-reset #ds-bubble .ds-avatar, #ds-reset #ds-bubble #ds-ctx-bubble .ds-avatar a {position:static;padding:0;border:0; background:none;box-shadow:none;}
#ds-reset #ds-bubble .ds-avatar img, #ds-reset #ds-bubble #ds-ctx-bubble .ds-avatar a {width:45px !important;height:45px !important;}
#ds-reset #ds-bubble .ds-user-name{padding-left:13px;}

#ds-reset .ds-comment-body #ds-ctx {border-left:1px solid #b9baa6;background-color:#e8e8dc !important}
#ds-reset #ds-ctx {margin-right:-15px}
#ds-reset #ds-ctx .ds-ctx-entry {position:relative;padding:10px 30px 10px 10px;}
#ds-reset #ds-ctx .ds-ctx-entry .ds-avatar {top:6px;left:5px;background:none;box-shadow:none;}
#ds-reset #ds-ctx .ds-ctx-entry .ds-ctx-body {margin-left:46px;}
#ds-reset #ds-ctx .ds-ctx-entry .ds-ctx-content {color:#787968}
#ds-reset #ds-ctx .ds-ctx-entry .ds-ctx-head a {color:#696A52;font-weight:bold}

#ds-thread #ds-reset .ds-powered-by{
display:none;
}/*隐藏多说底部版权*/
#ds-thread  {padding:32px;}
/*隐藏最新最热等*/
#ds-thread #ds-reset .ds-sort {
display:none;
}
/*隐藏评论框底部分享*/
.ds-sync{
display:none !important;
}
```
####jiathis---博客分享功能

这个插件yilia也有提供，老办法，先[注册](http://www.jiathis.com/register/)，修改config,
```
#是否开启分享
share_jia: true
share_addthis: false
```
然后在layout/post目录下找到share_jia.ejs即可，对应修改成自己帐号的
```
<div class="share_jia">
	<!-- JiaThis Button BEGIN -->
<div class="jiathis_style">
	<span class="jiathis_txt">分享到：</span>
	<a class="jiathis_button_tools_1"></a>
	<a class="jiathis_button_tools_2"></a>
	<a class="jiathis_button_tools_3"></a>
	<a class="jiathis_button_tools_4"></a>
	<a href="http://www.jiathis.com/share?uid=2118016" class="jiathis jiathis_txt jiathis_separator jtico jtico_jiathis" target="_blank">更多</a>
	<a class="jiathis_counter_style"></a>
</div>
<script type="text/javascript">
var jiathis_config = {data_track_clickback:'true'};
</script>
<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=2118016" charset="utf-8"></script>
<!-- JiaThis Button END -->
</div>
```
主要是"http://v3.jiathis.com/code/jia.js?uid=2118016"改成自己申请的uid即可。
jiathis网站中也有提供各种样式，请自行选择。

####文章目录功能
[Hexo站点中添加文章目录以及归档](http://www.ituring.com.cn/article/199624)主要跟着这篇走，但是会有很多不相同的地方，
首先
我们使用的是yilia主题，而教程中不是，所以教程中的item参数我们都要替换成post，如：
```
<div id="toc" class="toc-article">
    <div class="toc-title">目录</div>
    <%- toc(item.content, {list_number: false}) %>
</div>
```
改为
```
<div id="toc" class="toc-article">
    <div class="toc-title">目录</div>
    <%- toc(post.content, {list_number: false}) %>
</div>
```
类推，最后在main.css中修改样式即可。参考：
```
#toc{
  float:right;
  padding:10px 20px 10px 20px;
  font-size:0.8em;
  color:#333;
  margin:0px;
  position:relative;
  left:50px;
  background-color:#eee;
  border-radius: 5px;
  border: 1px solid #ddd;
}
#toc .toc{
    background-color:#eee;
    list-style:none;
    padding:10px;
}
#toc .toc-title{
	font-family: 'FangSong';
	font-size: 18px;
	font-weight: 900;
	letter-spacing: 5px;
	border-bottom: 2px solid #ddd;
}
#toc .toc-link span{
	
}
 #toc .toc-item,.toc-link{
  padding:0.5px;
}
 #toc ol{
    margin:0;
     padding:0 8px 0 8px;
   }
 @media screen and (max-width: 640px){
    #toc{
    display:none;
	}
   }
  
```
####回到顶部功能

由于本人懒得在yilia主题中导入jquery插件，怕引起冲突，所以通过href方式回到顶部
```
   <div class="article-totop">
      <a title="回到顶部" href="#article-top">
        <img src="/img/totop.png" />
      </a>
    </div>
```
并添加样式
```
.article-totop{
  position: fixed;
  bottom:60px;
  right:25px;
  cursor:pointer;
  display: block;
  opacity: 0.7;
  width: 50px;
  height: 50px;
  border-radius: 2px;
}
.article-totop:hover{
  opacity: 1;
   cursor:pointer;
}
.article-totop a{
  cursor:pointer;
}
.article-totop img{
	width: 100%;
	height: 100%;
}
```
图片请自行寻找


----------

> to be continue ...


