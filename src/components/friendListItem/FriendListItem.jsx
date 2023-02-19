import PropTypes from "prop-types";
import { ListItem, Image, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return <ListItem>
    <span>{isOnline}</span>
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