import PropTypes from "prop-types";
import { Section, Title, List, ListItem, InfoItem, DataItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return <Section>
    <Title>{title}</Title>
  
    <List>
      {stats.map(({ id, label, percentage }) => {
        return (
          <ListItem key={id}>
            <InfoItem>{label}</InfoItem><br />
            <DataItem>{percentage}%</DataItem>
          </ListItem>
        )
      })}
    </List>
  </Section>
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired
}