import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Profile from './Profile.jpg'

const Header = () => {
    return(
        <div className='Header_Sh'>
            <img src={Profile} className='Header_img'></img>
            <div className='HeaderBlockText'>
                <p className='HederName'>Иевлев Артём</p>
                <p className='HederUs'>Я занимаюсь Frontend разработкой, графикой и немного монтажом. </p>
                <p className='Heder_text'>Мои социальные сети:</p>
                <p><a href='*'>Instagram</a> <a href='https://vk.com/oxrasb'>ВКонтакте</a></p>
            </div>
        </div>
    )
}


export default Header