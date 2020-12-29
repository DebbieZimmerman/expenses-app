import React, { Component } from 'react'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import moment from 'moment';
moment().format();
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
                <span className="date">{moment(transaction.date).format('L')}</span>
                <button id={transaction._id} className="delete" onClick={this.deleteTransaction}><DeleteSweepIcon /></button>
            </div>
        )
    }
}

export default Transaction;