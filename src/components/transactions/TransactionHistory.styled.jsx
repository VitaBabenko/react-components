import styled from 'styled-components';

export const Table = styled.table`
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
`;

export const NameTable = styled.th`
    padding: 10px;
    width: 250px;
    background-color: #6d9df7;
    text-transform: uppercase;
    border: 1px solid #EEEEEE;
    color: #EEEEEE;
`;

export const ItemTable = styled.td`
    padding: 10px;
    border: 1px solid #EEEEEE;
    color: grey;
    text-align: center;
`;

export const TableLine = styled.tr`
    background-color: ${props => {
    return props.color;
    }};
`