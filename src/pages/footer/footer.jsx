import React from "react"
import "./style.scss"
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const PageFooter = () => {
    return (
        <div className="mainFooter">
            <footer>
                <div className = "text_footer">
                    <div>
                        <p className="ppp_footer">Кофейня Hot Coffee</p>
                        <p className="ppp_footer">г. Барнаул, ул. Ленина, 55</p>
                    </div>
                    <div className = "networks_footer">
                        <a href=""><img src="images/icons/вк.png" alt="" className = "img_nav" /></a>
                        <a href=""><img src="images/icons/инстаграм.png" alt="" className = "img_nav" /></a>
                        <a href=""><img src="images/icons/фейсбук.png" alt="" className = "img_nav" /></a>
                    </div>
                </div>
                <p className = "prava">© 2023 «Хат Кофи». Все права защищены.</p>
            </footer>
        </div>
    )
}
export default PageFooter



