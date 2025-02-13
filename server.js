const express = require('express');
const app = express();
const dir = "public/";

app.use(express.static('public'));
app.use(express.json());

app.use('/', (req, res) => {
    console.log('Request URL: ' + req.url);
    //next(); // go to the next middleware for this route

    const filename = dir + req.url.slice( 1 );
    res.sendFile(filename);

})

app.listen(process.env.PORT || 3000);