import React, { Component } from 'react'

import '../styles/transactions.css'

class Table_Headings extends Component {

    render() {
        return (
                    <div className="transactions-categories">
                        <span className="category">Category</span>
                        <span className="vendor">Vendor</span>
                        <span className="transaction">Amount</span>
                        <span className="date">Date</span>
                        <span className="delete">Delete</span>
                    </div>
        )
    }
}

export default Table_Headings;