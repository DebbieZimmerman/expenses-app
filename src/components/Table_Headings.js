import React, { Component } from 'react'

import '../styles/transactions.css'

class Table_Headings extends Component {

    render() {
        return (
                    <div className="transactions-categories">
                        <span className="category">Category</span>
                        <span className="category">Vendor</span>
                        <span className="category">Amount</span>
                        <span className="category">Date</span>
                        <span className="category">Delete</span>
                    </div>
        )
    }
}

export default Table_Headings;