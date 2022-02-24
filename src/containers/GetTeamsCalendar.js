import '../style/leagues.scss';
import { useGetTeamCalendarQuery } from '../redux';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { TableCalendar } from '../components/TableCalendar';
import { NotFoundPage } from '../components/NotFoundPage';
import { Pagination, Breadcrumb, DatePicker, Spin } from 'antd';

const { RangePicker } = DatePicker;

export const GetTeamsCalendar = () => {

   const [currentPage, setCurrentPage] = useState(1)
   const [countriesPerPage] = useState(15)
   const [dateFrom, setDateFrom] = useState('')
   const [dateTo, setDateTo] = useState('')
   const lastPage = currentPage * countriesPerPage
   const firstPage = lastPage - countriesPerPage
   let currentPageArr = []
   let totalPage = 0

   const { id, teamname } = useParams()
   const { data: calendar = [], isError, isLoading, isSuccess, refetch } = useGetTeamCalendarQuery(
      { id: id, dateFrom: dateFrom, dateTo: dateTo })
   const onChange = (date, dateString) => {
      if (dateString) {
         setDateFrom(dateString[0])
         setDateTo(dateString[1])
         refetch()
         setCurrentPage(1)
      }
   }

   if (isLoading) return <div className='spin'><Spin tip="Загрузка..."></Spin></div>
   if (isError) return <div className='container'><NotFoundPage text={'Не смогли найти такую команду.'} /></div>
   if (isSuccess) {
      currentPageArr = calendar.matches.slice(firstPage, lastPage)
      totalPage = calendar.matches.length
   }
   return (
      <div className='container'>
         <Breadcrumb>
            <Breadcrumb.Item><Link to='/teams'>Команды</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{teamname}</Breadcrumb.Item>
         </Breadcrumb>
         <RangePicker onChange={onChange} />
         <TableCalendar name={teamname} currentPageArr={currentPageArr} />
         {currentPageArr.length
            ? <Pagination
               current={currentPage}
               onChange={setCurrentPage}
               pageSize={countriesPerPage}
               showSizeChanger={false}
               total={totalPage}
            /> : ''}
      </div>
   );
}