export const DataConverter = (props) => {
   let year = new Date(Date.parse(props.date)).getFullYear()
   let month = new Date(Date.parse(props.date)).getMonth()
   let date = new Date(Date.parse(props.date)).getDate()
   let hours = new Date(Date.parse(props.date)).getHours()
   let minutes = new Date(Date.parse(props.date)).getMinutes()

   return (
      <p>
         <span>{date < 10 ? `0${date }` : `${date}`}.{month < 9 ? `0${month+1}` : `${month+1}`}.{year} </span>
         <span>{hours < 10 ? `0${hours}` : `${hours}`}:{minutes < 10 ? `0${minutes}` : `${minutes}`}</span>
      </p>
   )
}