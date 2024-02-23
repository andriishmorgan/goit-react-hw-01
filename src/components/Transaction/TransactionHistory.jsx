import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (

        <table className={css.tableTransaction}>
            <thead >
                <tr >
                    <th className={css.headerTransaction}>Type</th>
                    <th className={css.headerTransaction}>Amount</th>
                    <th className={css.headerTransaction}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map (({id, type, amount,currency}) => (
                <tr key={id} className={css.transactionRow}>
                    <td className={css.rowCell}>{type}</td>
                    <td className={css.rowCell}>{amount}</td>
                    <td className={css.rowCell}>{currency}</td>
            </tr>
))}
            </tbody>
        </table>
    )
}
