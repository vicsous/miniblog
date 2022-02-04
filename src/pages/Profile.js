import '../styles/pages/Profile.css';
import {useState} from 'react';

export default function Profile () {
    const [list, setList] = useState('postagens');
    return (
        <div className="profile">
            <h1 className="profilePageTitle">Perfil</h1>

            <div className="friend">
                <div className="profileInfo">
                    <img alt="profileAvatar" className="profileAvatar" src="https://www.w3schools.com/howto/img_avatar.png"/>
                    <div className="profileInfos">
                        <strong className="friendName">João Silva</strong>
                        <p className="friendUsername">@josilva</p>
                    </div>
                </div>
            
                <div className="friendBottom">
                    <div className="friendPostInfo">
                        <p className="friendPostDate">Membro desde 21/12/2021</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => setList('postagens')} className={list==='postagens'? 'searchTypeToggled' : 'searchType'}>
                    Postagens (132)
                </button>
                <button onClick={() => setList('amigos')} className={list==='amigos'? 'searchTypeToggled' : 'searchType'}>
                    Amigos (25)
                </button>
            </div>
        </div>
    )
}