import '../styles/pages/Search.css';
import { useState } from 'react';

export default function Search () {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('postagens');

    return (
        <div className="search">
            <h1 className="searchPageTitle">Pesquisa</h1>
            <form className="searchForm">
                    <input 
                        className="searchInput"
                        placeholder="Pesquisar..."
                        type="text"
                    />
                    <button
                        className="searchBtn"
                        type="submit"
                    >Encontrar</button>
            </form>
            <div>
                <button onClick={() => setSearch('postagens')} className={search==='postagens'? 'searchTypeToggled' : 'searchType'}>
                    Postagens
                </button>
                <button onClick={() => setSearch('usuarios')} className={search==='usuarios'? 'searchTypeToggled' : 'searchType'}>
                    Usuários
                </button>
            </div>
            <button className="searchFilter" onClick={() => setOpen(!open)}>
                    <p>Filtros</p>
                    {open ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    }
            </button>
            {open ? 
            <form className="filterForm">
                {search === 'postagens' ? <PostFilter /> : (search === 'usuarios' ? <PostFilterUser /> : <></>) }
                <button
                        className="applyFilterBtn"
                        type="submit"
                    >Aplicar Filtro</button>
            </form>
            :
            <></>
            }
            <div className="resultTitle">
                <p>Resultado de pesquisa para "termo":</p>
            </div>
        </div>
    )
}

function PostFilter () {
    return (
    <div>
        <input 
            className="filterInput"
            placeholder="Usuário..."
            type="text"
        />
        <input 
            className="filterInput"
            placeholder="Nome..."
            type="text"
        />
        <div>
            <div>
                <label className="filterLabel">De:</label>
                <input 
                    className="searchInput"
                    placeholder="Data"
                    type="date"
                />
            </div>
            <div>
                <label className="filterLabel">Até:</label>
                <input 
                    className="searchInput"
                    placeholder="Data"
                    type="date"
                />
            </div>
        </div>
    </div>
    )
}

function PostFilterUser () {
    return (
    <div>
        <input 
            className="filterInput"
            placeholder="Usuário..."
            type="text"
        />
        <input 
            className="filterInput"
            placeholder="Nome..."
            type="text"
        />
    </div>
    )
}