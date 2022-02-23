import '../style/errorPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import Ball from '../img/ball.svg';

export const NotFoundPage = (props) => {
   const navigate = useNavigate()
   const goBack = () => navigate(-1)
   return (
      <div className='container'>
         <p className='error'>{props.text ? `${props.text}` : 'Ой, а у нас нет такой страницы.'}</p>
         <p className='error__img--block'><img src={Ball} className='error__img' alt="Логотип" /></p>
         <p className='error__link--block'>
            <button onClick={goBack} className='error__link'>Вернуться назад</button>
            <span className='text'> или </span>
            <Link to='/' className='error__link'>Перейти на главную</Link>
         </p>
      </div>
   );
}