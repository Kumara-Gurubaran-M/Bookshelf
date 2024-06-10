import { Route, Routes, Link } from 'react-router-dom';
import Search from './components/Search';
import Bookshelf from './components/Bookshelf';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/bookshelf"><button>My Bookshelf</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </div>
  );
}
export default App;
