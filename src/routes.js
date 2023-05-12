const router = require('express').Router();
const {getRandomNumber,  countCharacters} = require("./mainbusinesslogic");


router.get('/api/random', (req, res) => {
    const {min, max} = req.query;
    const randomNumber = getRandomNumber(parseInt(min), parseInt(max));
    res.status(200).json({randomNumber, min, max});
});




router.get('/api/count', (req, res) => {
    const {str} = req.query;
    const characters = countCharacters(str);
    res.status(200).json({characters, str});
});





module.exports = router;