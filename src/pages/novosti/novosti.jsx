import React from "react"
import "./style.scss"
const PageNovosti = () => {
    return (
        <div className="main">

            <div className = "logo_novosti">
                <h3 className = "logo_logo">Новости</h3>
            </div>
            <article>
                <div className="abzac_novosti">
                    <h3>Акция на кофе</h3>
                    <p className="time">06.06.2023 13:22</p>
                    <p className="name_abzac">
                        Кофейня «Hot Coffee» в центре города приглашает
                        всех любителей кофе на новую акцию! Теперь 
                        каждый пятый кофе вы получаете бесплатно! 
                        Акция действует до конца месяца. Не упустите 
                        возможность насладиться ароматным напитком по 
                        выгодной цене!
                    </p>
                </div>
            </article>
            <article>
                <div className="abzac_novosti">
                    <h3>Конкурс</h3>
                    <p className="time">04.06.2023 10:18</p>
                    <p className="name_abzac">
                        Кофейня "Hot Coffee" объявляет о новом 
                        конкурсе для своих подписчиков в социальных 
                        сетях! Каждый, кто сделает заказ на сумму от 
                        700 рублей в течение следующей недели, получит 
                        возможность выиграть один из трех призов: кружку
                        с логотипом кофейни, футболку с изображением 
                        любимого напитка или скидку на следующий заказ.
                        Конкурс продлится до конца недели, так что не 
                        упустите свой шанс!
                    </p>
                </div>
            </article>
            <article className="bezOtstupov">
                <div className="abzac_novosti">
                    <h3>Акция на десерты</h3>
                    <p className="time">10.06.2023 17:20</p>
                    <p className="name_abzac">
                        Кофейня "Hot Coffee" объявляет о новой акции! 
                        Каждый, кто закажет любой напиток из меню, 
                        получит бесплатный десерт на выбор. Акция 
                        действует только в течение этой недели. 
                        Спешите попробовать новые десерты и насладиться 
                        ароматным кофе!
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageNovosti



