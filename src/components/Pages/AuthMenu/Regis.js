

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";



function Regis() {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    const { login, password } = data;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.login === login)

    if (user) {
      reset();
      alert('такой Логин уже занят')
    } else {
      users.push({ login, password })
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login')
    }
  }


  return (
    <div className="registration">
      <div className="registration__menu">

        <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
          <Link className="registration__link" to='/login' >Авторизоваться</Link>
          <h2 className="registration__header">Регистрация</h2>


          <input className='registration__input' type="text" placeholder='Логин' {...register('login', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 6,
              message: 'Логин должен содержать не менее 6-х символов'
            },
          })} />
          <p className="registration__error">{errors?.login?.message || ''}</p>


          <input className='registration__input' type="password" placeholder='Пароль' {...register('password', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 4,
              message: 'Пароль должен содержать не менее 4-х символов'
            },
          })} />
          <p className="registration__error">{errors?.password?.message || ''}</p>


          <div className="registration__checkbox">
            <input className='registration__checkbox-input' type="checkbox" name="" id="checkbox-input" />
            <label className='registration__checkbox-label' htmlFor="checkbox-input" />
            <p className='registration__checkbox-text' >Я согласен получать обновления на почту</p>
          </div>
          <p className='registration__valid-error' />
          <button className='button btn__auth' type="submit">Зарегистрироваться</button>
        </form>

      </div>
    </div>
  );
}

export default Regis