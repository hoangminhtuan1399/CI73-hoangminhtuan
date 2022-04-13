import axios from 'axios';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Home = ({userList, callbackUserList}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    callbackUserList(res.data);
                });
            setIsLoading(false);
        }
        catch {
            setError(true);
            setIsLoading(false);
        }
    }
    const activeLink = (params) => {
        return params.isActive ? "link-active" : "link";
    }
    return (
        <div className="home">
            <h1>UserData</h1>
            <button onClick={handleFetch}>Fetch userdata!</button>         
            {isLoading === true && error === false &&
                <h2>Loading...</h2>
            }
            {isLoading === false && userList.length === 0 && <h2>You need to fetch data first</h2> }
            {isLoading === false && error === false && userList.length > 0 &&
                <div className='user__container'>
                    <ul className='user__list'>
                        <h2>User name</h2>
                        {userList.map((item) => {
                            return <li key={item.id}><NavLink className={activeLink} to={`${item.id}`}>{item.id}. {item.name}</NavLink></li>
                        })}
                    </ul>
                    <Outlet />
                </div>
            }
            {isLoading === false && error === true &&
                <h2>Something went wrong :(</h2>
            }         
        </div>
    )
}

export default Home;