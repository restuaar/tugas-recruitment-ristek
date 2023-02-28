import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import './Page.css';

function Home() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Navbar/>
        <Main/>
      </div>
    </div>
  );
}

export default Home;
