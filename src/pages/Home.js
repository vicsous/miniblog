import '../styles/pages/Home.css';
import NewPost from '../components/NewPost';

export default function Home () {
    return (
        <div className="feed">
            <NewPost />
            <button className="fetchMore">
                Carregar novas postagens
            </button>

            {/* Post */}
            <div className="feedPost">
                <button className="poster">
                    <img alt="postAvatar" className="postAvatar" src="https://www.w3schools.com/howto/img_avatar.png"/>
                    <div className="posterInfo">
                        <strong className="name">João Silva</strong>
                        <p className="username">@josilva</p>
                    </div>
                </button>

                <p className="postText">Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Testei.</p>
            
                <div className="postBottom">
                    <div className="postInfo">
                        <p className="postDate">Postado em 21/12/2021 às 20:38</p>
                    </div>
                </div>

                {true ? <></> :
                <div className="postMiddle">
                    <button className="likeBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <p className="postLikeCounter">58</p>
                    </button>
                    
                    <button className="postMenuBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
                }
            </div>

            {/* Post */}
            <div className="feedPost">
                <button className="poster">
                    <img alt="postAvatar" className="postAvatar" src="https://www.w3schools.com/howto/img_avatar.png"/>
                    <div className="posterInfo">
                        <strong className="name">João Silva</strong>
                        <p className="username">@josilva</p>
                    </div>
                </button>

                <p className="postText">Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Testei.</p>
            
                <div className="postBottom">
                    <div className="postInfo">
                        <p className="postDate">Postado em 21/12/2021 às 20:38</p>
                    </div>
                </div>

                {true ? <></> :
                <div className="postMiddle">
                    <button className="likeBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <p className="postLikeCounter">58</p>
                    </button>
                    
                    <button className="postMenuBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
                }
            </div>

            <button className="fetchMore">
                Carregar postagens mais antigas
            </button>
        </div>
    )
}