const express = require('express');
const router = express.Router();

const {
  getAllSpends,
  createNewSpend,
  changeInfo,
  deleteOneSpend
} = require('../controllers/spend.controller');

router.get('/mySpends', getAllSpends);
router.post('/createSpend', createNewSpend);
router.patch('/updateSpend', changeInfo);
router.delete('/deleteSpend', deleteOneSpend);

module.exports = router;