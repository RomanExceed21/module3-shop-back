const Task = require('../../db/models/spend/index');

module.exports.getAllSpends = (req, res, next) => {
  Spend.find().then(result => {
    res.send({data: result});
  });
};

module.exports.createNewSpend =  (req, res, next) => {
  const { body } = req;
  if(!(body.hasOwnProperty('shop')) || !(body.hasOwnProperty('spend')) || !(body.hasOwnProperty('date'))) {
    res.status(422).send('Parameters shop or spend or date were lost!!'); 
  } else if (!body.shop || !body.spend || !body.date) {
    res.status(422).send('Error! One of input parameters is empty!!');
  } else {
    const spend = new Spend(body);
    spend.save().then(result => {
      Spend.find().then(result => {
        res.send({data: result});
      });
    });
  };  
};

module.exports.changeInfo = (req, res, next) => {
  const { _id, shop, spend, date } = req.body;
  if (_id && (shop || spend || date)) {
    Spend.updateOne({_id: req.body._id}, req.body).then(result => {
      Spend.find().then(result => {
        res.send({data: result});
      });
    });
  } else {
    res.status(422).send('Check out input fields, maybe one of them is empty!!');
  };  
};

module.exports.deleteOneSpend = (req, res, next) => {
  if (!req.query._id) {
    res.status(422).send('Missed id! You need put id!!');
  } else {
    Spend.deleteOne({_id: req.query._id}).then(result => {
      Spend.find().then(result => {
        res.send({data: result});
      });    
    }); 
  };
};