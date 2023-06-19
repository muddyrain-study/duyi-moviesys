import { FC } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd';
const { Header, Content, Sider } = AntLayout;
export const Layout: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className='container'>
      <AntLayout>
        <Header className='header'>
          <NavLink to='/'>猫眼电影管理系统</NavLink>
        </Header>
        <AntLayout>
          <Sider>
            <Menu
              selectedKeys={[location.pathname]}
              theme='dark'
              items={[
                {
                  key: '/movie',
                  label: '电影列表',
                },
                {
                  key: '/movie/add',
                  label: '新增电影',
                },
              ]}
              onClick={e => {
                navigate(e.key);
              }}
            />
          </Sider>
          <Content>
            <div className='main'>
              <Outlet />
            </div>
          </Content>
        </AntLayout>
      </AntLayout>
    </div>
  );
};
