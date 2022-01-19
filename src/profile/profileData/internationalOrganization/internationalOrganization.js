import React, {useState} from "react";
import ChoiceOfficial from "./choiceOfficial";

const InternationalOrganization = () => {

    const [editButton, setEditButton] = useState(false)


    return (
        <div className='userDataList'>
            <div className='internationalOrganization'>
                <div className='table__title'>
                    <p>
                        Являетесь ли вы иностранным публичным должностным лицом (ИПДЛ), должностным лицом публичной
                        международной организации (МПДЛ) или российским публичным должностным лицом (РПДЛ) (пункт 1
                        статьи 7.3 Закона № 115-ФЗ)
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
                <div className='choiceOfficial'>
                    {
                        editButton === false ? <h4 style={{color:'#1fc31f'}}>Нет</h4> : <ChoiceOfficial setEditButton={setEditButton}/>
                    }

                </div>
            </div>
        </div>
    )
}

export default InternationalOrganization