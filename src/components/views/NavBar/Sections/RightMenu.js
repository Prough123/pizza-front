/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge, Divider, Typography } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Avatar } from 'antd';


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
          <a href="/login">Вход</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Зарегистрироваться</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <div>

        <Menu mode={props.mode}>

          <Menu.Item key="history">
            <a href="/history">История покупок</a>
          </Menu.Item>
          {/* 
          <Menu.Item key="upload">
            <a href="/product/upload">Добавление</a>
          </Menu.Item> */}

          <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
            <Badge count={user.userData && user.userData.cart.length}>
              <a href="/user/cart" style={{ marginRight: -22, color: '#667777' }}>
                <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 1 }} />
              </a>
            </Badge>
          </Menu.Item>

          {user && user.userData ? <Menu.Item className="user" disabled='true' style={{ paddingBottom: 9 }}>{user.userData.name}</Menu.Item> : 0}
          {/* {user && user.userData ? <Menu.Item className="user" disabled='true' style={{ paddingBottom: 9 }}>{user.userData.}</Menu.Item> : 0} */}

          <Menu.Item key="logout">
            <a onClick={logoutHandler}>Выйти</a>
          </Menu.Item>
        </Menu>


      </div >
    )
  }
}



export default withRouter(RightMenu);

