import Feed from './Feed';
import { useContext } from 'react';
import DataContext from "./context/DataContext"

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'>Loading posts...</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
        
        </main>
    )
}

export default Home