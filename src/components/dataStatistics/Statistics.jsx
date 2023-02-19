import PropTypes from "prop-types";
import { Section, Title, List, ListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return <Section>
    <Title>{title}</Title>
      
    <List>
      {stats.map(({ id, label, percentage }) => {
        return (
          <ListItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
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




/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */