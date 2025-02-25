const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./DB/db")
dotenv.config()
const port = process.env.PORT

const app = express()
app.use(express.json())


app.listen(port  , () => {
    connectDB()
    console.log(`Server is running on port ${port}`)
})