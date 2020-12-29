import React, { Component } from 'react'
import Transaction from './Transaction'

import '../styles/transactions.css'

class Transactions extends Component {

    componentDidMount = async () => await this.props.updateTransactionsFromDB()

    render() {
        const transactions = this.props.transactions
        return (
            <div id="transactions-page">
                <div id="transactions-container">
                    {transactions.map(t => <Transaction transaction={t} deleteTransaction={this.props.deleteTransaction} key={t._id} />)}
                </div>
                {/* <div id="balance">Balance: {this.props.getTotal()}</div> */}
            </div>
        )
    }
}

export default Transactions;