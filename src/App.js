
import { useState} from 'react';

import UserApp from './components/UserApp';
 import { Login } from './components/Pages/Login';


function App() {
  const [userRole, setUserRole] = useState('');
  const userName = localStorage.getItem('userName');
  return (
    <>
   <div>
  
    
     <div>
   

      
    </div>
     
    </div>

      </>
  );
}

export default App;

