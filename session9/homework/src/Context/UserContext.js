import { createContext } from 'react';
const UserContext = createContext(
    {
        username: '',
        isLogIn: false,
    }
)

export default UserContext;