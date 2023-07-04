import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderDisplay from './components/HeaderDisplay';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Login from './components/Login';
import AuthContext from './store/Auth-context';
import { useContext } from 'react';




function App() {

  const authCtx = useContext(AuthContext)
  console.log(authCtx.token)
  console.log(authCtx.isLogin)
  // const router = createBrowserRouter([
  //   { path: '/store', element: <HeaderDisplay /> },
  //   { path: '/about', element: <About /> },
  //   { path: '/home', element: <Home /> },
  //   { path: '/contact', element: <Contact /> },
  //   { path: '/product-details/:pid', element: <Product /> },
  //   { path: '/', element: <Login /> }
  // ])


  return (
    

      <BrowserRouter>
        <Routes>
          
            {/* <Route index element={<Home />} /> */}
            {/* <Route index element={<Login />} /> */}
            {authCtx.isLogin && <Route path="/store" element={<HeaderDisplay />} />}
            {authCtx.isLogin && <Route path="/home" element={<Home />} />}
            {authCtx.isLogin && <Route path="/contact" element={<Contact />} />}
            {authCtx.isLogin && <Route path="/product-details/:pid" element={<Product />} />}
            {authCtx.isLogin && <Route path="/about" element={<About />} />}
            {!authCtx.isLogin && <Route path="/" element={<Login />} />}
            <Route path='*' element={<Login/>}/>
          
        </Routes>
      </BrowserRouter>

    
  );
}

export default App;
