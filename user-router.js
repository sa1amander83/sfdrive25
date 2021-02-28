import { Router } from 'express';
const router = Router();


router.get('/',(req,res)=>{

    res.send('here users list');
});

router.get('/users/:id',(req,res)=> {
    const id=req.params.id;
    const sorting=req.query.sorting;
    res.send (`id user ${id} with ${sorting}`);
    });
    router.post('/',(req, res)=>{
        users=users.concat(req.body)
        res.send(users);
    }) ;

    export const usersRouter = router;