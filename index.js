const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())

const articleRouter = require('./routes/router')

app.use("/api/v1/articels", articleRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))