import React, {useState} from "react";
import './beneficialOwners.css'
import BeneficialOwnersInput from "./beneficialOwnersInput";


const BeneficialOwners = () => {

    const [editButton, setEditButton] = useState(false)

    return (
        <div className='userDataList'>
            <div className='beneficialOwners'>
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
                <div className='beneficialOwners'>
                    {
                        editButton === false ? <h4>Нет</h4> : <BeneficialOwnersInput setEditButton={setEditButton}/>
                    }

                </div>
            </div>
        </div>
    )
}

export default BeneficialOwners