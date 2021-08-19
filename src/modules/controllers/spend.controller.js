const Task = require('../../db/models/spend/index');

module.exports.getAllSpends = (req, res, next) => {
  Spend.find().then(result => {
    res.send({data: result});
  });
};

module.exports.createNewSpend =  (req, res, next) => {
  const spend1 = new Spend(req.body);
  const {shop, spend, date} = req.body;
  if(!(req.body.hasOwnProperty('shop')) || !(req.body.hasOwnProperty('spend')) || !(req.body.hasOwnProperty('date'))) {
    res.send('Parameters shop or spend or date were lost!!'); 
  } else if (!shop || !spend || !date) {
    res.send('Error! One of input parameters is empty!!');
  } else {
    spend1.save().then(result => {
      Spend.find().then(result => {
        res.send({data: result});
      });
    });
  };  
};

module.exports.changeInfo = (req, res, next) => {
  const {_id, shop, spend, date} = req.body;
  if (_id && (shop || spend || date)) {
    Spend.updateOne({_id: req.body._id}, req.body).then(result => {
      Spend.find().then(result => {
        res.send({data: result});
      });
    });
  } else {
    res.send('Check out input fields, maybe one of them is empty!!');
  };  
};

module.exports.deleteOneSpend = (req, res, next) => {
  if (!req.query._id) {
    res.send('Missed id! You need put id!!');
  } else {
    Spend.deleteOne({_id: req.query._id}).then(result => {
      Spend.find().then(result => {
        res.send({data: result});
      });    
    }); 
  };
};