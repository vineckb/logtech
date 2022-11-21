
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'

export function Dashboard(){

    const {user,signed} = useContext(AuthContext)
    const navigate = useNavigate()
    if(!signed){
        navigate('/')
    }
    return(
        <div>
            <h1>Usuario Logado</h1>
            <span>{user?.token}</span> <br />
            <span>{user?.tipo}</span>
            <span>{signed}</span>
        </div>
    )
}