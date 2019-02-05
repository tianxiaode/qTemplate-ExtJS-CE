# Create a mobile app

## Register for Community Edition:
https://www.sencha.com/products/extjs/communityedition/?utm_source=snceb&utm_medium=email&utm_campaign=sncextjs-communtiy&utm_content=181106-pt-sncextjs-community

After registration, you will receive several emails, one is used to reset the login password, this step must be done, otherwise, in NMP you will not be able to log on to the site to download Ext-gen and other tools and packages. There is also an email entitled "Thank you for requesting EXT JS community Edition", which is supported by the use of the Community edition, Clicking  [tutorial](http://docs-devel.sencha.com/extjs/6.6.0-CE/guides/quick_start/What_You_Will_Be_Coding.html?utm_source=sncln&utm_medium=email&utm_campaign=pt_purchase&utm_content=tnc-extjs-community-ty-1) will switch to the use tutorial.

## Install `ext-gen`

In the terminal window of VS code, enter the following command to log on to Sencha's NPM repository:
```bash
 npm login --registry=https://sencha.myget.org/F/community/npm/ --scope=@sencha
```
After the command is executed, you will be prompted for a user account, and it is important to note that you need to replace "@" in the email address with ".." Is the real login account.

Once you have entered your password and public email address, you can perform the following command to install `ext-gen`:
```bash
  npm install -g @sencha/ext-gen
```
When the `Ext-gen` installation is complete, enter the following command to view the help:
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

Since there is currently no separate goal based on mobile development, there is a need to create a generic application here that contains the phone configuration, executing the following commands:
```bash
ext-gen app -t universalmodern -m theme-material -n CE66
```

## Reference Packages
To reference a package in `CE66`, you need to modify the `packages.dir` setting of the application's `workspace.json` file to specify the path to the reference package, but use `${workspace.dir}/../packages/local` to specify a path where the file cannot be found when debugging. The main cause of this problem is to debug the `CE66` application, you can only set the root directory to `client\ce-66`, or you cannot access directories such as `node_modules`. To solve this problem, you can use window's `mklink` command to point the `client\ce-66\packages\local` folder to `Client\packages\local`, with the following steps:
1. Open a Command Prompt window as an administrator
 2. Switch to the `client` folder of the project
 3. Execute the following command:

```bash
mklink /j ce-66\packages\local packages\local
为 ce-66\packages\local <<===>> packages\local 创建的联接
```

When the command execution is complete, you will find that there is no difference between accessing the `ce-66\packages\local` folder and accessing the `packages\local` folder. The rest is to modify the `workspace.json` file by modifying the code as follows:

```json
  "packages": {
    "dir": "${workspace.dir}/packages ,${workspace.dir}/packages/local",
    ...
  }
```

Then add the following reference to the `App.json` file:
```json
    "Locale",
    "Common.Core",
    "Common.Modern",
    "Common.Data"
```

## Build an application once
First add the following command to the `scripts` of the `package.json` file to build the application for the development environment:
```json
"build-development": "npx sencha app build development",
```
Switch to the `ce-66` folder in vs Code, and then execute `npm run build-development` to build the application. If you feel that you still use the `cmd` method, you can also execute the command `sencha app build -dev` to perform the build operation.

## Implementing localization
After you perform the build operation, you will find that the files for the localized package have been copied to `Client\ce-66\build\development\CE66\desktop\resources\Locale` and `client\ce-66\build\ Development\CE66\phone\resources\Locale` folder, home page you can load localized files from one of these two directories.

As with desktop applications, you need to modify the `index.html` file and `app.js` files to load localized files and perform localized rewriting operations.

After you complete the above operation, perform a build operation. Then modify the ` iisexpress.json` file and modify the path to `client\ce-66\`. After you start IIS Express, in Chrome, press F12 to open the Web development tool, switch to mobile device debug mode, and then open the application to verify that the localized file is loaded successfully and that the application is functioning correctly. If all goes well, it means that the project development environment is configured.