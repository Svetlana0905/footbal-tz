import { Link } from 'react-router-dom';

export const Teams = (props) => {
  return (
    <div className='teams'>
      {props.currentPageArr.map(item =>
        <div key={item.id} className={props.nameSearchTeams === item.name ? 'teams__block teams__block--active' : 'teams__block'}>
          <Link to={`/teams/${item.id}/${item.name}`}
            className='teams__link'>
            {item.name}
          </Link>
          <p><img className='teams__img' src={item.crestUrl} alt={item.name} /></p>
        </div>)}
    </div>
  );
}