export const ensureAuthenticated = (req, res, next) => {
	if (!req.isAuthenticated()) return res.status(401).send('Unauthorized!');

	next();
};

