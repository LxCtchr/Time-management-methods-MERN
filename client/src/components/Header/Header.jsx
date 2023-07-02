import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__column">
            <div className="header__logo">
              <img
                src="http://localhost:4444/uploads/clock.png"
                alt=""
                className="header__img"
              />
              <a href="" className="logo">
                <span>Time Control</span>
              </a>
            </div>
            <nav className="menu__body">
              <ul className="menu__list">
                <li>
                  <a href="" className="menu__link">
                    Список техник
                  </a>
                </li>
                <li>
                  <a href="" className="menu__link">
                    Советы
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__column">
            <button className="menu__button">
              <span>
                <Link to="/survey">Пройти опрос</Link>
              </span>
            </button>
            <a href="" className="menu__login">
              Войти
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
