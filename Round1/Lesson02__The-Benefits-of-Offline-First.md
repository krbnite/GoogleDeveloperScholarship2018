Goal: build sites and apps that work great whatever type of connection the user has.

* Gonna use Service Worker to intercept network traffic
  - ![](./images/service-worker.png)
* Explore the latest Service Worker devtools
  - ![](./images/service-worker-devtools.png)
* Gonna use IBDB -- the In-Browser DataBase
  - ![](./images/in-browser-database.png)
* Explore user experience strategies to deal w/ various network conditions


## Progressive Web Apps
The example used is Wittr, a chat feed app like Twitter. It's an app, but benefits from all
available to a website... To be progressive, it must work without internet connection to some extent. But
this isn't the biggest problem: Lie-Fi.

Lie-Fi is when your phone says you have about 1bar of connectivity, but flickers to zero 
occasionally... It's that 1bar that gives you false hope, and keeps you waiting for a page
to load...when, in truth, it will never load!

![](/images/Lie-Fi.png)

There is a lot that goes on between your phone and server an app is hosted on!

<img src="./images/between-your-phone-and-server-1.png" width="500vw">
<img src="./images/between-your-phone-and-server-2.png" width="500vw">
<img src="./images/between-your-phone-and-server-3.png" width="500vw">
<img src="./images/between-your-phone-and-server-4.png" width="500vw">
<img src="./images/between-your-phone-and-server-5.png" width="500vw">

The above is only half the journey!  The response has to travel from server all the way back
to the phone.

## Online-First VS Offline-First Web Apps
In an online first approach, one can make an offline mode, e.g., a sad cat pic.  But in this approach,
to determine if the app should display the sad cat pic, it must first assess if there is online
connectivity. This will work fine when there is or is not connectivity, but the app will hang during
times of Lie-Fi. (Example: the app attempts to fetch the page from the network, and if that fails,
the app shows some cached content.)

In an offline first approach, the app is designed with worst case scenarios in mind.  It will work
well offline, in the same way it will work well during Lie-Fi.  The app fires up w/ the assumption
that it's offline, then fills in where it can by connecting to the web. For example, the app 
first delivers the page's header and content from a cache on the device, then attempts to fetch
updated content from the network.

## Install Node
```
brew install node
```
<img src="./images/brew-install-node.png" width="500vw">

## Clone the Wittr Code
```
git clone https://github.com/jakearchibald/wittr
cd wittr
npm install
```

I got a ton of warnings and scary looking shame-on-you's!  Luckily, the course instructor
said to expect a bunch of this, and to (mostly) not worry about it.

<img src="./images/npm-install-uhoh.png" width="500vw">

## Run the Wittr App
```
# inside Wittr directory
npm run serve
```

<img src="./images/npm-run-serve.png" width="500vw">

As you can see, the config server is listening on port 8889, while another
server is running at port 8888 (the Jupyter port!).  You can change these ports if/when
necessary.

So, what is the difference in these two servers?  Just plug in 'localhost:888x' into the browser, and
you see that the config server allows you to test for different scenarios (e.g., perfect connectivity,
lie-fi, etc), while the server on 8888 actually serves the app.

(Btw, ctrl+c to exit.)

### Config server (8889)
<img src="./images/the-config-server.png" width="500vw">

### App server (8888)
<img src="./images/the-app-server.png" width="500vw">

This app starts as a horrible online-first app.  Throughout the course we will work to weed out
the bad parts and, ultimately, create an offline-first, progressive web app.

### Original Wittr Offline Experience
<img src="./images/original-wittr-offline-experience.png" width="500vw">


## Some code
This course will use JavaScript ES5, though you can use ES6 if you want.

Websocket!

## Introducing Service Worker!
Service Worker is a relatively new browser feature that lets web developers overcome network
connectivity issues. It enables a progressive, offline-first approach.

## Some References Recommended in the Forums (or links therein)
* Udacity: [Javascript Promises](https://www.udacity.com/course/javascript-promises--ud898)
* Eloquent JavaScript: [Ch17: HTTP](http://eloquentjavascript.net/17_http.html)
* Mozilla: [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* Google: [Caching Files with Service Worker](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)
* [http://offlinefirst.org/](http://offlinefirst.org/)
* [https://www.promisejs.org/](https://www.promisejs.org/)


