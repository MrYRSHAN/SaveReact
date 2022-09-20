
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from '../../../store/reducers/basketReducer';
import {getProduct} from '../../../store/reducers/productsReducer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BtnNavig from '../../ul/Main/BtnNavig';
import BtnLogins from '../../ul/Main/BtnLogins';

function Product() {
  //получаем доступ к стейтам с помощью хуков react-redux
  const {product} = useSelector((state) => state.products);
  const {count, totalCost} = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  //получаем индекс продукта из URL страницы. Название productId указывается в Route, в App
  const { productId } = useParams();
  //сетаем в стейт текущий продукт для дальнейшего отображения на странице
  useEffect(() => {
    dispatch(getProduct(Number(productId)));
  }, [dispatch, productId])

  const handleAddToCart = (product) => () => {
    //диспатч экшена
    dispatch(addProduct(product))
  }



  //пока происходит получение продукта в useEffect, неплохо было бы использовать индикатор загрузки, чтобы не было ошибок в разметке
    if (!product) {
        return <span>Загрузка...</span>
    }

    
  return (
    <main className="main">
      <div className="Big-container">
      <header className="header">

        <div className='flex'>
        <BtnNavig/>
        <h1 className='header__title'>НАША ПРОДУКЦИЯ</h1>
        
        </div>
          

          <div className='header__korzina'>
            <p className="text__korzina">
                <span>{` ${count} товара`}</span>
                <span> {`на сумму: ${totalCost} ₽`} </span>
            </p>



            <Link to="/KorzinMenu" className="img-link">
            <img src={'./images/svgkorzina.png'} className={'img__korzina'} />
            </Link>
            <BtnLogins/>
          </div>
          
        </header>

        <div className="Big-Card">
          <div className='Big-Card_desc'>
            <img src={product.url} className='Big-Card_img' />
          
      
            <div className="Big-Card_text">

              <h2 className='Card-header_title'>{product.title}</h2>
              <p className='Card-header_desc'>{product.description}</p>
            

            <div className='Card-header_sum'>

                <span className='Card-sum'>{product.praice}₽</span>
                <span className='Card-ves'>{product.weight}</span>
            

            <button onClick={handleAddToCart(product)} className='Card-header_btn btn'>В корзину</button>
            </div>
        </div>
        </div>
      </div>
      </div>
    </main>

  );
}

export default Product;