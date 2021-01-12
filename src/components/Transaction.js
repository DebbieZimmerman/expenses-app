import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
moment().format();

class Transaction extends Component {

    deleteTransaction= () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }
    
    render () {
        const transaction = this.props.transaction
        return(
            <div className="transaction-container" style={{backgroundColor: transaction.amount > 0 ? 'rgb(60, 235, 112)' : 'rgb(255, 55, 55)'}}>
                <span className="category">{transaction.category}</span>
                <span className="vendor">{transaction.vendor}</span>
                <span className="transaction">{transaction.amount}</span>
                <span className="date">{moment(transaction.date).format('DD/MM/YY')}</span>
                <span id={transaction._id} className="delete" onClick={this.deleteTransaction}><DeleteIcon /></span>
            </div>
        )
    }
}

export default Transaction;