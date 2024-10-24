import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Searchbar from './Components/Searchbar.jsx'
//import MovieList from './Components/MovieList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Navbar />
    {/* <MovieList /> */}
    <Searchbar />
    <Footer />
  </StrictMode>,
)





