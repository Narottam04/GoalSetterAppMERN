const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors');  
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const port = process.env.PORT || 5000
const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res) => res.send(`Server is running :)`))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port,() => console.log(`server started at on port ${port}`))