var express = require('express');
var router = express.Router();
const cont = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/all', cont.user.getUser)

module.exports = router;
