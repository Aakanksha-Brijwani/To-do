'use strict';

const express = require('express');
const path = require('path');
const publicDirPath = path.join(__dirname,'../app');

//Constants
const PORT =8080;
const HOST = '0.0.0.0';

//App
const app =express();
app.use(express.static(publicDirPath));
app.get('/',(req, res)=>{
    res.sendFile("index.html");
})
app.listen(PORT, HOST, () => {
   console.log(`Running on http://${HOST}:${PORT}`);
});