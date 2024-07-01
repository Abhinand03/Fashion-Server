
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./Routes/Routes')




const PORT = 4000
const FSserver = express()







FSserver.use(cors())




FSserver.use(express.json()); 







FSserver.use(router)

FSserver.use('/uploads',express.static('./uploads'))



FSserver.listen(PORT, () => {
   console.log(`server running at ${PORT}`);
})


FSserver.get('/', (req, res) => {
   res.status(200).send("<h1> get request send</h1>")
})