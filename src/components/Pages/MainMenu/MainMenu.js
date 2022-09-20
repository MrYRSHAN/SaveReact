import './MainMenu.css';
import Card from '../../elements/Card';
import BtnLogins from '../../ul/Main/BtnLogins';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from '../../../store/reducers/basketReducer';

function MainMenu() {
  //получаем доступ к стейтам с помощью хуков react-redux
  const {products} = useSelector((state) => state.products);
  const {count, totalCost} = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => () => {
    //диспатч экшена
    dispatch(addProduct(product))
  }

  return (
    <main className="main">
      <div className="container">
      <header className="header">

        <div className='flex'>
        
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

        <div className="menu">
            {products.map((key, index) => {
              return (
                <Card
                  key={index}
                  addToCart={handleAddToCart(key)}
                  {...key}
                  />
              )
            })}
        </div>
      </div>
    </main>

  );
}

export default MainMenu;