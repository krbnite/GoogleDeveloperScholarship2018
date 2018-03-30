I couldn't work on my Udacity stuff b/c I couldn't get the web app to run... Every time, in any branch, that I ran "npm run serve" I got the above error.

I removed the wittr project and re-cloned it multiple times, restarted Terminal, restarted my computer, uninstalled/reinstalled node...

Fact is, somehow an old version of the app was hanging on ports 8888 and 8889

```bash
sudo lsof -i -P -n | grep LISTEN.
kill PID
#Done.
```
