import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { arrayLeaguesCode } from '../redux/dataCodeLeagues';

export const Leagues = (props) => {

  const arrCode = arrayLeaguesCode;

  return (
    <div className='leagues'>
      {props.currentPageArr.map(item =>
        <div key={item.id} className={props.nameSearchLeague === item.name
          ? 'leagues__block leagues__block--active' : 'leagues__block'}>
          <Tooltip
            title={arrCode.includes(item.code)
              ? 'Посмотреть календарь соревнований' : 'Извините, календарь недоступен'}
            color='#108ee9'
            placement="bottomLeft"
          >
            <p>Лига: <span className={arrCode.includes(item.code)
                ? 'leagues__name--active' : 'leagues__name'}>{item.name}</span>
            </p>
            <span>Страна: </span>
            <Link to={arrCode.includes(item.code) ? `/calendar/${item.code}` : ''}
              className={arrCode.includes(item.code) ? 'leagues__link' : 'isDisabled'}>
              {item.area.name}
            </Link>
          </Tooltip>
        </div>)}
    </div>
  );
}
