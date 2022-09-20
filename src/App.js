
import './components/Pages/MainMenu/MainMenu.css';
import '././components/MenuList.js';
import MainMenu from './components/Pages/MainMenu/MainMenu.js';

import './components/Pages/KorzinMenu/Korzin.css';
import KorzinMenu from './components/Pages/KorzinMenu/Korzin';
import {Routes, Route, Link} from "react-router-dom";

import Product from './components/Pages/Product/Product';

import Login from './components/Pages/AuthMenu/Logins';

import Regis from './components/Pages/AuthMenu/Regis';


function App() {
  if (localStorage.length === 0) localStorage.setItem('users', JSON.stringify([]))
  return (
    <div>
      <Routes>
        <Route path='/MainMenu' element={<MainMenu />}/>
        <Route path='/:productId' element={<Product />}/>
        <Route path='/KorzinMenu' element={<KorzinMenu />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Regis />}/>
        <Route path='*' element={<MainMenu />}/>
      </Routes>

    </div>
  );
}

export default App;






















/*
const korz = [
  {
    url:"./images/korzina-4.png",
    title:"Устрицы по рокфеллеровски",
    description:"Устрицы по рокфеллеровски",
    praice:"2700 ₽",
  },
  {
    url:"./images/korzina-3.png",
    title:"Креветки по-королевски в лимонном соке",
    description:"Не следует, однако забывать, что реализация намеченных плановых",
    praice:"1820 ₽",
  },
  {
    url:"./images/korzina-2.png",
    title:"Свиные ребрышки на гриле с зеленью",
    description:"Значимость этих проблем настолько очевидна, что укрепление и развитие",
    praice:"1600 ₽",
},
  {
    url:"./images/korzina-3.png",
    title:"Креветки по-королевски в лимонном соке",
    description:"Не следует, однако забывать, что реализация намеченных плановых",
    praice:"1820 ₽",
  },
  {
    url:"./images/korzina-2.png",
    title:"Свиные ребрышки на гриле с зеленью",
    description:"Значимость этих проблем настолько очевидна, что укрепление и развитие",
    praice:"1600 ₽",
  }
]
*/


/*const clik = () => console.log('test')*/
/*
  <div className={'Korzina'}>
    <header >
        <h1 className={'Korzina__title'}>корзина  с выбранными товарами</h1>
    </header>
      
    <div
        style={{
          background: '#D58C51',
          height: '2px',
          position: 'sticky',
          bottom: '90px',
        }}
      />

    <main className={'korzin__Main'}>
        <ul className={'KorzinMenu__list'}>
              {
                korz.map((x, index) => 

                  <li key={index} className={'KorzinMenu'}>

                  <div className="KorzinMenu__menu">
                  <img src={x.url} className={'KorzinMenu__img'} />
                    <h3 className={'KorzinMenu__title'}>{x.title} </h3>
                  </div>
                  
                  <div className="KorzinMenu__active">
                      <span className={'KorzinMenu__praice'}>{x.praice}</span>
                      <button className={'KorzinMenu__btn'} onClick={clik}>
                        <img src="svg/11.svg" alt="" />
                      </button>
                  </div>
                  
                </li>
                )
              }
        </ul>
    </main>

    <div
        style={{
          background: '#D58C51',
          height: '2px',
          position: 'sticky',
          bottom: '90px',
        }}
      />

    <footer className={'Korzina__footer'}>
      <h2 className={'korzin_order'}>Заказ на сумму: <span className={'korzin_sum'}>6 220 ₽</span></h2>
      <div className="korzin__FunctionBtn">
        <button className='korzin__btn'>Оформить заказ</button>
      </div>
    </footer>
    </div>
    */



