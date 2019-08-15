# lab3-async

**Asynchronous code**

The code is using using callbacks and promises to read and alter a json files content. In the callback function, it is sending the file and an external callback which gives access to the file string from line 14-24. In the case of no error, the file string is manipulated and sent back via the fs.writeFile function. When implemented with promises the process is similar, where the .then is acting as the "else" and reading and manipulating the data.  