const express=require('express');
const router=express.Router();


const {getId}=require('../controllers/id_controller');


router.post('/visualizar',getId);


module.exports = router
