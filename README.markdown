# localStorage workshop jan-2013

## What you require

A text editor and a modern web browser
Get the ZIP file https://github.com/marcbaechinger/htwchur/archive/workshop-start.zip


## Exercise 1: store strings locally

Open <code>javascript/app.js</code> in a text editor

1. Complete function <code>chooseBrowser</code> 
	1. read src attribute and store in local store
	2. read title attribute and store locally
2. Complete function <code>getFavoriteBrowserIcon</code> to get the src of the logo image from storage
3. Complete function <code>getFavoriteBrowserName</code> to get the name of the favorite browser from storage  

## Exercise 2: store a settings object

Open <code>index.html</code> in a text editor

1. Change javascript reference from app.js to app-settings.js 

Open <code>javascript/app-settings.js</code> in a text editor

1. Complete function <code>getDefaultSettings</code> and return a js object with default setting for icon and name of fav browser
2. Complete function <code>getSettings</code> and simply return the default settings.
3. Complete function <code>storeSettings</code> to store settings 
	1. convert <code>this.settings</code> to a string.
	2. store the string locally
4. Improve <code>getSettings</code> to use stored settings after selection has changed