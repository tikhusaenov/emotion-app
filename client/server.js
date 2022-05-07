const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions ={
    origin:'https://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
