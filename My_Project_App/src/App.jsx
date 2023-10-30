import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import SnackbarProvider from 'react-simple-snackbar';
import ClientList from './pages/clients/ClientList.js';
import Footer from './components/Footer/Footer.js';
import Invoice from './pages/Invoice/Invoice.js';
import InvoiceDetails from './pages/InvoiceDetails/InvoiceDetails.js';
import Invoices from './pages/Invoices/Invoices.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Settings from './pages/Settings/Settings.js';
import Forgot from './pages/Password/Forgot.js';
import Reset from './pages/Password/Reset.js';

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
        <SnackbarProvider>
          {user && <NavBar />}
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/invoice' element={<Invoice />} />
            <Route path='/edit/invoice/:id' element={<Invoice />} />
            <Route path='/invoice/:id' element={<InvoiceDetails />} />
            <Route path='/invoices' element={<Invoices />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/customers' element={<ClientList />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/reset/:token' element={<Reset />} />
          </Routes>
          <Footer />
        </SnackbarProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
