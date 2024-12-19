import e from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import dbConnect from './db/dbConnect.js'
import authRoutes from './routes/auth.routes.js'

const app = e()
dotenv.config()

app.use(cors({ origin: '*'}))
app.use(e.json({limit: "16kb"}))
app.use(e.urlencoded())
app.use(e.static("public"))
app.use(cookieParser())

//Routes
app.get('/api/auth', authRoutes)

dbConnect()
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running at port : ${process.env.PORT}`);
})