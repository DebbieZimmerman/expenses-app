import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Breakdown from './components/Breakdown'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      categories: []
    }
  }

  updateTransactionsFromDB = async () => {
    try {
      const { data: tempTransactions } = await axios.get(`http://localhost:4200/transactions`)
      this.setState({ transactions: tempTransactions })
      this.updateCategories()
    } catch (err) {
      console.log(err.message)
    }
  }

  updateCategories = () => {
    let tempCategories = this.state.transactions.length && [...new Set(this.state.transactions.map(t => t.category))]
    this.setState({ categories: tempCategories })
  }

  reducer = (accumulator, currentValue) => accumulator + currentValue

  getTotal = (transactions) => {
    return transactions.length && transactions.map(t => t.amount).reduce(this.reducer)
  }

  addTransaction = async (transaction, type) => {
    if (type === "withdrawal" && transaction.amount > 0) {
      transaction.amount = transaction.amount * -1
    }
    await axios.post(`http://localhost:4200/transaction`, transaction)
    this.updateTransactionsFromDB()
  }

  deleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:4200/transaction/${id}`)
      this.updateTransactionsFromDB()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="navbar">
            <span id="logo" className="nav-item">Finance Manager</span>
            <span className="nav-item"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></span>
            <span className="nav-item"><Link to="/transactions" style={{ textDecoration: 'none' }}>Transactions</Link></span>
            <span className="nav-item"><Link to="/breakdown" style={{ textDecoration: 'none' }}>Breakdown</Link> </span>
          </div>
          <Route path="/" exact render={() => <Operations addTransaction={this.addTransaction} />} />
          <Route path="/transactions" exact render={() => <Transactions transactions={this.state.transactions} updateTransactionsFromDB={this.updateTransactionsFromDB} deleteTransaction={this.deleteTransaction} getTotal={this.getTotal} show={true} />} />
          <Route path="/breakdown" exact render={() => <Breakdown updateTransactionsFromDB={this.updateTransactionsFromDB} transactions={this.state.transactions} categories={this.state.categories} deleteTransaction={this.deleteTransaction} getTotal={this.getTotal} />} />
        </div>
      </Router>
    );
  }
}

export default App;
