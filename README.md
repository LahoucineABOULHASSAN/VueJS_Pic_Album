# picalbum

# Description

This project is a 100% front-end web app build using the VueJS framework version 3.
PicAlbum is a frontend website created with the framework Vue 3. It contains 4 routes:
/photos : as the home routes where there are all the pics listed on a grid view, and each photo is a link to its own details.
/documentation: the API documentation.
/about : as the about page, contains the information about this page and about me too.
/contact : as a form page for contacting me if there's any comment or feedback, it's the way how to reach me.
The data that the website use is coming from my backend API, build with Python and Flask framework, and for the database, it uses the Postgres SQL service. and it's hosted on Heroku.
This website is a photo album of nature and anything that I was able to take with my phone's camera. I am practicing photography in my free time. So I decided to build this web app to show the pictures on it as well as a good practice of web development.
The Technologies used on this app are the following:
-HTML5
-CSS3
-ES6
-VUE 3
-AXIOS
-GIT
-VSCODE

# Installation

To be able to use this app project, you have to make sure you have `nodeJs` installed on your computer,
to make sure if it is run the command `node --version` in the terminal you use.
it is required so you can use npm to install the depandencies of this project via this command `npm install`

For more commands to:
-Compiles and hot-reloads for development:
`npm run serve`
-Compiles and minifies for production:
`npm run build`
To Customize configuration check [Configuration Reference](https://cli.vuejs.org/config/).

Set up the .env to have your own resource urls, there is three variables
[VUE_APP_API_URL]( your backend url)
The resources used in this project provide a json format response you can check the result and what kind of response you get runing the app on the browser and use the development tools, and the XHR call in the network section.

# License

MIT License

Copyright (c) [2021][``lahoucine aboulhassan``]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
