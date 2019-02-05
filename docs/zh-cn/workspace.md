# 包（packages）与工作区（workspace）

## 基本概念
对于包，简单来说就是能用于多个应用程序的共享代码，如模型（model）、存储（Store）的定义，有关包的详细信息，可参阅文章《[Sencha Cmd Packages](https://docs.sencha.com/cmd/6.6.0/guides/cmd_packages/cmd_packages.html)》。

工作区不是必需的，但使用它来管理应用程序、包和其他共享代码是个不错的选择。有关工作区的详细信息，可参阅文章《[Workspaces in Sencha Cmd](https://docs.sencha.com/cmd/6.6.0/guides/workspaces.html)》。

使用工作区一定要小心，在一个工作区内只能使用一个版本的Ext JS框架，如第一次创建的应用程序所使用的框架版本是6.2，那以后在该工作区使用Sencha Cmd创建的应用程序都将使用6.2版本这个框架，而使用NPM Tools创建的应用程序则不受此限制，原因是NPM Tools创建的应用程序使用的node_modules中的框架，而不是workspace的框架。

由于NMP Tools创建的应用程序不受工作区的管理，这就为应用程序引用包带来了困难，这可通过`mklink`命令窗口目录联接来解决。

## 开发环境
- 操作系统：Window 10
- 开发工具：Visual Studio Code
- Sencha Cmd： 6.6.0.13
- ExtGen ：Sencha ExtGen v1.0.2 Community Edition

## 创建工作区
先如下图所示创建相应的项目文件夹：

![项目结构](../images/1.png)

在VS Code的终端窗口中，进入src文件夹 ，执行以下命令将client文件夹转换为工作区：
```bash
sencha gen work ./client
```
命令执行完后，会在文件夹内添加一个名为`workspace.json`的文件，具体内容如下：
```json
{
    /**
     * An object containing key value pair framework descriptors.
     *
     * The value should be an object containing "path" the path inside the workspace where the framework
     * files can be found and "version" the version of the framework. For example:
     *
     *      "frameworks": {
     *          "ext": {
     *              "path": "ext",
     *              "version": "n.n.n.n"
     *          },
     *          "extnew": {
     *              "path": "extnew",
     *              "version": "n.n.n.n"
     *          }
     *      }
     *
     * You can exclude the directories that contain the framework from source control and later restore them
     * with "sencha workspace install". See "sencha help workspace install" for more information.
     *
     */
    "frameworks": {
    },

    /**
     * This is the folder for build outputs in the workspace.
     */
    "build": {
        "dir": "${workspace.dir}/build"
    },

    /**
     * These configs determine where packages are generated and extracted to (when downloaded).
     */
    "packages": {
        /**
         * This folder contains all local packages.
         * If a comma-separated string is used as value the first path will be used as the path to generate new packages.
         */
        "dir": "${workspace.dir}/packages/local,${workspace.dir}/packages",

        /**
         * This folder contains all extracted (remote) packages.
         */
        "extract": "${workspace.dir}/packages/remote"
    }
}

```
从注释可以了解到，在该文件主要定义了该工作区所使用的框架、生成目录和包目录。

## 使用6.2版本创建一个桌面应用程序
在VS Code终端窗口中，使用`cd`命令进入client文件夹，然后执行以下命令创建一个桌面应用程序：
```bash
sencha -sdk D:\Workspace\ext6\ gen app -ext -classic Admin ./Desktop62
```
以上代码`sdk`参数指定了框架的路径，`gen app`表示要创建一个应用程序，参数`ext`和`classic`表示要创建的是桌面应用程序，应用程序的命名空间为`Admin`，存放路径为`Desktop62`。

应用程序创建后，为了测试一下效果，需要在项目根目录创建一个名为`.vscode`的文件夹，然后在里面添加名为`iisexpress.json`的文件，具体代码如下：
```json
{
  "port": 4200,
  "path": "d:\\Workspace\\Javascript\\qTemplate-ExtJS-CE\\src\\client\\",
  "clr": "v4.0",
  "protocol": "http"
}
```
以上代码中，需要注意的是路径的设置，这里没有将访问路径直接设置为`Desktop62`，是因为生成路径是在工作区的`build`文件夹，而不是在`Desktop62\build`文件夹，这样，应用程序在调试时，如果要访问打包后的样式文件，就必须从工作区的`build`文件夹获取文件，而要能访问工作区的`build`文件夹，则必须将网站根目录设置为工作区所在文件夹，而不是具体项目的文件夹。

文件`iisexpress.json`创建后，就是按下`CTRL+SHIFT+P`打开VS Code命令窗口，选择`IIS Express: Start Website`来访问打开网站了，将访问地址调整为`http://localhost:4200/desktop62/`就能访问到应用程序了。

## 创建包
要创建包，需要使用以下命令：
```
 sencha generate package foo
 ```
 以上命名中，`foo`为包的名字。
 在本项目中，需要创建以下包：
  - Common.Classic：用于Classic工具包的共享类
  - Common.Modern：用于Modern工具包的共享类
  - Common.Core：同时适用于Classic和Modern的共享类
  - Common.Data：用来定义该项目的模型、存储等数据类
  - Locale：用来存放本地化文件

以上包创建完之后，会在`Client`文件下看到一个名为`packages`的文件，具体的目录结构如下图所示：
![包](../images/2.png)

## 在桌面应用程序中引用包
要在桌面应用程序中引用上面创建的包，相当简单，只要打开应用程序的`app.json`文件，然后在`requires`中添加以下引用就行了：
```json
        "Locale",
        "Common.Core",
        "Common.Classic",
        "Common.Data"
```
## 本地化包
对于本地化包，不能将脚本放在`src`文件夹中，而是要放在`resources`文件夹中，原因是对于本地化包，只需要做一次复制就行了，不需要作为类打包到应用程序中。

下面把原有的快速模版中的本地化包的文件复制到`Locale\resoutces`文件夹中。

由于在最新版本的Modern工具包中，也采用了重写的方式来实现本地化，因而需要在`init`方法内判断当前应用程序使用的是那个工具包，然后再执行具体的重写操作。在本项目内，框架版本号为6.2的，使用的Classic工具包，而使用6.x(x>2)的都是使用Modern工具包，因而可通过判断框架的版本号来决定执行那个本地化重写方案，具体代码如下：
```javascript
    init: function (profile) {
        document.title = I18N.AppTitle;
        var minor = Ext.getVersion().minor;
        if(minor > 2)
            this.initPhone();
        else
            this.initDesktop();

    } ,//init
```
代码中的`Ext.getVersion().minor`就用于获取框架的次版本号，当该值大于2时，则使用Modern的本地化方案，否则使用Classic的本地化方案。

在桌面应用程序中执行生成命令`sencha app build -dev`后，会发现本地化文件已被复制到`client\build\development\Admin\resources\Locale`文件夹。知道怎么访问本地化文件就可以在应用程序的`index.html`内添加如下对本地化文件的请求代码了：
```javascript
var defaultLang = (navigator.language || navigator.userLanguage).replace('-', '_'),
    locale  =location.href.match(/lang=([\w-]+)/),
    LANG = (locale && locale[1]) || defaultLang;
document.write('<script src="../build/development/Admin/resources/locale/'+ LANG+'.js" type="text/javascript"><\/script>');
```
以上代码会判断url是否带有语言设置，如果没有，则使用浏览器默认语言作为本地化语言。

要执行框架本地化重写，还需要在`app.js`的顶部添加以下代码：
```javascript
Ext.onReady(function(){
	I18N.init();
});
```
以上代码会在框架初始化完成后，应用程序没有执行前，调用本地化文件的init方法实现本地化重写。

对应用程序执行一次生成命令`sencha app build -dev`后，就可刷新浏览器页面，在网络面板中检查本地化文件是否已经加载了。如果本地化文件已经加载，在控制台中执行以下代码：
```javascript
Ext.MessageBox.alert('测试','测试');
```
如果弹出窗口中的`ok`按钮已经转换为本地化文本，那说明本地化已经实现了。



