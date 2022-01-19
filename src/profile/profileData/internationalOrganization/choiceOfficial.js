import React, {useState} from "react";

const ChoiceOfficial = ({setEditButton}) => {

    const [official, setOfficial] = useState(1)


    return (
        <div className='choiceOfficial'>
            <div className='table__buttons'>
                <div className='buttonsBlock'>
                    <button
                        className={official === 1 ? 'table__button actionButton' : 'table__button'}
                        onClick={() => setOfficial(1)}
                    >Нет
                    </button>
                    <button
                        className={official === 2 ? 'table__button actionButton' : 'table__button'}
                        onClick={() => setOfficial(2)}
                    >ИПДЛ
                    </button>
                    <button
                        className={official === 3 ? 'table__button actionButton' : 'table__button'}
                        onClick={() => setOfficial(3)}
                    >МПДЛ
                    </button>
                    <button
                        className={official === 4 ? 'table__button actionButton' : 'table__button'}
                        onClick={() => setOfficial(4)}
                    >РПДЛ
                    </button>
                </div>
                {
                    official === 1 ? <svg
                        style={{cursor:'pointer'}}
                        onClick={() => setEditButton(false)}
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"
                        className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg> : ''
                }

            </div>
            {
                official !== 1 ? < div className='table__inputs'>
                    <div className="table__input">
                        <label className="officialLabel">Должность/титул/звание/сан :</label>
                        <input
                            name="dataBorn"
                            className="tableInput"
                            placeholder='Например, должность'
                        />
                    </div>
                    <div className="table__input">
                        <label className="officialLabel">Страна:</label>
                        <input
                            name="dataBorn"
                            className="tableInput"
                        />
                    </div>
                    <div className="table__input">
                        <label className="officialLabel">Наименование работодателя :</label>
                        <input
                            name="dataBorn"
                            className="tableInput"
                            placeholder='Наименование работодателя'
                        />
                    </div>
                    <div className="table__input">
                        <label className="officialLabel">Адрес работодателя :</label>
                        <input
                            name="dataBorn"
                            className="tableInput"
                            placeholder='Наименование работодателя'
                        />
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

export default ChoiceOfficial