var models = require('../models');
const port = process.env.PORT || 3004

module.exports = {
    
  product: {
    get: (req, res) => {
      models.product.get(req, (err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.set({ 'Access-Control-Allow-Origin': '*' }).send(results);
      });
    }
  },

  image: {
    get: (req, res) => {
      models.image.get(req, (err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.set({ 'Access-Control-Allow-Origin': '*' }).send(results);
      });
    }
  },
    
  recommendation: {
    get: (req, res) => {
      models.recommendation.get((err, results) => {
        if (err) {
          res.status(500).send(err);
        }
        res.set({ 'Access-Control-Allow-Origin': '*' }).send(results);
      })
    }
  },

  heart: {
    get: (req, res) => {
      models.heart.get((err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.set({ 'Access-Control-Allow-Origin': '*' }).send(results);
      });
    }
  },
    
  add_heart: {
    post: (req, res) => {
      models.add_heart.post(req, (err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.set({ 'Access-Control-Allow-Origin': '*' }).send(results);
      });
    }
  },

  remove_heart: {
    post: (req, res) => {
      models.remove_heart.post(req, (err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.set({ 'Access-Control-Allow-Origin': '*' }).send(results);
      });
    }
  }
};
