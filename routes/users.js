var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  console.log(req.body)
  if(req.body.user === 'Bana'){
    res.json({
      estatus : "ok",
      message : "En la buena " + req.body.message
    })
  }
  else {
    res.json({
      estatus: "fail"
    })
  }
});

module.exports = router;
