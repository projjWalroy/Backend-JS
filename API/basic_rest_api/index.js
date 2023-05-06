const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let bloglist = [];

app.get('/blogs', (req, res)=> {
    return res.status(200).json({ // we get response object back with status() [builder pattern]
        data: bloglist,
        success: true,
    })
})

app.post('/blogs', (req, res)=> {
    
})

app.listen(PORT, ()=> {
    console.log("Server staterted on PORT", PORT);
});

/* Hot reloading: 
nodemon is a tool that helps develop Node.js based applications by automatically 
restarting the node application when file changes in the directory are detected.
*/

/*
we need body-parser(package) because of middlewire 
before we hit API we will hit this layer of logic
*/

