const express = require('express');
const authRoute = require('./auth.route');
const bookRoute = require('./book.route')
const bookmakRoute = require('./bookmark.route')

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/book',
    route: bookRoute,
  },
  {
    path: '/bookmark',
    route: bookmakRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
