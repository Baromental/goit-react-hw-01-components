
import React from "react";
import Profile from "./Profile/Profile";
import userData from "./Profile/user.json"
import Statistics from "./Statistics/Statistics";
import Data from "./Statistics/data.json"
import FriendList from "./FriendListItem/FriendList";
import friendsData from "./FriendListItem/friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"

const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div>
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={Data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
