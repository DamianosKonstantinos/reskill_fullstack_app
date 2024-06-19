const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors(`origin: 'http://localhost:4000'`));

//DATA FOR THE HOMEPAGE
//REGEX TO COVER BOTH URLS WITH "/","/posts" OR "/home" BUT NOT "/posts/...."
app.get(/\/(posts)?(home)?$/, async (req,res) => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                res.send(response.data.map(item=>item));
            }
        )
});

//PHOTOS FOR THE HOMEPAGE
app.get('/photos', async (req,res) => {
    await axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            res.send(response.data.map(item=>item));
        }
    )
});

//PHOTO FOR A SINGLE POST
app.get('/photos/:id', async (req,res) => {
    await axios.get(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`)
        .then(response => {
            res.send(response.data);
        }
    )
})

//DATA FOR THE SINGLE PAGE
app.get('/posts/:id', async (req,res) => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`) //GET ID PARAMETER OF THE REQUEST URL
        .then(response => {
            res.send(response.data); //DOESNT NEED MAP (ITS A SINGLE ENTRY)
        }
        )
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});