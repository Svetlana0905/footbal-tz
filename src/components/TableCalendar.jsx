import '../style/table.scss';
import {NotFoundPage} from './NotFoundPage';
import { DataConverter } from './DataConverter';
import { ShowStatus } from './ShowStatus';
import { ShowScore } from './ShowScore';

export const TableCalendar = (props) => {
   return (
      <>
         {props.currentPageArr.length
            ? <table border="1" cellPadding="7" width="100%" className='table'>
               <thead>
                  <tr>
                     <th>Дата</th>
                     <th className='table__td--hidden'>Статус</th>
                     <th>Гостевая команда</th>
                     <th>Домашняя команда</th>
                     <th>Счёт</th>
                  </tr>
               </thead>
               <tbody>
                  {props.currentPageArr.map(item =>
                     <tr key={item.id}>
                        <td>{<DataConverter date={item.utcDate} />}</td>
                        <td className='table__td--hidden'>{<ShowStatus status={item.status} />}</td>
                        <td>{item.awayTeam.name}</td>
                        <td>{item.homeTeam.name}</td>
                        <td>{<ShowScore game={item.status}
                           fullTimeHome={item.score.fullTime.homeTeam}
                           fullTimeAway={item.score.fullTime.awayTeam}
                           extraTimeHome={item.score.extraTime.homeTeam}
                           extraTimeAway={item.score.extraTime.awayTeam}
                           penaltiesHome={item.score.penalties.homeTeam}
                           penaltiesAway={item.score.penalties.awayTeam}
                        />}
                        </td>
                     </tr>
                  )}
               </tbody>
            </table> 
            : <NotFoundPage text={'Нет таких данных'}/>
         }
      </>
   );
}