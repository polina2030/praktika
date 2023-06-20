import React from "react"
import "../style.scss"

const  PageRaf_kaktus = () => {
    return (
        <div className="main">
            

            <article className="cartochka_tovara">
                <div>
                    <img src= "../../images/coffee_spisok/раф дыня кактус.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Раф Кактус-дыня</h2>
                        <p className="p_name">
                            Это раф, в котором оказались сладость сочной дыни <br /> и свежесть дерзкого кактуса.
                            Для баланса и мира мы <br /> добавили в напиток посыпку роза - морозная клюква.
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
export default PageRaf_kaktus



