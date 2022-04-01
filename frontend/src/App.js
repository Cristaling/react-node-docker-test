import './App.css';
import React, { useEffect } from "react";
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { LoginPage } from './routes/login';
import { ChartPage } from './routes/chart';
import { LoadingPage } from './routes/loading';

function App() {

  // CSRF Protection
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get('/csrf-token');
      axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
     };
    getCsrfToken();
  }, []);

  // Handle not unauthorized responses
  useEffect(() => {
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
        if (401 === error.response.status) {
          window.location.href = "/login";
        } else {
            return Promise.reject(error);
        }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
