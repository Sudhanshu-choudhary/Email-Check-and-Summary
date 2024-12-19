import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, default: '' }, //URL of the user's profile picture
  refreshToken: { type: String, required: true } //OAuth refresh token
});

userSchema.methods.updateUser = async (refreshToken, profile)=> {
  const { email, name, picture } = profile
  let user = await User.findOne({ email })

  if(user){
    user.refreshToken = refreshToken
    await user.save()
  }
  else{
    user = new User({ email, name, picture, refreshToken })
    await user.save()
  }
  return user
}

const User = mongoose.model('User', userSchema);

export default User
