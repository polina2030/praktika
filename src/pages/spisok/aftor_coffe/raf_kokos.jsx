import React from "react"
import "../style.scss"

const  PageRaf_kokos = () => {
    return (
        <div className="main">
            

            <article className="cartochka_tovara">
                <div>
                    <img src= "../../images/coffee_spisok/раф малина кокос.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Раф Малина-кокос</h2>
                    <p className="p_name">
                        Это идеальный напиток для любителей экзотических вкусов. <br />
                        Сочетание сладкой малины и нежного кокоса создает <br /> неповторимый 
                        аромат, который не оставит вас равнодушным.
                    </p>
                    <h3 className="h3_tovar">Состав</h3>
                    <p className="p_name">
                        Свежемолотый кофе, кокосовые сливки, малиновый сироп, корица
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        450 мл
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
export default PageRaf_kokos



