import {Routes, Route, Link} from 'react-router-dom'
import './App.css';


const Html = () =>{
    return(
        <div className='HtmlBlock'>
            <p className='HtmlName'>HTML</p>
            <ul className='HtmlUl'>
                <li>знаю понятие потока документа;</li>
                <li>знаю отличие блочного и строчного элементов;</li>
                <li>использую HTML-теги в соответствии с их семантикой.</li>
            </ul>
        </div>
    )
}

export default Html