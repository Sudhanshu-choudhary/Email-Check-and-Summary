import mongoose from 'mongoose'

const dbConnect = async()=> {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log('Successful Connection with MONGO DB')
  } catch (error) {
    console.log('MONGO DB ERROR')
    process.exit(1)
  }
}

export default dbConnect