import User from '../models/User.js';
import bcrypt from 'bcrypt';
import passport from 'passport';
import LocalStrategy from 'passport-local/lib/strategy.js';

export default function passportConfig() {
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'firstCred',
				passwordField: 'password',
			},
			async function verify(firstCred, password, done) {
				// TODO decide whether firstCred is username/email/phone. For now, we assume it is username

				let doc = await User.findOne({ username: firstCred });
				if (!doc)
					return done(null, false, {
						success: false,
						message: 'No users with the given username/email/phone number found!',
					});

				let isValid = await bcrypt.compare(password, doc.pwhash);
				return isValid
					? done(null, doc, { success: true, message: 'successfully logged in!' })
					: done(null, false, { success: false, message: 'Invalid password!' });
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser(async (userId, done) => {
		let user = await User.findById(userId);
		done(null, user);
	});
}
