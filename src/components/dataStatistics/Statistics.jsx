import PropTypes from "prop-types";
import { Section, Title, List, ListItem, InfoItem, DataItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return <Section>
    <Title>{title}</Title>
  
    <List>
      {stats.map(({ id, label, percentage }) => {
        return (
          <ListItem key={id} bgcColor={getRandomHexColor()}>
            <InfoItem>{label}</InfoItem><br />
            <DataItem>{percentage}%</DataItem>
          </ListItem>
        )
      })}
    </List>
  </Section>
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired
}