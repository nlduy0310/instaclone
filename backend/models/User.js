import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
		unique: true,
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

export default User = mongoose.Model('User', userSchema);
