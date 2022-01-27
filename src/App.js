import { useSelector } from 'react-redux';
import './App.css';
import Toast from './components/Toast/Toast';
import Login from './pages/Login';

function App() {

  const { message, isError, loading } = useSelector(store => store.apiReducer);

  return (
    <div className="App">
      {loading && <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        backgroundColor: 'rgba(tr234,tr234,tr234,.4)'}}>
          Loading
      </div>}
      <header className="App-header">
        {isError && <Toast message={message}/>}
        <Login />
      </header>
    </div>
  );
}

export default App;
