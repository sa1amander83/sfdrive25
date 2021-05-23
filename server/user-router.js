const express = require ('express');
const { Router } = require ('express');
const mongoose =require ('mongoose');
const router = express.Router();
const app = express();
let user = require('./schema')




const addNEWUSER = new  user({name:'ivan', surname: 'Ivanov', age:20 })
addNEWUSER.save().then( ()=> console.log('all fine'))



router.route('/create').post((req, res, next) => {
    user.create(req.body, (error, userRegData) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/').get((req, res) => {
    user.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;

//
// function onSuccess(response) {
//     let array = response;
//     let arrayLength = Object.keys(array).length
//     console.log(arrayLength)
//     for(let i = 0; i <= arrayLength; i++) {
//         let name = array.data[i].name;
//         let desc = array.data[i].description;
//         let url = array.data[i].html_url;
//         console.log( name + " " + desc + " " + url);
//
//         assignDataValue(name, desc, url)
//
//     }
// }
//
//
// function assignDataValue(name, desc, url) {
//
//     var upData = new Data()
//     upData.name = name;
//     upData.description = desc;
//     upData.url = url;
//
//     upData.save();
// }
//
// router.get('/', async (req,res)=>{
//     // const data =  User.find();
//     res.send(users);
// });
//
//
//
// // router.get('/', async(req,res)=>{
// //     const data = await User.find();
// //     res.send(data);
// // });
//
//
//
// router.get('/users/:id',(req,res)=> {
//     const id=req.params.id;
//     const sorting=req.query.sorting;
//     res.send (`id user ${id} with ${sorting}`);
//     });
//
//     router.post('/', async (req, res)=>{
//         const userData = req.body;
//         const newUser = new User (userData)
//         await newUser.save();
//         res.send ('yous has beeen saved')
//
//         users=users.concat(req.body)
//         res.send(users);
//     }) ;
//
//
//     router.post('/', async(req, res)=>{
//         const userData = req.body;
//         const newUser = new User (userData)
//         await newUser.save();
//         res.send ('yous has beeen saved')
//
//     //     // users=users.concat(req.body)
//     //     // res.send(users);
//     }) ;
//
//
//     module.exports = {
//         usersRouter:router
//     }
//
// // const usersRouter = router;
//
// //     module.exports =  usersRouter  ;