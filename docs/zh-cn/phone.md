# 创建移动版应用程序

## 注册社区版
社区版的注册地址如下：
https://www.sencha.com/products/extjs/communityedition/?utm_source=snceb&utm_medium=email&utm_campaign=sncextjs-communtiy&utm_content=181106-pt-sncextjs-community

注册社区版要注意的事情是尽量不要使用国内的如qq、阿里云这样的邮箱，很多时候会收不到注册邮件，建议使用微软、谷歌等公司的邮箱。

注册后，会收到几封电子邮件，有一封是用来重置登录密码的，这个步骤一定要做，不然，在NMP中你就无法登录网站下载ext-gen等工具和包。还有一封标题为《Thank you for Requesting Ext JS Community Edition》的邮件也要看看，该邮件是为使用社区版提供支持的，单击《[tutorial](http://docs-devel.sencha.com/extjs/6.6.0-CE/guides/quick_start/What_You_Will_Be_Coding.html?utm_source=sncln&utm_medium=email&utm_campaign=pt_purchase&utm_content=tnc-extjs-community-ty-1)》会切换到使用教程。

## 安装`ext-gen`

在VS Code的终端窗口中，输入以下命令登录Sencha的NPM仓储：
```bash
 npm login --registry=https://sencha.myget.org/F/community/npm/ --scope=@sencha
```
命令执行后会提示输入用户帐号，这里要注意的是需要将邮件地址中的“@”替换换“..”才是真正的登录帐号。
输入完密码和公开的邮件地址后，就可执行以下命令安装`ext-gen`了：
```bash
  npm install -g @sencha/ext-gen
```
`ext-gen`安装完成后，输入以下命令可以查看帮助：
```bash
ext-gen --help

Sencha ExtGen v1.0.2 Community Edition - The Ext JS code generator

Quick Start: ext-gen -a

ext-gen app (-h) (-d) (-i) (-t 'template') (-m 'moderntheme') (-n 'name')

-h --help          show help (no parameters also shows help)
-d --defaults      show defaults for package.json
-i --interactive   run in interactive mode (question prompts will display)
-t --template      name for Ext JS template used for generate
-m --moderntheme   theme name for Ext JS modern toolkit
-n --name          name for Ext JS generated app
-v --verbose       verbose npm messages (for problems only)

Examples:
ext-gen app --template universalmodern --moderntheme theme-material --name CoolUniversalApp
ext-gen app --interactive
ext-gen app -a -t moderndesktop -n ModernApp


You can select from the following Ext JS templates provided by Sencha ExtGen

Modern Templates:

moderndesktop
This template contains 1 profile, configured to use the modern toolkit of Ext JS for a desktop application

universalmodern
This template contains 2 profiles, 1 for desktop and 1 for mobile. Both profiles use the modern toolkit.

modern themes:  theme-material, theme-ios, theme-neptune, theme-triton
```

由于目前并没有单独基于移动端开发的目标，因而在这里需要创建一个通用应用程序，让它包含phone配置，具体执行的命令如下：
```bash
ext-gen app -t universalmodern -m theme-material -n CE66
```

## 引用包
在`CE66`中引用包，需要修改应用程序的`workspace.json`文件的`packages.dir`的设置，以指定引用包的路径，但直接使用`${workspace.dir}/../packages/local`来指定路径，会出现调试时找不到文件的情况。造成这个问题的主要原因是要调试`CE66`应用程序，只能将根目录设置为`client\ce-66`，不然不能访问`node_modules`等目录。为了解决这个问题，可以使用window的`mklink`命令，将`client\ce-66\packages\local`文件夹指向`client\packages\local`，具体操作步骤如下：

 1. 已管理员身份打开一个命令提示符窗口
 2. 切换到项目的`client`文件夹
 3. 执行以下命令：
```bash
mklink /j ce-66\packages\local packages\local
为 ce-66\packages\local <<===>> packages\local 创建的联接
```
命令执行完成后，就会发现访问`ce-66\packages\local`文件夹与访问`packages\local`文件夹没有任何区别了。余下要做的是修改`workspace.json`文件，具体修改代码如下：
```json
  "packages": {
    "dir": "${workspace.dir}/packages ,${workspace.dir}/packages/local",
    ...
  }

```
然后是在`app.json`文件中添加以下引用：
```json
    "Locale",
    "Common.Core",
    "Common.Modern",
    "Common.Data"
```

## 生成一次应用程序
先在`package.json`文件的`scripts`中添加以下命令用于生成开发环境的应用程序：
```json
"build-development": "npx sencha app build development",
```
在VS Code中切换到`ce-66`文件夹，然后执行`npm run build-development`就可生成应用程序了。如果觉得还是使用`cmd`方法，也可执行命令`sencha app build -dev`来执行生成操作。

## 实现本地化
执行生成操作后，会发现本地化包的文件已被复制到`client\ce-66\build\development\CE66\desktop\resources\Locale`和`client\ce-66\build\development\CE66\phone\resources\Locale`文件夹，首页可通过这两个目录中的一个来加载本地化文件。

与桌面应用程序一样，需要修改`index.html`文件和`app.js`文件来加载本地化文件以及执行本地化重写操作。

完成以上操作后，执行一次生成操作。然后修改`iisexpress.json`文件，将路径修改为`client\ce-66\`。启动IIS Express后，在Chrome浏览器中，按F12打开Web开发工具，并切换到移动设备调试模式，然后打开应用程序，以验证本地化文件是否已成功加载且应用程序是否能正常运行。如果一切顺利，说明项目开发环境已经配置好了。
