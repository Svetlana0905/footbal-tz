import '../style/calendar.scss';
import { NotFoundPage } from './NotFoundPage';
import { DataConverter } from './DataConverter';
import { ShowStatus } from './ShowStatus';
import { ShowScore } from './ShowScore';

export const TableCalendar = (props) => {
   return (
      <>
         {props.currentPageArr.length
            ? <div className='calendar'>
               {props.currentPageArr.map(item =>
                  <div key={item.id} className='calendar__row'>
                     <div className='calendar__block block--data'>
                        <div className='block--data__data'>{<ShowStatus status={item.status} />}</div>
                        <div className='block--data__data'>{<DataConverter date={item.utcDate} />}</div>
                     </div>
                     <div className='calendar__block block--names'>
                        <p className='block--names__name'>{item.awayTeam.name}</p>
                        <span className='block--names__versus'>vs</span>
                        <p className='block--names__name'>{item.homeTeam.name}</p>
                     </div>
                     <div className='calendar__block'>{<ShowScore game={item.status}
                        fullTimeHome={item.score.fullTime.homeTeam}
                        fullTimeAway={item.score.fullTime.awayTeam}
                        extraTimeHome={item.score.extraTime.homeTeam}
                        extraTimeAway={item.score.extraTime.awayTeam}
                        penaltiesHome={item.score.penalties.homeTeam}
                        penaltiesAway={item.score.penalties.awayTeam}
                     />}</div>
                  </div>
               )}
            </div>
            : <NotFoundPage info={'Нет данных для календаря.'} />
         }
      </>
   );
}