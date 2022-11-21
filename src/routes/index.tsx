import { SignIn } from '../pages/SignIn';
 import { Routes,Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export default function RoutesApp(){
    return(
        
            <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
     )
        
}