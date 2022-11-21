import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes';

function App() {
  return (
    <>
      <AuthProvider>
            <BrowserRouter>
              <ToastContainer autoClose={2000} />
              <RoutesApp />
            </BrowserRouter>
        </AuthProvider>
    </>
  
  )
}

export default App;
