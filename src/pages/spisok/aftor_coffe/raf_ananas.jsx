import React from "react"
import "../style.scss"

const  PageRaf_ananas = () => {
    return (
        <div className="main">
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/coffee_spisok/раф ананас в карамели.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Раф Ананас в карамели</h2>
                        <p className="p_name">
                            Карамель придает кофе мягкий и сладкий вкус, а ананас 
                            добавляет <br /> приятную кислинку и освежающий аромат. 
                            Этот напиток идеально <br /> подходит для тех, кто любит 
                            экспериментировать с вкусами и <br /> наслаждаться новыми сочетаниями.
                        </p>
                    <h3 className="h3_tovar">Состав</h3>
                        <p className="p_name">
                            Свежемолотый кофе, кокосовое молоко, сливки, ананасовый сироп, карамельный сироп
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
export default PageRaf_ananas



