import PropTypes from "prop-types";
import { Container, User, ImageUser, NameUser, InfoUser, List, ListItem, InfoItem, DataItem } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats } ) => {
    return <Container>
        <User>
            <ImageUser
                src={avatar}
                alt={username}
            />
            <NameUser>{username}</NameUser>
            <InfoUser>@{tag}</InfoUser>
            <InfoUser>{location}</InfoUser>
        </User>

        <List>
            <ListItem>
                <InfoItem>Followers</InfoItem><br />
                <DataItem>{stats.followers}</DataItem>
            </ListItem>
            <ListItem>
                <InfoItem>Views</InfoItem><br />
                <DataItem>{stats.views}</DataItem>
            </ListItem>
            <ListItem>
                <InfoItem>Likes</InfoItem><br />
                <DataItem>{stats.likes}</DataItem>
            </ListItem>
        </List>
    </Container>
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
}