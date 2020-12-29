import React, { Component } from 'react'
import Transactions from './Transactions'

import '../styles/transactions.css'

class Breakdown extends Component {

    componentDidMount = async () => {
        await this.props.updateTransactionsFromDB()
    }

    render() {
        const transactions = this.props.transactions
        const categories = this.props.categories
        
        return (
            <div id="breakdown-container">
                {transactions && categories.map(c => 
                <div className="category-name">{c}
                    <Transactions transactions={transactions.filter(t => t.category === c)} updateTransactionsFromDB={this.props.updateTransactionsFromDB} deleteTransaction={this.props.deleteTransaction} getTotal={this.props.getTotal} /></div>)}
            </div>
        )
    }
}

export default Breakdown;