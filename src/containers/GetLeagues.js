import '../style/leagues.scss';
import { useGetLeaguesQuery } from '../redux';
import { useState } from 'react';
import { Leagues } from '../components/Leagues';
import { Input, Pagination, Spin } from 'antd';
const { Search } = Input;

export const GetLeagues = () => {

   const [nameSearchLeague, setNameSearchLeague] = useState('')
   const [currentPage, setCurrentPage] = useState(1)
   const [countriesPerPage] = useState(9)
   const lastPage = currentPage * countriesPerPage
   const firstPage = lastPage - countriesPerPage

   let currentPageArr = []
   let totalPage = 0

   const onSearch = value => {
      if (value.length) {
         leagues.competitions.map((item, id) => {
            if (item.name === value) {
               setNameSearchLeague(value)
               setCurrentPage(Math.ceil((id + 1) / 9))
            }
         })
      }
   }

   const { data: leagues = [], isLoading, isSuccess } = useGetLeaguesQuery()

   if (isLoading) return <div className='spin'><Spin tip="Загрузка..."></Spin></div>
   if (isSuccess) {
      currentPageArr = leagues.competitions.slice(firstPage, lastPage)
      totalPage = leagues.competitions.length
   }
   return (
      <div className='container'>
         <Search placeholder="Введите название лиги" onSearch={onSearch} allowClear={true} style={{ width: 280 }} enterButton />
         <Leagues currentPageArr={currentPageArr} nameSearchLeague={nameSearchLeague} />
         <Pagination
            current={currentPage}
            onChange={setCurrentPage}
            pageSize={countriesPerPage}
            showSizeChanger={false}
            total={totalPage} />
      </div>
   );
}