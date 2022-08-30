import {Routes, Route, Link} from 'react-router-dom'
import './App.css';

const Content = () => {
    return (
        <div className='Rut'>
        <div className='ContentBlock'>
            <p className='ContentName'>О себе</p>
            <p className='ContentText'> Меня зовут Артём, мне 22 года. Имею среднее специальное образование, закончил КЭИ при УЛГТУ по специальности "Программирование в компьютерных системах". Сейчас учусь на третьем курсе в УЛГТУ по специализации "Автоматизированные системы обработки информации и управления". Проходил курсы в Ульяновске по HTML и CSS, а также самостоятельно изучал JS и React. Сейчас ищу возможность применить знания на практике. Готов выполнить тестовое задание, чтобы продемонстрировать уровень навыков.</p>
        </div>
        <div className='ContentNavBlock'>
            <p className='ContentNavName'>Нвигация по навыкам</p>
            <div>
            <p className='ContentNavText'>Ниже приведено краткое описание навыков.(Кликабельные)</p>
            </div>
            <ul className='ContentUl'>
                <li><Link to='/Html' className='StyleLink'>HTML</Link></li>
                <li><Link to='/Css' className='StyleLink'>CSS</Link></li>
                <li><Link to='/Js' className='StyleLink'>JS</Link></li>
                <li><Link to='/React' className='StyleLink'>REACT</Link></li>
            </ul>
        </div>
        </div>
    )
}

export default Content