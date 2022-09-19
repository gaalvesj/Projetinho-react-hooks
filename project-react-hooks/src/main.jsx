import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css'
import FirstProvider from './Components/context/FristProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstProvider>
      <BrowserRouter>
        <Routes>
          <Route  path="/" component={<App />} > </Route>
        </Routes>
      </BrowserRouter>
    </FirstProvider>
  </React.StrictMode>
)