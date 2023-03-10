
import './App.css';
import Auth from './components/Auth';
function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div >
      
      <Auth/>
    </div>
  );
}

export default App;
