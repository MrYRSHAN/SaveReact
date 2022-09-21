import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { LoginStatus, clearBasket } from '../../../store/reducers/basketReducer';
import './Button.css'
function BtnLogins() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {logged} = useSelector(store => store.basket)

  const onClick = () => {
    if (logged) {
      dispatch(clearBasket())
      dispatch(LoginStatus(false))
    }
    navigate('/login')
  }

  return (
    <button className="button Btn__log" onClick={onClick}>{logged ? 'Выйти' : 'Войти'}</button>
  )

}

export default BtnLogins;