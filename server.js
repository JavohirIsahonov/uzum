// importent
const express = require("express")
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors')
const errorHandle = require('./middlewares/error')
const { swaggerUi, swaggerDocs } = require('./swager');
const path = require('path')
// App fail
const app = express();
// cors
app.use(cors()) 
// .env
dotenv.config()
if(process.env.NODE_ENV ==="developer"){
    app.use(morgan("dev"))
}
// Body parser 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/uploads', express.static(path.join(__dirname,'./public/upload')))
// MongoDb server
connectDB()
// Routes
app.use("/api/v1/auth/", require('./routes/auth.route'))  
app.use('/api/v1/cart/', require('./routes/cart.route'))
// Error
app.use(errorHandle)
// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) {
        console.log(`Xatolik serverga ${err}`.bgRed)
    }
    console.log(`Eshityapman baqirma ${PORT}`.bgBlue)
})