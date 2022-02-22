export const ShowScore = (props) => {
   return (
      <>
         {props.game === 'FINISHED' && 'POSTPONED' ? <p>
            <span className='table__fulltime'>{props.fullTimeHome ? props.fullTimeHome : '0'}
               : {props.fullTimeAway ? props.fullTimeAway : '0 '}</span>
            <span className='table__extratime'> ({props.extraTimeHome ? props.extraTimeHome : ' 0'}
               : {props.extraTimeAway ? props.extraTimeAway : ' 0 '} )</span>
            <span className='table__extratime'> ({props.penaltiesHome ? props.penaltiesHome : ' 0'}
               : {props.penaltiesAway ? props.penaltiesAway : ' 0'} )</span>
         </p> :
            <p>
               <span className='table__fulltime'> X:Y</span>
               <span className='table__extratime'>  (Z:G)</span>
               <span className='table__extratime'> (N:M)</span>
            </p>}
      </>
   );
}
