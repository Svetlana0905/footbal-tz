export const ShowStatus = (props) => {
   const data = {
      SCHEDULED: 'Запланирован',
      LIVE: 'В прямом эфире',
      IN_PLAY: 'В игре',
      PAUSED: 'Пауза',
      FINISHED: 'Завершен',
      POSTPONED: 'Отложен',
      SUSPENDED: 'Приостановлен',
      CANCELED: 'Отменен',
   }
   return (
         <span>{data[props.status]}</span>
   )
}