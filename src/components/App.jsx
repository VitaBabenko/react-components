import { GlobalStyle } from './GlobalStyle';
import { Profile } from './userProfile/Profile';
import { Statistics } from './dataStatistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
