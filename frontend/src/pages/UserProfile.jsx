import Navbar from '../components/navbar/Navbar';
import Profile from '../components/profile/Profile';
import './Page.css'

function UserProfile() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Navbar/>
        <Profile/>
      </div>
    </div>
  );
}

export default UserProfile;
