const express = require ('express');
const router = express.Router();



router.get('/', (req,res)=>{

    res.send(users);
});


router.get('/users/:id',(req,res)=> {
    const id=req.params.id;
    const sorting=req.query.sorting;
    res.send (`id user ${id} with ${sorting}`);
    });

    router.post('/', (req, res)=>{

        
        users=users.concat(req.body)
        res.send(users);
    }) ;


    module.exports = {
        usersRouter:router
    }
