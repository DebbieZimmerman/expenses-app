import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Transactions from './components/Transactions'
import Operations from './components/Operations'
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
      const tempTransactions = (await axios.get(`http://localhost:4200/transactions`)).data
      console.log(tempTransactions)
      let categories = this.tempTransactions.map(t => t.categories)
      this.setState({ transactions: tempTransactions })
      
    } catch (err) {
      console.log(err.message)
    }
  }

  getTotal = (type) => {
    return this.state.transactions.filter(t => t[category.toLowerCase()])
    .map(t => t.amount)
    .reduce()
  }

  addTransaction = async (transaction, type) => {
    if (type === "withdrawal" && transaction.amount > 0) {
      transaction.amount = transaction.amount * -1
    }
    console.log(transaction)
    await axios.post(`http://localhost:4200/transaction`, transaction)
    await this.updateTransactionsFromDB()
  }

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:4200/transaction/${id}`)
    await this.updateTransactionsFromDB()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="navbar">
            <span id="logo" className="nav-item">Finance Manager</span>
            <span className="nav-item"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></span>
            <span className="nav-item"><Link to="/transactions" style={{ textDecoration: 'none' }}>Transactions</Link></span>
          </div>
          <Route path="/" exact render={() => <Operations addTransaction={this.addTransaction} />} />
          <Route path="/transactions" exact render={() => <Transactions transactions={this.state.transactions} updateTransactionsFromDB={this.updateTransactionsFromDB} deleteTransaction={this.deleteTransaction} />} />
        </div>
      </Router>
    );
  }
}

export default App;
