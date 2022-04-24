import './App.css';
import { Box } from '@mui/system';
import NavBar from './components/NavBar';
import Repository from './components/Repository'
import { Routes, Route} from "react-router-dom";
import  Dashboard  from './components/Dashboard';
import RepoDetails from './components/RepoDetails';


function App() {
  return (
    <Box>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Dashboard />} exact={true} />
      <Route path="/repos/:userName" element={<Repository />}/>
      <Route path="/repos/:userName/:repoName" element={<RepoDetails />} />
      </Routes>
      
    </Box>
  );
}

export default App;
