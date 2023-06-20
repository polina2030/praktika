import React from "react"
import "../style.scss"

const  PageChizcake = () => {
    return (
        <div className="main">
            

            <article className="cartochka_tovara">
                <div>
                    <img src= "../../images/cake_spisok/чизкейк клубничный.png" alt="" className="img_site" />
                </div>
                <div class = "tovar">
                    <h2 className="h2_name">Чизкейк клубничный</h2>
                    <p className="p_name">
                        Он состоит из нежного бисквита, пропитанного клубничным сиропом, <br />
                        и сливочного сыра, который придает ему неповторимый вкус. 
                    </p>
                    <h3 className="h3_tovar">Состав</h3>
                    <p className="p_name">
                        Яйца, мука, сахар, сыр сливочный, сливочное масло, <br />
                        сахарная пудра, клубника, 33%, клубничное пюре
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        210 гр
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        400 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageChizcake



