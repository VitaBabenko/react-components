import PropTypes from "prop-types";
import { Table, NameTable, ItemTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <Table>
        <thead>
            <tr>
                <NameTable>Type</NameTable>
                <NameTable>Amount</NameTable>
                <NameTable>Currency</NameTable>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <tr key={id}>
                        <ItemTable>{type}</ItemTable>
                        <ItemTable>{amount}</ItemTable>
                        <ItemTable>{currency}</ItemTable>
                    </tr>
                )
            })}
        </tbody>
    </Table>
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}