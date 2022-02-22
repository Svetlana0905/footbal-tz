import '../style/nav.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export const LayoutPage = () => {
   return (
      <Layout>
         <Header>
            <div className='container'>
               <nav className='nav'>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'nav__active--link' : 'nav__link'}>Лиги</NavLink>
                  <NavLink to="/teams" className={({ isActive }) => isActive ? 'nav__active--link' : 'nav__link'}>Команды</NavLink>
               </nav>
            </div>
         </Header>
         <Content>
            <Outlet />
         </Content>
      </Layout>
   )
}

