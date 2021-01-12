import React, { Component } from 'react'
import Transaction from './Transaction'
import Table_Headings from './Table_Headings'
import '../styles/transactions.css'

class Transactions extends Component {

    componentDidMount = async () => await this.props.updateTransactionsFromDB()

    render() {
        const transactions = this.props.transactions
        return (
            <div id="transactions-page">
                {this.props.show && <Table_Headings />}
                <div id="transactions-container">
                    {this.props.show
                        && transactions.map(t => <Transaction transaction={t} deleteTransaction={this.props.deleteTransaction} key={t._id} />)}
                </div>
                <div className="balance">Balance: {this.props.getTotal(transactions)}</div>
            </div>
        )
    }
}

export default Transactions;