import React from "react"
import "../style.scss"

const  PageKapuchino = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/coffee_spisok/капучино.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Капучино</h2>
                    <p className="p_name">
                        Он обладает насыщенным вкусом и ароматом,
                        который можно <br /> дополнить различными добавками,
                        такими как сахар, сироп, шоколад или карамель
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
export default PageKapuchino



