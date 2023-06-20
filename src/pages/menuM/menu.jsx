import React from "react"
import "./style.scss"

const PageMenuM = () => {
    return (
        <div className="main">
            <div className = "logo_main"> 
                <h3 className = "question">Хотите чашечку<br />вкусного кофе?</h3>
                <p className = "priglashenie">Тогда заходите к нам! Мы вас очень ждем)</p>
            </div>

            <article>
            <h2>Кофе</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/kapuchino" className="a_spisok">
                        <img src="../../../images/coffe/капучино.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Капучино</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/latte" className="a_spisok">
                        <img src="../../../images/coffe/латте.png" alt="" className = "img_main" />
                        <p class = "card_opisanie"> Латте</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/vensky_coffee" className="a_spisok">
                        <img src="../../../images/coffe/венский кофе.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Венский кофе</p>
                    </a>
                </div>
            </div>
        </article>
        
        <article>
            <h2>Авторский кофе</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/raf_ananas" className="a_spisok">
                        <img src="../../../images/coffe/раф ананас в карамели.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Раф Ананас в карамели</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/raf_kaktus" className="a_spisok">
                        <img src="../../../images/coffe/раф дыня кактус.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Раф Кактус-дыня</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/raf_kokos" className="a_spisok">
                        <img src="../../../images/coffe/раф малина кокос.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Раф Малина-кокос</p>
                    </a>
                </div>
            </div>
        </article>
        <article className="bezMenu">
            <h2>Десерты</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/medovik" className="a_spisok">
                        <img src="../../../images/cake/медовик.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Медовик</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/chizcake" className="a_spisok">
                        <img src="../../../images/cake/чизкейк клубничный.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Чизкейк клубничный</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/chocolate" className="a_spisok">
                        <img src="../../../images/cake/торт шоколадный с вишней.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Шоколадный с пряной вишней </p>
                    </a>
                </div>
            </div>
            </article>
        </div>
    )
}
export default PageMenuM



