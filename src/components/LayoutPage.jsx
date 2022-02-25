import '../style/nav.scss';
import '../style/logoAnimation.scss';
import Ball from '../img/ball.svg';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export const LayoutPage = () => {
   return (
      <Layout>
         <Header>
            <div className='container'>
               <div className='header__inner'>
                  <div className='logo'>
                     <div className='logo__ball'><img src={Ball} alt="Логотип" /></div>
                  </div>
                  <nav className='nav'>
                     <NavLink to="/" className={({ isActive }) => isActive ? 'nav__active--link' : 'nav__link'}>Лиги</NavLink>
                     <NavLink to="/teams" className={({ isActive }) => isActive ? 'nav__active--link' : 'nav__link'}>Команды</NavLink>
                  </nav>
               </div>
            </div>
         </Header>
         <Content>
            <Outlet />
         </Content>
      </Layout>
   )
}

