import '../styles/pages/Home.css';
import '../styles/pages/Friends.css';

export default function Friends () {
    return (
        <div className="friends">
            <h1 className="friendsPageTitle">Amigos (5)</h1>
            {/* Friend */}
            <div className="friend">
                <button className="friendInfo">
                    <img alt="postAvatar" className="friendAvatar" src="https://www.w3schools.com/howto/img_avatar.png"/>
                    <div className="posterInfo">
                        <strong className="friendName">João Silva</strong>
                        <p className="friendUsername">@josilva</p>
                    </div>
                </button>
            
                <div className="friendBottom">
                    <div className="friendInfo">
                        <p className="friendDate">Amigo desde 21/12/2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}