import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../styles/operations.css'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: "",
            date: ""
        }
    }

    updateInput = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleClick = (type) => {
        const transaction = this.state
        this.props.addTransaction(transaction, type)
        this.clearInput()
    }

    clearInput = () => {
        this.setState({ amount: "", vendor: "", category: "", date: "" })
    }

    render() {
        return (
            <div id="input-container">
                <div className="input">Amount:<input id="amount" type="text" value={this.state.amount} onChange={this.updateInput}></input></div>
                <div className="input">Vendor:<input id="vendor" type="text" value={this.state.vendor} onChange={this.updateInput}></input></div>
                <div className="input">Category:<input id="category" type="text" value={this.state.category} onChange={this.updateInput}></input></div>
                <div className="input">Date:<input id="date" type="date" value={this.state.date} onChange={this.updateInput}></input></div>
                <div className="input">
                    <Link to="/transactions" style={{ textDecoration: 'none' }}>
                        <button id="deposit" onClick={() => this.handleClick("deposit")}>Deposit</button>
                    </Link>
                    <Link to="/transactions" style={{ textDecoration: 'none' }}>
                        <button id="withdrawal" onClick={() => this.handleClick("withdrawal")}>Withdrawal</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Operations;