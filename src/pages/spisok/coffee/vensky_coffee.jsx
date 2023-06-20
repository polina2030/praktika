import React from "react"
import "../style.scss"

const PageVensky_coffee = () => {
    return (
        <div className="main">
            <article class="cartochka_tovara">
                <div>
                    <img src= "images/coffee_spisok/венский кофе.png" alt="" className="img_site" />
                </div>
                <div className = "tovar"s>
                    <h2 className="h2_name">Венский кофе</h2>
                    <p className="p_name">
                        Он имеет насыщенный вкус и аромат, а также густую пенку. 
                    </p>
                    <h3 className="h3_tovar">Состав</h3>
                    <p className="p_name">
                        Молотый кофе, вода, сахар, молоко или сливки
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        450 мл
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        300 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageVensky_coffee



