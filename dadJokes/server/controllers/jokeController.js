const router = require('express').Router();
const {JokeModel} = require("../models")

router.get('/', (req, res)=>res.send('PUNctual timing'));

router.get("/all", async (req, res)=>{
    try{
        const allJokes = await JokeModel.findAll();

        res.status(200).json(allJokes)
    } catch(err) {
        res.status(500).json({
            error: err,
        });
    }
});

router.post("/",  (req, res)=>{
    const{setup, punchline, cheesiness} = req.body;
    try{
        const Joke = JokeModel.create({
            setup,
            punchline,
            cheesiness,
        });
        res.status(201).json({ message: "Joke was created!", Joke,});
    } catch (err){
        res.status(500).json({ message: `Your joke sucked!: ${err}`
    });
    }
});

module.exports = router;