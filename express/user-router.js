const express = require ('express');
// const { Router } = require ('express');
// const mongoose =require ('mongoose');
const router = express.Router();


// let users = [{
//         name: 'Jhon'}, {
//         name: Alex
//     }, {
//         name: 'Ivan'
//     }
// ] 


// const userSchema= new mongoose.Schema( {
//     name: String,
//     data: String,
//     email: String,
//     phone: String,
//     passport: String,
//     passData: String,
//     passIssuedBy: String,
//     passIssuedByCode: String,
//     permissSerial: String,
//     permissDate:String
// })

// const User = mongoose.model ('Users', userSchema);



router.get('/', (req,res)=>{
    // const data =  User.find();
    res.send(users);
});



// router.get('/', async(req,res)=>{
//     const data = await User.find();
//     res.send(data);
// });



router.get('/users/:id',(req,res)=> {
    const id=req.params.id;
    const sorting=req.query.sorting;
    res.send (`id user ${id} with ${sorting}`);
    });

    router.post('/', (req, res)=>{
        // const userData = req.body;
        // const newUser = new User (userData)
        // await newUser.save();
        // res.send ('yous has beeen saved')
        
        users=users.concat(req.body)
        res.send(users);
    }) ;


    // router.post('/', async(req, res)=>{
    //     const userData = req.body;
    //     const newUser = new User (userData)
    //     await newUser.save();
    //     res.send ('yous has beeen saved')
        
    //     // users=users.concat(req.body)
    //     // res.send(users);
    // }) ;


    module.exports = {
        usersRouter:router
    }

// const usersRouter = router;

//     module.exports =  usersRouter  ;