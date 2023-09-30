import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
		unique: true,
	},
	fullname: {
		type: String,
		require: true,
	},
	phone: {
		type: String,
	},
	email: {
		type: String,
	},
	pwhash: {
		type: String,
		require: true,
	},
});

const User = mongoose.model('User', userSchema);

export default User;
