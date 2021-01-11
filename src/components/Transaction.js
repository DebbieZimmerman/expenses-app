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
            <div className="transaction-container" style={{backgroundColor: transaction.amount > 0 ? 'rgb(60, 235, 112)' : 'rgb(255, 55, 55)'}}>
                <span className="category">{transaction.category}</span>
                <span className="vendor">{transaction.vendor}</span>
                <span className="transaction">{transaction.amount}</span>
                <span className="date">{moment(transaction.date).format('L')}</span>
                <span id={transaction._id} className="delete" onClick={this.deleteTransaction}><DeleteSweepIcon /></span>
            </div>
        )
    }
}

export default Transaction;