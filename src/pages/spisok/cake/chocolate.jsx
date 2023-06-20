import React from "react"
import "../style.scss"

const  PageChocolate = () => {
    return (
        <div className="main">
            

            <article className="cartochka_tovara">
                <div>
                    <img src= "images/cake_spisok/торт шоколадный с вишней.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Шоколадный с пряной вишней </h2>
                    <p className="p_name">
                        Это настоящее блаженство для любителей шоколада. 
                        Нежный бисквит, <br /> пропитанный ароматным сиропом, в сочетании 
                        с шоколадным кремом и <br /> свежей пряной вишней создают неповторимый 
                        вкус и аромат
                    </p>
                    <h3 className="h3_tovar">Состав</h3>
                    <p className="p_name">
                        Яйца, сахар, мука, вишня, сметана, сгущенное молоко, шоколад, сливки
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        300 гр
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        450 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageChocolate



