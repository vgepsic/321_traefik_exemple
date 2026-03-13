
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/nodeapp/hello', async (req, res) => {
    try {
        const response = await axios.get(process.env.FASTAPI_URL);
        res.json({
            fromNode: 'Hello from Node.js',
            fromFastAPI: response.data
        });
    } catch (err) {
        res.status(500).send('Error contacting FastAPI');
    }
});

app.listen(port, '0.0.0.0' , () => {

  console.log(`Node app listening on port ${port}`);
});

