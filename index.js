
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./Routes/Routes')




const PORT = 4000
const FSserver = express()






// FSserver.use(Passport)

FSserver.use(cors())



// Parse JSON request bodies
// FSserver.use(express.json())
FSserver.use(express.json()); // Parse JSON bodies







FSserver.use(router)

FSserver.use('/uploads',express.static('./uploads'))



FSserver.listen(PORT, () => {
   console.log(`server running at ${PORT}`);
})


FSserver.get('/', (req, res) => {
   res.status(200).send("<h1> get request send</h1>")
})