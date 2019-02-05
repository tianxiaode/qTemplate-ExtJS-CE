# Overview

The main advantage of the Ext JS Community Edition is that under certain circumstances, you can use the latest version of Ext JS for free to develop your application. Still good words, the world does not have a free lunch, the community version can be used free of charge, but there are many restrictions, such as only the use of NPM to develop, can only use the modern toolkit to develop desktop applications and so on.

## How to choose Classic or Modern
In [What’s New in Ext JS 6.5 and Sencha Cmd 6.5 – Your Questions Answered](https://www.sencha.com/blog/whats-new-in-ext-js-6-5-and-sencha-cmd-6-5-your-questions-answered/)》,the following questions and answers are available on how to select the Classic Toolkit and the Modern Toolkit:
> When starting a new project, which toolkit should I use?
> 
> Question details: We’re currently starting development of a completely new app – initially for  desktop, but later we’ll add support for phones. What’s the recommended way of building > this type of app that is the most future proof? Should we go for a universal app and create our initial desktop app with the Classic toolkit, or is a Modern toolkit only app the best approach from now on?
> 
> We recommend the Modern toolkit for most new projects, but there are several features in the Classic toolkit that would also make it the right choice. The following features are only available in Classic: locking grids, support for IE8 / 9 / 10, and accessibility and support for RTL (Right-to-left) languages. If your application needs these capabilities, then Classic is the way to go.

Based on the above answers and some other information summary, the main reference points for which toolkit to select are as follows:

 - The modern toolkit is futuristic, but there is still a lack of functionality
 - The modern toolkit does not support locking table functionality for the time being, and is available in the next release
 - The modern toolkit currently does not have a Tagfield component, which in some cases is fatal and requires the development of multiple-choice extensions of its own
 - Modern tool pack no longer supports IE
 - Modern kit currently does not support RTL languages

That is, before the modern toolkit is fully alternative to the Classic toolkit, you can only use the Classic toolkit to develop applications that require some special feature support.

## Possible options
The community version only supports the modern toolkit, and to use the Classic Toolkit, only the GPL version (6.2) can be used. To use the latest version of the Classic Toolkit, you can only pay for it.

For now, the viable option is for all versions of the application to be developed using the Community version or both to be developed using the GPL version, or to use the GPL version of the Classic toolkit to develop desktop applications and use the Community version to develop mobile applications.

If the entire project needs to develop a mobile application, it is recommended to use the Community version instead of the GPL version, because there are a number of commonly used components in the GPL version of the bug need to be their own according to the community version of the code to fix their own, it is better to use the community version directly. In cases where you need to develop a desktop application using the GPL version, you can split only two versions into two separate applications, the desktop version is developed using the GPL version, and the mobile version is developed using the community version.

Splitting a project into two separate applications, you need to solve the problem of shared classes, you can not copy these classes to copy, it is more troublesome. The easiest way to solve a problem with a shared class is to make these shared classes into packages and then reference them in your application, and the next article will describe how to create and use packages.