import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StartSurvey } from './pages/survey/StartSurvey';
import { ReasonForPurchase } from './pages/survey/ReasonForPurchase';
import { TypeOfChocolate } from './pages/survey/TypeOfChocolate';
import { DietaryRestrictions } from './pages/survey/DietaryRestrictions';
import { Packaging } from './pages/survey/Packaging';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components/Navbar';
import { ProductPage } from './pages/ProductPage';
import { FeaturedPage } from './pages/FeaturedPage';
import { Footer } from './components/Footer';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ShopPage } from './pages/ShopPage';
import { DoesNotExistPage } from './pages/DoesNotExistPage';
import { FAQPage } from './pages/FAQPage';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <div id='parent-container'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/shop/:productName' element={<ShopPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/featured' element={<FeaturedPage/>}/>
      <Route path='/product/:name' element={<ProductPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/faq' element={<FAQPage/>}/>
      <Route path='/survey'>
        <Route index element={<StartSurvey/>}/>
        <Route path='reason' element={<ReasonForPurchase/>}/>
        <Route path='type' element={<TypeOfChocolate/>}/>
        <Route path='diet' element={<DietaryRestrictions/>}/>
        <Route path='packaging' element={<Packaging/>}/>
      </Route>
      <Route path='*' element={<DoesNotExistPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
