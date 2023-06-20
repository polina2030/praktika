import React from "react"
import "../style.scss"

const  PageMedovik = () => {
    return (
        <div className="main">
            

            <article className="cartochka_tovara">
                <div>
                    <img src= "images/cake_spisok/медовик.png" alt="" className="img_site" />
                </div>
                <div className="tovar">
                    <h2 className="h2_name">Медовик</h2>
                    <p className="p_name">
                        Ароматный медовик с нежным кремом из натуральных сливок и меда.
                    </p>
                    <h3 className="h3_tovar">Состав</h3>
                    <p className="p_name">
                        Мед, сахар, яйца, мука, сливочное масло, сливки 
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        200 гр
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        350 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageMedovik



