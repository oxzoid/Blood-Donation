import { useEffect, useState } from 'react';
import axios from 'axios';

function Home(){
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:27017/donors')
            .then(result => {
                console.log("User Info from server:", result.data);
                setUserInfo(result.data);
            })
            .catch(err => console.log("Error fetching user info:", err));
    }, []);

    return(
        <div>
             <div>
            {userInfo ? (
                <>
                    <p>Blood Type: {userInfo.btype}</p>
                </>
            ) : (
                <p>Loading user information...</p>
            )}
        </div>
            Home
        </div>
    )
}

export default Home;