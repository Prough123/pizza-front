/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge, Divider, Typography } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import {NavLink, withRouter} from 'react-router-dom';
import { useSelector } from "react-redux";



function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <NavLink to="/login">Вход</NavLink>
        </Menu.Item>
        <Menu.Item key="app">
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <div>

        <Menu mode={props.mode}>

          <Menu.Item key="history">
            <NavLink to="/history">История покупок</NavLink>
          </Menu.Item>
          {/* 
          <Menu.Item key="upload">
            <a href="/product/upload">Добавление</a>
          </Menu.Item> */}

          <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
            <Badge count={user.userData && user.userData.cart.length}>
              <NavLink to="/user/cart" style={{ marginRight: -22, color: '#667777' }}>
                <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 1 }} />
              </NavLink>
            </Badge>
          </Menu.Item>

          {user && user.userData ? <Menu.Item className="user" disabled='true' style={{ paddingBottom: 9 }}>{user.userData.name}</Menu.Item> : 0}
          {/* {user && user.userData ? <Menu.Item className="user" disabled='true' style={{ paddingBottom: 9 }}>{user.userData.}</Menu.Item> : 0} */}

          <Menu.Item key="logout">
            <div onClick={logoutHandler}>Выйти</div>
          </Menu.Item>
        </Menu>


      </div >
    )
  }
}



export default withRouter(RightMenu);

