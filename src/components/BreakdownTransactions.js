import React, { Component } from 'react'
import Transaction from './Transaction'
import Table_Headings from './Table_Headings'
import '../styles/transactions.css'

class BreakdownTransactions extends Component {

    render() {
        const transactions = this.props.transactions
        const category = this.props.category
        return (
            <div id="transactions-page"> 
            <div className="category-name" key={category} onClick={()=>this.props.toggle(category)}>{category} : {this.props.getTotal(transactions)}
                {this.props.show && <Table_Headings />}
                <div id="transactions-container">
                    {this.props.show
                        && transactions.map(t => <Transaction transaction={t} deleteTransaction={this.props.deleteTransaction} key={t._id} />)}
                </div>
               </div> 
            </div>
        )
    }
}

export default BreakdownTransactions;