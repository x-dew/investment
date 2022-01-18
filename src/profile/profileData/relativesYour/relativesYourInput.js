import React, {useState} from "react";
import './relativesYour.css'


const RelativesInput = ({setEditButton}) => {

    const [relatives, setRelatives] = useState(1)
    const [husbandWife,setHusbandWife] = useState(1)


    return (
        <div className='relativesName'>
            <div className='relativesName__buttons'>
                <div className='buttonsBlock'>
                    <button
                        className={relatives === 1 ? 'relativesName__button actionButton' : 'relativesName__button'}
                        onClick={() => setRelatives(1)}
                    >Нет
                    </button>
                    <button
                        className={relatives === 2 ? 'relativesName__button actionButton' : 'relativesName__button'}
                        onClick={() => setRelatives(2)}
                    >ИПДЛ
                    </button>
                    <button
                        className={relatives === 3 ? 'relativesName__button actionButton' : 'relativesName__button'}
                        onClick={() => setRelatives(3)}
                    >МПДЛ
                    </button>
                    <button
                        className={relatives === 4 ? 'relativesName__button actionButton' : 'relativesName__button'}
                        onClick={() => setRelatives(4)}
                    >РПДЛ
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
                relatives !== 1 ? < div className='relativesName__inputs'>
                    <div className="relativesName__input">
                        <label className="relativesLabel">ФИО супруга /супруги или близких родственников:</label>
                        <input
                            name="dataBorn"
                            className="relativesInput"
                        />
                    </div>
                    <div className='husband__wife'>
                        <p>Степень родства</p>
                        <button
                            className={husbandWife === 1 ? 'relativesName__button actionButton' : 'relativesName__button'}
                            onClick={() => setHusbandWife(1)}
                        >муж
                        </button>
                        <button
                            className={husbandWife === 2 ? 'relativesName__button actionButton' : 'relativesName__button'}
                            onClick={() => setHusbandWife(2)}
                        >жена
                        </button>
                    </div>
                    <div className="relativesName__input">
                        <label className="relativesLabel">Должность/титул/звание/сан :</label>
                        <input
                            name="dataBorn"
                            className="relativesInput"
                            placeholder='Например, должность'
                        />
                    </div>
                    <div className="relativesName__input">
                        <label className="relativesLabel">Страна:</label>
                        <input
                            name="dataBorn"
                            className="relativesInput"
                        />
                    </div>
                    <div className="relativesName__input">
                        <label className="relativesLabel">Наименование работодателя :</label>
                        <input
                            name="dataBorn"
                            className="relativesInput"
                            placeholder='Наименование работодателя'
                        />
                    </div>
                    <div className="relativesName__input">
                        <label className="relativesLabel">Адрес работодателя :</label>
                        <input
                            name="dataBorn"
                            className="relativesInput"
                            placeholder='Наименование работодателя'
                        />
                    </div>
                    <div className='relativesInput__button'>
                        <button className='saveButton'>Сохранить</button>
                        <button onClick={() => setEditButton(false)} className='backButton'>Отмена</button>
                    </div>
                </div> : ''
            }
        </div>
    )
}

export default RelativesInput