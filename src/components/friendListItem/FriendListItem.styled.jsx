import styled from 'styled-components';

export const ListItem = styled.div`
    display: flex;
    gap: 20px;
    align-items: baseline;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #EEEEEE;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
    width: 60px;
`;

export const FriendName = styled.p`
    font-size: 18px;
    font-weight: 600;
`;

export const Status = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => {
    return props.isTrue ? "green" : "red";
    }};
`