import React, {useState} from "react";
import RelativesInput from "./relativesYourInput";

const RelativesYour = () => {

    const [editButton, setEditButton] = useState(false)


    return (
        <div className='userDataList'>
            <div className='relativesYour'>
                <div className='relativesYour__title'>
                    <p>
                        Имеете ли вы супруга/супругу или близких родственников (родителей, детей, дедушку (бабушку),
                        внуков, полнородных или неполнородных братьев (сестер), усыновителей и усыновленных) со статусом
                        ИПДЛ/МПДЛ/РПДЛ (подпункт 1 пункта 1 статьи 7.3 Закона № 115-ФЗ)
                    </p>
                    {
                        editButton === false ? <div className='editButton'>
                            <button
                                onClick={() => setEditButton(true)}
                            >Редактировать
                            </button>
                        </div> : ''
                    }

                </div>
                <div className='relativesYour'>
                    {
                        editButton === false ? <h4>Нет</h4> : <RelativesInput setEditButton={setEditButton}/>
                    }

                </div>
            </div>
        </div>
    )
}

export default RelativesYour