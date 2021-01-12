import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/operations.css'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: "",
            date: ""
        }
    }

    updateInput = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    validateInput = () => this.state.amount && this.state.vendor && this.state.category && this.state.date
        
    handleClick = (type) => {
        if (this.validateInput()) {
            const transaction = this.state
            this.props.addTransaction(transaction, type)
            this.clearInput()
        } else {
            alert('Please enter all fields')
        }
    }

    clearInput = () => {
        this.setState({ amount: 0, vendor: "", category: "", date: "" })
    }

    render() {
        return (
            <div id="input-container">
                <div className="input">Amount:<input id="amount" type="number" value={this.state.amount} onChange={this.updateInput}></input></div>
                <div className="input">Vendor:<input id="vendor" type="text" value={this.state.vendor} onChange={this.updateInput}></input></div>
                <div className="input">Category:<input id="category" type="text" value={this.state.category} onChange={this.updateInput}></input></div>
                <div className="input">Date:<input id="date" type="date" value={this.state.date} onChange={this.updateInput}></input></div>
                <div className="input">

                    <button id="deposit" onClick={() => this.handleClick("deposit")}>
                        <Link to="/transactions" style={{ textDecoration: 'none' }}>
                            Deposit
                                </Link>
                    </button>
                    <button id="withdrawal" onClick={() => this.handleClick("withdrawal")}>
                        <Link to="/transactions" style={{ textDecoration: 'none' }}>
                            Withdrawal
                            </Link>
                    </button>

                </div>
            </div>
        )
    }
}

export default Operations;