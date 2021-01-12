const express = require('express')
const router = express.Router()
const Transaction = require('../models/TransactionModel')


router.get(`/sanity`, (req, res) => {
    res.send('Route works')
})

router.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find({})
        res.send(transactions)
    } catch (err) {
        res.send(err.message)
    }
})

router.post('/transaction', async (req, res) => {
    try {
    const transaction = new Transaction({ ...req.body })
    await transaction.save()
    res.end()
} catch (err) {
    res.end()
}
})

router.delete('/transaction/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Transaction.findOneAndDelete({ _id: id })
        res.end()
    } catch (err) {
        res.send(err)
    }
})

module.exports = router