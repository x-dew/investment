import React, {useState} from "react";
import './choiceOfficial.css'

const ChoiceOfficial = () => {

    const [official, setOfficial] = useState(1)


    return (
        <div className='choiceOfficial'>
            <div className='choiceOfficial__buttons'>
                <button
                    className={official === 1 ? 'choiceOfficial__button actionButton' : 'choiceOfficial__button'}
                    onClick={() => setOfficial(1)}
                >Нет
                </button>
                <button
                    className={official === 2 ? 'choiceOfficial__button actionButton' : 'choiceOfficial__button'}
                    onClick={() => setOfficial(2)}
                >ИПДЛ
                </button>
                <button
                    className={official === 3 ? 'choiceOfficial__button actionButton' : 'choiceOfficial__button'}
                    onClick={() => setOfficial(3)}
                >МПДЛ
                </button>
                <button
                    className={official === 4 ? 'choiceOfficial__button actionButton' : 'choiceOfficial__button'}
                    onClick={() => setOfficial(4)}
                >РПДЛ
                </button>
            </div>
            <div></div>
        </div>
    )
}

export default ChoiceOfficial