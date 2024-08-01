import {lazy,Suspense} from 'react'; //192.168.1.6
import './App.css';
import Home from './Home'
import Contact from './Contact'
import Error from './Error'
import Cart from './Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import SingleProdect from './SingleProduct'
import { GlobalStyle } from './GlobalStyle';
import {ThemeProvider} from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import theme from './Helpers/theme'
import {ProductShimmer,AboutShimmer} from './Helpers/Shimmer'

// lazy loading
const About = lazy(()=> import("./About"))
const Products = lazy(()=> import("./Products"))

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Suspense fallback={<AboutShimmer/>}><About/></Suspense>} />
        <Route path="/product" element={<Suspense fallback={<ProductShimmer/>}><Products/></Suspense>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/singleproduct/:id" element={<SingleProdect/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
