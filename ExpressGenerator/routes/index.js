var express = require('express');
var router = express.Router();
/*router.get('/',function(req,res){
    res.render('index',{ tittle: 'Express', myName:"Mahitha"});
});*/
router.get('/', function(req,res,next){
    let data = [{
        name: "Mahitha",
        age:21,
        salary: 1000000
    },
    {
        name:"Rishika",
        age:20,
        salary:20000
    }];
    res.render('index',{ tittle: 'Express', myName:"Mahitha", users:data});
})
module.exports = router;