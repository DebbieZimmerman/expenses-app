const express = require('express')
// const axios = require('axios').default
const router = express.Router()
const Transaction = require('../models/TransactionModel')

// const env = require('dotenv').config()

router.get(`/sanity`, (req, res) => {
    res.send('Route works')
})

router.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find({})
        console.log('transactions', transactions)
        res.send(transactions)
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
})

router.post('/transaction', async (req, res) => {
    console.log('trying to post transaction to db')
    const transaction = new Transaction({ ...req.body })
    await transaction.save()
    console.log(transaction)
    res.end()
})

router.delete('/transaction/:id', async (req, res) => {
    const id = req.params.id
    await Transaction.findOneAndDelete({ _id: id })
    res.end()
})

module.exports = router