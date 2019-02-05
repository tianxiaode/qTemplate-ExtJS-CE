# Packages and Workspace

## Basic
For packages, it is simply a shared code that can be used for multiple applications, such as model, storage (store) definitions, and more information about packages, as can be found in [Sencha Cmd Packages](https://docs.sencha.com/cmd/6.6.0/guides/cmd_packages/cmd_packages.html).

The workspace is not required, but using it to manage applications, packages, and other shared code is a good choice. For more information about workspaces, see  [Workspaces in Sencha Cmd](https://docs.sencha.com/cmd/6.6.0/guides/workspaces.html).

Be careful to use the workspace, you can only use one version of the Ext JS framework in a workspace, such as the framework version used for the first application to be created is 6.2, then applications created in that workspace using Sencha cmd will use version 6.2 of the framework, using the NPM The application created by tools is not subject to this limitation because the application created by NPM Tools uses a framework in `node_modules`, not a workspace framework.

Because the applications created by NMP tools are not managed by the workspace, this makes it difficult for the application to reference the package, which can be resolved by the `mklink` Command Window directory join.

## Development environment
- Operating system: Window 10
- IDE: Visual Studio Code
- Sencha Cmd: 6.6.0.13
- ExtGen : Sencha ExtGen v1.0.2 Community Edition

## Create a workspace
Create the appropriate project folder as shown in the following figure:

![Project Folder](../images/1.png)

In the terminal window of VS code, go to the `src` folder and execute the following command to convert the client folder to a workspace:
```bash
sencha gen work ./client
```
When the command finishes executing, a file named `Workspace.json` is added to the folder, as follows:
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
As you can see from the comments, the file primarily defines the framework used by the workspace, the build directory, and the package directory.

## Create a desktop application using version 6.2
In the VS Code terminal window, use the `cd` command to enter the client folder, and then execute the following command to create a desktop application:
```bash
sencha -sdk D:\Workspace\ext6\ gen app -ext -classic Admin ./Desktop62
```
The above code `sdk` parameter specifies the path to the frame, and the `gen app` indicates that to create an application, the parameters `ext` and `classic` represent the desktop application to be created, and the application's namespace is `Admin` and the storage path is `Desktop62`.

After the application is created, in order to test the effect, you need to create a folder named `.vscode` in the project root, and then add a file named ` iisexpress.json` to it, with the following code:
```json
{
  "port": 4200,
  "path": "d:\\Workspace\\Javascript\\qTemplate-ExtJS-CE\\src\\client\\",
  "clr": "v4.0",
  "protocol": "http"
}
```
In the above code, it is important to note the path settings, here is not to set the access path directly to `Desktop62`, because the build path is in the workspace's ` build` folder, not in the `Desktop62\build` folder, so that when the application is debugging, If you want to access a packaged style file, you must get the file from the `build` folder in the workspace, and to access the `build` folder in the workspace, you must set the site root directory to the folder in which the workspace resides, not the folder for the specific project.

After the file `iisexpress.json` is created, it is to press `ctrl+shift+p` to open the VS Code Command window, select `IIS express:start website` To access the open Web site, and adjust the access address to `http://localhost:4200/desktop62/` to access the application.

## Create a Package
To create a package, you need to use the following command:
```
 sencha generate package foo
 ```
 In the above code, `foo` is the name of the package.
 In this project, you need to create the following packages:
  - Common.classic: Shared classes for Classic kits
  - Common.modern: Shared classes for modern kits
  - Common.core: Shared classes for classic and modern at the same time
  - Common.data: The model, storage, and other data classes used to define the project
  - Locale: Used to store localized files

After the above package is created, you will see a file named `Packages` under the `Client` file, the specific directory structure is shown in the following figure:
![包](../images/2.png)

## Reference packages in desktop applications
To reference the package created above in a desktop application, it's fairly simple, just open the application's `app.json` file, and then add the following reference to ' requires :
```json
        "Locale",
        "Common.Core",
        "Common.Classic",
        "Common.Data"
```

## Localized packages
For localized packages, you cannot place scripts in the `src` folder, but instead in the `resources` folder, because for localized packages, you only need to do one copy at a time, and you do not need to package into your application as a class.

The following is a copy of the files from the localized package in the original quick template to the `locale\resoutces` folder.

Because in the latest version of the modern Toolkit, overridden is also used to localize, it is necessary to determine within the `init` method that the current application is using that toolkit before performing a specific override operation. In this project, the framework version number 6.2, the use of the Classic Toolkit, and the use of 6.x (x>2) are using the modern toolkit, so you can determine the version number of the framework to decide to perform that localization override scheme, the code is as follows:
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
The `Ext.getversion().minor` in the code is used to get the secondary version number of the frame, and when the value is greater than 2 , the localization scheme of the modern is used, otherwise the localization scheme of the classic is used.

After you execute the build command `sencha app build -dev` in the desktop application, you will find that the localized file has been copied to the `Client\build\development\admin\resources\locale` folder. Knowing how to access localized files, you can add the following request code for localized files within the application's `index.html`:
```javascript
var defaultLang = (navigator.language || navigator.userLanguage).replace('-', '_'),
    locale  =location.href.match(/lang=([\w-]+)/),
    LANG = (locale && locale[1]) || defaultLang;
document.write('<script src="../build/development/Admin/resources/locale/'+ LANG+'.js" type="text/javascript"><\/script>');
```
The above code determines whether the URL has a language setting and, if not, uses the browser default language as the localized language.

To perform a framework localization override, you also need to add the following code at the top of `app.js`:
```javascript
Ext.onReady(function(){
	I18N.init();
});
```
The above code will implement localized overrides by calling the Init method of the localized file after the framework initialization is complete and the application is not executed.

After you execute the build command `sencha app build -dev` on the application, you can refresh the browser page and check the network panel to see if the localized file is loaded. If the localized file is already loaded, execute the following code in the console:
```javascript
Ext.MessageBox.alert('test','test');
```
If the `OK` button in the pop-up window has been converted to localized text, it means that localization has been implemented.



