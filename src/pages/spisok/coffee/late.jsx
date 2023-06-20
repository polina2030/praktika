import React from "react"
import "../style.scss"

const PageLatte = () => {
    return (
        <div className="main">
            

            <article class="cartochka_tovara">
                <div>
                    <img src= "images/coffee_spisok/латте.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Латте</h2>
                    <p className="p_name">
                        Классический эспрессо, молоко и небольшое <br /> количество молочной пены
                    </p>
                    <h3 className="h3_tovar">Состав</h3>
                    <p className="p_name">
                        Эспрессо, молоко, молочная пена
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        450 мл
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        250 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageLatte



