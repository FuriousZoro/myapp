import './App.css';
import Header from './components/Header';
import Body from './components/body';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='first'>
      <Header />
      <h1>First React App</h1>
      <ul>
        <li>app</li>
        <li>app</li>
        <li>app</li>
        <li>app</li>
      </ul>
      <Body />
    </div>
  );
}

export default App;