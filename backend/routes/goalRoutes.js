const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'get hi'})
})
router.post('/', (req, res) => {
    res.status(200).json({message: 'post hi'})
})
router.put('/:id', (req, res) => {
    res.status(200).json({message:`update ${req.params.id}`})
})
router.delete('/:id',(req,res)=>{
    res.status(200).json({message:`delete ${req.params.id}`})
})

module.exports = router