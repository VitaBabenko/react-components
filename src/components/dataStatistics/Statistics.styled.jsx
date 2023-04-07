import styled from 'styled-components';

export const Section = styled.section`
    display: block;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
    text-align: center;
    border: 1px solid #EEEEEE;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 40px;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    width: 90px;
    height: 90px;
    padding: 20px 15px;
    border: 1px solid #EEEEEE;
    text-align: center;
    background-color: ${props => props.bgcColor}
`;

export const InfoItem = styled.span`
    margin-bottom: 10px;
    color: white; 
`;

export const DataItem = styled.span`
    font-size: 20px;
    color: white;
`;

