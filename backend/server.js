require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const reservationRoutes = require('./routes/reservation')


// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/reservations', reservationRoutes)

// connect to the database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('Connected to Mongodb and listening on port', process.env.PORT);
        })

    })
    .catch((error) => {
        console.log(error)
    })

