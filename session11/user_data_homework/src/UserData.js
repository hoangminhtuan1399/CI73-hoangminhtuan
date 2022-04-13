import { useParams } from "react-router-dom";

const UserData = ({userList}) => {
    const params = useParams();
    const userData = userList.filter((item) => item.id == params.userId)[0];
    console.log(userData)
    return (
        <div className="user__data">
            {userData != null ?
                <div>
                    <h2>User data</h2>
                    <ul>
                        <li>Id: {userData.id}</li>
                        <li>Name: {userData.name}</li>
                        <li>Username: {userData.username}</li>
                        <li>Phone: {userData.phone}</li>
                        <li>Website: {userData.website}</li>
                        <li>Email: {userData.email}</li>
                        <li>Company: 
                            <ul>
                                <li>Name: {userData.company.name}</li>
                                <li>Bs: {userData.company.bs}</li>
                                <li>Catch Phrase: {userData.company.catchPhrase}</li>
                            </ul>
                        </li>
                        <li>Address: 
                            <ul>
                                <li>City: {userData.address.city}</li>
                                <li>Street: {userData.address.street}</li>
                                <li>Suite: {userData.address.suite}</li>
                                <li>Zip Code: {userData.address.zipcode}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                :
                <h2>User ID not found</h2>
            }
        </div>
    )
}

export default UserData;