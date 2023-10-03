import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors';

import AuthRoutes from './routes/authRoutes.js';
import passportConfig from './configs/passport.js';
import passport from 'passport';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
	cors({
		origin: process.env.FRONTEND_APP_BASE_URL,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DB_CONNECTION_URI,
			collectionName: 'sessions',
		}),
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 2, // 2 days
		},
	})
);

// * Setup passport
//
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', AuthRoutes);

app.use((err, req, res, next) => {
	console.log(err.message);
	res.send(err.message);
});

mongoose
	.connect(process.env.DB_CONNECTION_URI)
	.then(() => {
		console.log('DB connected');
		app.listen(PORT, () => {
			console.log(`App listening on port: ${PORT}`);
		});
	})
	.catch((err) => console.log(`DB Error: ${err.message}`));
