import styled from 'styled-components';

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
`;

export const User = styled.div`
   padding: 30px;
   text-align: center;
`;

export const ImageUser = styled.img`
    width: 120px;
    border-radius: 50%;
    margin-bottom: 25px;
`;

export const NameUser = styled.p`
    font-size: 20px;
    font-weight: 700;
`;

export const InfoUser = styled.p`
    font-size: 16px;
    color: grey;
`;

export const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #F5F4FA;
`;

export const ListItem = styled.li`
   width: 100px;
   height: 100px;
   padding: 30px 15px;
   text-align: center;
   border: 1px solid #EEEEEE;
`;

export const InfoItem = styled.span`
    font-size: 14px;
    color: grey;
`;

export const DataItem = styled.span`
    font-weight: 700;
    font-size: 17px;
`