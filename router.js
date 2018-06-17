module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send({ hi: 'now over here' });
  });
};
