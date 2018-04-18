
"Responsive design is an art, not a science."

The approach: think mobile first.

Examples of responsive websites:
* https://www.maritimeaquarium.org/
* https://outrider.org/nuclear-weapons/interactive/bomb-blast/

## Pan, zoom, touch, ick
In this video, the instructors poke fun at the Google Finance website, saying that is 
horrible and difficult to use on mobile -- and also on a SmartTV!  Perhaps the SmartTV
is not so important, but if your site doesn't work beautifully on mobile, then you've
lost most of your visitors.

## Emulators, Simulators, and Real Devices
Question: How do test your website on the countless differently-sized devices out
there on the market?

Chrome has an emulator built in, but there also exist simulators/emulators elsewhere... e.g., 
you can test different browsers @ https://www.browserstack.com/.

Google Developers: [Emulate and Test Other Browsers](https://developers.google.com/web/tools/chrome-devtools/device-mode/testing-other-browsers)
>* When you don’t have a particular device, or want to do a spot check on something, the best option is to emulate the device right 
inside your browser.
>* Device emulators and simulators let you mimic your development site on a range of devices from your workstation.
>* Cloud-based emulators let you automate unit tests for your site across different platforms.

The above page lists a number of simulators, emulators, etc, e.g.:

Firefox has a [Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode)
to test the responsiveness of your website.
> Firefox has a responsive design view that encourages you to stop thinking in terms of specific devices 
> and instead explore how your design changes at common screen sizes or your own size by dragging the edges.

## Playing w/ Chrome's Emulator
* go to:  https://developers.google.com/web/fundamentals/
* open up JS editor (cmd+alt+j)
* click on emulator icon (looks like 1-2 cell phones, depending on version)
* look at site on Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5/SE, iPhone 6/7/8, and more!
  - emulator automagically sets the viewport size, device pixel ratio, and user agent
  
## Hooking up an Android 
* need an Android device
* a USB cable
* development machine (e.g., MacBook Pro)

1. Turn on developer mode on Android device
  - for many devices: go to Settings > About Device, then click on BuildDeveloper 7x (seriously!)
2. Turn on USB debugging
  - for many devices: usually located in Developer Options
3. Make sure to have Chrome Canary installed on laptop, and Chrome beta on Android
4. On development machine, open Chrome and go to:  chrome://inspect
  - Make sure site you want to test is open on your mobile device
  - Then connect your laptop to mobile device via USB and confirm you want to allow USB debugging

* Remote Debugging: https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=en

## Hooking up an iPhone
Use the [iOS WebKit Debug Proxy](https://github.com/google/ios-webkit-debug-proxy) (apparently,
it's a little harder to set up than Android).









  
  
  
