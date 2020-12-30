import React, { Component } from 'react'
import Transactions from './Transactions'

import '../styles/transactions.css'

class Breakdown extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    toggle = () => this.setState({ show: !this.state.show })

    componentDidMount = async () => {
        await this.props.updateTransactionsFromDB()
    }

    render() {
        const transactions = this.props.transactions
        const categories = this.props.categories

        return (
            <div id="breakdown-container">
                {transactions && categories.map(c =>
                    <div className="category-name" onClick={this.toggle}>{c}
                        {this.state.show
                            && <Transactions
                                transactions={transactions.filter(t => t.category === c)}
                                updateTransactionsFromDB={this.props.updateTransactionsFromDB}
                                deleteTransaction={this.props.deleteTransaction}
                                getTotal={this.props.getTotal}
                                key={c} />
                        }
                    </div>)}
            </div>
        )
    }
}

export default Breakdown;