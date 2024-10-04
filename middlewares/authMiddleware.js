const admin = {
    username: 'admin',
    password: 'admin123',
};

function adminAuth(req, res, next) {
    const { username, password } = req.headers;
    if (username === admin.username && password === admin.password) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Invalid Admin Credentials' });
    }
}

module.exports = adminAuth;
