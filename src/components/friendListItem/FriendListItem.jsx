import PropTypes from "prop-types";
import { ListItem, Image, Status, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return <ListItem>
    <Status isTrue={isOnline === true}>{isOnline}</Status>
    <Image src={avatar} alt={name} />
    <FriendName>{name}</FriendName>
    </ListItem>
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
}