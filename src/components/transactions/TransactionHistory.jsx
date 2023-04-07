import PropTypes from "prop-types";
import { Table, NameTable, TableLine, ItemTable } from './TransactionHistory.styled';

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
            {items.map(({ id, type, amount, currency }, index) => {
                return (
                    <TableLine key={id} color={index % 2 ? '#EEEEEE' : 'white'}>
                        <ItemTable>{type}</ItemTable>
                        <ItemTable>{amount}</ItemTable>
                        <ItemTable>{currency}</ItemTable>
                    </TableLine>
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