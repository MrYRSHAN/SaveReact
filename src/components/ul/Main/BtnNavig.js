import { useNavigate } from 'react-router-dom'

import './Button.css'

function BtnNavig() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button className='back-button' onClick={goBack}></button>
  )

}

export default BtnNavig;