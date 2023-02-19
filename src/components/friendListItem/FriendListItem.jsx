import PropTypes from "prop-types";
import { ListItem } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return <ListItem>
    <span>{isOnline}</span>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
  </ListItem>
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
}


/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */