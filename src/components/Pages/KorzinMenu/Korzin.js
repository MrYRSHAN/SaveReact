import './Korzin.css';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../../../store/reducers/basketReducer';
import BtnNavig from '../../ul/Main/BtnNavig';
import BtnLogins from '../../ul/Main/BtnLogins';


function KorzinMenu() {
    //получаем доступ к стейтам с помощью хуков react-redux
  const {basket, totalCost} = useSelector(state => state.basket);
  const dispatch = useDispatch()
;
  //функция для перехода на страницу продукта, аналог Link из react-router-dom
  const handleOpenProductInfo = (productId) => () => {
    
  }

  const handleRemoveProduct = (index) => () => {
    //диспатч экшена
    dispatch(removeProduct(index))
  }

  return (
  <div className={'Korzina'}>
    <header >
  
        <div className='title__header'>
          <div className="title">
          <div className="back">
          <BtnNavig/>
          </div>
            <h1 className={'Korzina__title'}>корзина  с выбранными товарами</h1>
          </div>
            

          <BtnLogins/>
        </div>
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
                basket.map((x, index) => 

                  <li key={index} className={'KorzinMenu'}>

                  <div className="KorzinMenu__menu" onClick={handleOpenProductInfo(x.id)} style={{cursor: 'pointer'}}>
                    <img src={x.url} className={'KorzinMenu__img'} />
                    <h3 className={'KorzinMenu__title'}>{x.title} </h3>
                  </div>
                  
                  <div className="KorzinMenu__active">
                      <span className={'KorzinMenu__praice'}>{x.praice} ₽</span>
                      <button className={'KorzinMenu__btn'} onClick={handleRemoveProduct(index)}>
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
      <h2 className={'korzin_order'}>Заказ на сумму: <span className={'korzin_sum'}>{totalCost} ₽</span></h2>
      <div className="korzin__FunctionBtn">
        <button className='korzin__btn'>Оформить заказ</button>
      </div>
    </footer>
    </div>

);
}

export default KorzinMenu;
