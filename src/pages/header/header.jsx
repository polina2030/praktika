import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen)
  }

  const handleLogoClick = () => {
  if (window.innerWidth <= 1200) {
  handleMenuToggle()
  }
  }

  return (
    <div className="headerHeader">
      <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
        <div>
          <Link to="/" onClick={handleMenuToggle}>Новости</Link>
        </div>
        <div>
          <Link to="/menu" onClick={handleMenuToggle}>Меню</Link>
        </div>
        <div>
          <Link to="/kontakty" onClick={handleMenuToggle}>Контакты</Link>
        </div>
        <div>
          <Link to="/oNas" onClick={handleMenuToggle}>О нас</Link>
        </div>
      </div>
      <div className="header__icons">
        <div className={`header__burger-menu ${isMenuOpen ? 'visible' : ''}`}
          onClick={handleMenuToggle}>
          <div> 
            <img src="images/icons/бургер.png" alt="burger" className='burger'/>
          </div>
        </div>
      </div>
      <div>
        <h1 class = "name_header">Hot Coffee</h1>
      </div>
      <div class = "networks">
          <a href="https://yandex.ru/search/?clid=2721045-15&win=580&from=chromesearch&text=dr&lr=197"><img src="images/icons/вк.png" alt="" class="img_nav" /></a>
          <a href="https://yandex.ru/search/?text=%D0%B8%D0%BD%D1%81%D1%82%D0%B0%D0%B3%D1%80%D0%B0%D0%BC&lr=197&clid=2721045-15&win=580&src=suggest_B"><img src="images/icons/инстаграм.png" alt="" class="img_nav" /></a>
          <a href="https://yandex.ru/search/?text=%D1%84%D0%B5%D0%B9%D1%81%D0%B1%D1%83%D0%BA&lr=197&clid=2721045-15&win=580&src=suggest_Reformulation"><img src="images/icons/фейсбук.png" alt="" class="img_nav" /></a>
      </div>

    </div>
)
}
export default PageHeader