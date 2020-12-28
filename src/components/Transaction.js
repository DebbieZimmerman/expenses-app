import React, { Component } from 'react'

// import '../styles/transaction.css'

class Transaction extends Component {

    deleteTransaction= ({target}) => this.props.deleteTransaction(target.id)

    render () {
        const transaction = this.props.transaction
        return(
            <div className="transaction-container">
                <span className="transaction">{transaction.amount}</span>
                <span className="vendor">{transaction.vendor}</span>
                <span className="category">{transaction.category}</span>
                {/* <span className="date">{transaction.date}</span> */}
                <button id={transaction._id} className="delete" onClick={this.deleteTransaction}>-</button>
            </div>
        )
    }
}

export default Transaction;