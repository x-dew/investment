import React, {useState} from "react";
import './beneficiaries.css'

const BeneficialInput = ({setEditButton}) => {

    const [relatives, setRelatives] = useState(1)
    const [beneficiary, setBeneficiary] = useState(1)
    const [legalForm, setLegalForm] = useState(1)

    return (
        <div className='beneficiaries'>
            <div className='table__buttons'>
                <div className='buttonsBlock'>
                    <button
                        className={relatives === 1 ? 'table__button actionButton' : 'table__button'}
                        onClick={() => setRelatives(1)}
                    >Нет
                    </button>
                    <button
                        className={relatives === 2 ? 'table__button actionButton' : 'table__button'}
                        onClick={() => setRelatives(2)}
                    >Есть
                    </button>
                </div>
                {
                    relatives === 1 ? <svg
                        style={{cursor: 'pointer'}}
                        onClick={() => setEditButton(false)}
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"
                        className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg> : ''
                }

            </div>
            {
                relatives !== 1 ? < div className='table__inputs'>
                    <div className='legalForm'>
                        <p>Организационно-правовая форма</p>
                        <button
                            className={legalForm === 1 ? 'table__button actionButton' : 'table__button'}
                            onClick={() => setLegalForm(1)}
                        >Физ. лицо
                        </button>
                        <button
                            className={legalForm === 2 ? 'table__button actionButton' : 'table__button'}
                            onClick={() => setLegalForm(2)}
                        >ИП
                        </button>
                        <button
                            className={legalForm === 3 ? 'table__button actionButton' : 'table__button'}
                            onClick={() => setLegalForm(3)}
                        >Юр. лицо
                        </button>
                    </div>
                    {
                        legalForm === 1 ? <div>
                            <div className="table__input">
                                <label className="relativesLabel">ФИО:</label>
                                <input
                                    name="dataBorn"
                                    className="tableInput"
                                />
                            </div>
                            <div className="table__input">
                                <label className="relativesLabel">ИНН :</label>
                                <input
                                    name="dataBorn"
                                    className="tableInput"/>
                            </div>
                        </div> : ''
                    }
                    <div className="table__input">
                        <label className="relativesLabel">Реквизиты агентского договора/договора поручения/комиссии/доверительного управления, письма :</label>
                        <textarea
                            name="dataBorn"
                            className="tableInput tableInput__textarea"/>
                    </div>
                    <div className='blockButton'>
                        <h4>Является ли бенефициар ИПДЛ /МПДЛ /РПДЛ</h4>
                        <div className='buttonsBlock'>
                            <button
                                className={beneficiary === 1 ? 'table__button actionButton' : 'table__button'}
                                onClick={() => setBeneficiary(1)}
                            >Нет
                            </button>
                            <button
                                className={beneficiary === 2 ? 'table__button actionButton' : 'table__button'}
                                onClick={() => setBeneficiary(2)}
                            >ИПДЛ

                            </button>
                            <button
                                className={beneficiary === 3 ? 'table__button actionButton' : 'table__button'}
                                onClick={() => setBeneficiary(3)}
                            >МПДЛ
                            </button>
                            <button
                                className={beneficiary === 4 ? 'table__button actionButton' : 'table__button'}
                                onClick={() => setBeneficiary(4)}
                            >РПДЛ
                            </button>
                        </div>
                    </div>
                    <div className='tableInput__button'>
                        <button className='saveButton'>Сохранить</button>
                        <button onClick={() => setEditButton(false)} className='backButton'>Отмена</button>
                    </div>
                </div> : ''
            }
        </div>

    )
}

export default BeneficialInput

