# 概述

Ext JS社区版的主要优点就是在特定情况下，可以免费使用最新版的Ext JS来开发应用程序。还是老话说得好，天下没有免费的午餐，社区版虽然可以免费使用，但限制也不少，如只能使用NPM的方式进行开发，只能使用Modern工具包开发桌面应用程序等。

## Classic工具包和Modern工具包应该怎么选择
在《[What’s New in Ext JS 6.5 and Sencha Cmd 6.5 – Your Questions Answered](https://www.sencha.com/blog/whats-new-in-ext-js-6-5-and-sencha-cmd-6-5-your-questions-answered/)》一文中，对如何选择Classic工具包和Modern工具包有以下问与答：
> When starting a new project, which toolkit should I use?
> 
> Question details: We’re currently starting development of a completely new app – initially for  desktop, but later we’ll add support for phones. What’s the recommended way of building > this type of app that is the most future proof? Should we go for a universal app and create our initial desktop app with the Classic toolkit, or is a Modern toolkit only app the best approach from now on?
> 
> We recommend the Modern toolkit for most new projects, but there are several features in the Classic toolkit that would also make it the right choice. The following features are only available in Classic: locking grids, support for IE8 / 9 / 10, and accessibility and support for RTL (Right-to-left) languages. If your application needs these capabilities, then Classic is the way to go.

根据以上回答和其他方面的一些信息汇总，选择哪个工具包的主要参考点如下：

 - Modern工具包是未来式，但目前功能上还有欠缺
 - Modern工具包暂时不支持锁定表格功能，在下一个版本就可以了
 - Modern工具包目前没有TagField组件，这个在某些情况下比较致命，需要自己开发多选扩展
 - Modern工具包不再支持IE
 - Modern工具包目前不支持RTL语言

也就是说，在Modern工具包还没有完全能替代Classic工具包之前，要开发需要一些特殊功能支持的应用程序，只能使用Classic工具包。

## 可能的选择
社区版只支持Modern工具包，要使用Classic工具包，则只能使用GPL版本（6.2）。要想使用最新版本的Classic工具包，只能付费了。
目前来说，可行的选择是全部版本的应用程序都使用社区版来开发或都使用GPL版本来开发，又或者使用GPL版本的Classic工具包来开发桌面应用程序，使用社区版来开发移动端的应用程序。
如果整个项目需要开发移动端的应用程序， 建议使用社区版，而不是GPL版本，因为GPL版本中有不少常用的组件的Bug需要自己根据社区版的代码去自己去修正，那还不如直接使用社区版。在又需要使用GPL版开发桌面应用程序的情况下，就只能将两个版本拆分为两个独立的应用程序，桌面版的使用GPL版开发，而移动版则使用社区版开发。
将项目拆分为两个独立的应用程序，需要解决的是共享类的问题，总不能将这些类复制来复制去，那就比较麻烦了。要解决共享类的问题，最简单的办法就是将这些共享类做成相应的包，然后在应用程序中引用这些包就行了，在下一篇文章将介绍怎么去创建和使用包。

