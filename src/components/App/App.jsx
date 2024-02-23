import { Profile } from '../Profile/Profile.jsx';
import userData from '../../userData.json';
import { FriendList } from '../FriendList/FriendList.jsx'
import friends from '../../friends.json'
import { TransactionHistory } from '../Transaction/TransactionHistory.jsx';
import transactions from '../../transactions.json'


export const App = () => {
return (
<>
<Profile userData={userData} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
</>
);
};
