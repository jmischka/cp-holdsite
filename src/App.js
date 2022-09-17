import './App.css';
import logo from './assets/LogoType.png';
import boat from './assets/LineArt-1.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Cruiseport Logo" />
      </header>
      <div className='App-body'>
        <h2>New Website<br />Coming Soon</h2>
        <p>For more information about our services or to speak with a member of our team please contact us at:</p>
        <p>800.222.3456</p>
        <a href='mailto: info@cruiseportdestinations.com'>info@cruiseportdestinations.com</a>
      </div>
      <div className='Boat-art'>
        <img src={boat} alt="animated graphic" />
      </div>
    </div>
  );
}

export default App;
