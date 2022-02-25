import '../style/teams.scss';
import { useGetTeamsQuery } from '../redux';
import { useState } from 'react';
import { Teams } from '../components/Teams';
import { Input, Pagination, Spin } from 'antd';
const { Search } = Input;

export const GetTeams = () => {

   const [nameSearchTeams, setNameSearchTeams] = useState('')
   const [currentPage, setCurrentPage] = useState(1)
   const [countriesPerPage] = useState(9)
   const lastPage = currentPage * countriesPerPage
   const firstPage = lastPage - countriesPerPage

   let currentPageArr = []
   let totalPage = 0

   const onSearch = value => {
      if (value.length) {
         teams.teams.forEach((item, id) => {
            if (item.name.toLowerCase().trim() === value.toLowerCase().trim()) {
               setNameSearchTeams(item.name)
               setCurrentPage(Math.ceil((id + 1) / 9))
            }
         })
      }
   }

   const { data: teams = [], isLoading, isSuccess } = useGetTeamsQuery()
   if (isLoading) return <div className='spin'><Spin tip="Загрузка..."></Spin></div>
   if (isSuccess) {
      currentPageArr = teams.teams.slice(firstPage, lastPage)
      totalPage = teams.teams.length
   }
   return (
      <div className='container'>
         <Search placeholder="Ведите название команды" onSearch={onSearch} allowClear={true} style={{ width: 280 }} enterButton />
         <Teams currentPageArr={currentPageArr} nameSearchTeams={nameSearchTeams} />
         <Pagination
            current={currentPage}
            onChange={setCurrentPage}
            pageSize={countriesPerPage}
            showSizeChanger={false}
            total={totalPage} />
      </div>
   );
}