import React, { Component } from 'react'
import BreakdownTransactions from './BreakdownTransactions'

import '../styles/transactions.css'

class Breakdown extends Component {
    constructor() {
        super()
        this.state = {
            show: {}
        }
    }

    toggle = (c) => {
        let tempShow = {...this.state.show}
        tempShow[c] = !this.state.show[c]
        this.setState({ show: tempShow })
}
    componentDidMount = async () => {
        await this.props.updateTransactionsFromDB()
        let tempShow = {}
        this.props.categories && this.props.categories.map(c=> tempShow[c] = false)
        this.setState({ show: tempShow })
    }

    render() {
        const transactions = this.props.transactions
        const categories = this.props.categories.sort()

        return (
            <div id="breakdown-container">
                {transactions && categories.map(c =>
                
                    <div className="category-name" key={c} onClick={()=>this.toggle(c)}>
                        { <BreakdownTransactions
                                category = {c}
                                transactions={transactions.filter(t => t.category === c)}
                                updateTransactionsFromDB={this.props.updateTransactionsFromDB}
                                deleteTransaction={this.props.deleteTransaction}
                                getTotal={this.props.getTotal}
                                toggle={this.toggle}
                                show={this.state.show[c]}
                                key={c} />
                        }
                    </div>)}
            </div>
     
     )
    }
}

export default Breakdown;