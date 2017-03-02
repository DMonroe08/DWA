module.exports = (express) => {
  const router = express.Router();

  router.get('/users',  (req, res) => {
    res.json({Working: 'Yes',})
  });

  

  return router;
}
