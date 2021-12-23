import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { AuthContext } from '../../App';

function Home(props) {
    const { setLoggedIn } = useContext(AuthContext);
    const logout = () => {
        setLoggedIn(false);
    };
    return (
        <div className="app centered">
            <Button onClick={logout} color="red">
                LOG OUT
            </Button>
        </div>
    );
}

export default Home;