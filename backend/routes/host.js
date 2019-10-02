const express = require('express');
const router = express.Router();
const Host = require('../models/Host');
const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  Host.register(req.body, req.body.password)
    .then((host) => res.status(201).json({ host }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { host } = req;
  res.status(200).json({ host });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/event', isAuth, (req, res, next) => {
  Host.findById(req.host._id)
    .then((host) => res.status(200).json({ host }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;