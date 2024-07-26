const express = require('express');
const router = require('./router/router')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8181;

app.use(router)
app.use(express.json());

// Enable CORS for all routes
app.use(cors());
app.listen(PORT,'0.0.0.0',()=>{
    console.log('the app is running on the port 8181')
})