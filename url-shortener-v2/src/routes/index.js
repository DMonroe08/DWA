module.exports = (express) => {
  const router = express.Router();
  router.get('/status',  (req, res) => {
    res.json({Working: 'Yes',})
  });

  //routes
  router.use('/api',  require('./api/user')(express));
  router.use('/api',  require('./api/url')(express));

  return router;
}
