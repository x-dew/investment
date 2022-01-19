import React, {useState} from "react";
import './beneficiaries.css'
import BeneficialInput from "./beneficialInput";

const Beneficiaries = () => {

    const [editButton, setEditButton] = useState(false)

    return(
        <div className='userDataList'>
            <div className='beneficiaries'>
                <div className='table__title'>
                    <p>
                        Наличие бенефициарных владельцев
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
                <div className='beneficial'>
                    {
                        editButton === false ? <h4>Нет</h4> : <BeneficialInput setEditButton={setEditButton}/>
                    }

                </div>
            </div>
        </div>
    )
}

export default Beneficiaries