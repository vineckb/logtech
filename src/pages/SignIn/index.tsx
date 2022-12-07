
import './signin.css'
import logoFooter from '../../assets/logo_footer.svg';
import logo from '../../assets/logo.svg';
import { toast } from 'react-toastify';
import { api } from '../../service/api';
import { Link,useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { useState,FormEvent } from 'react';
import { AuthContext } from '../../contexts/auth';



export function SignIn(){
    
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();
    const {saveAuth,signed} = useContext(AuthContext)

    async function handleSubmi(e:FormEvent){
        e.preventDefault()

        if(user.length <= 0){
            toast.warning('Digite o Usuário.')
            return
        }

        if(password.length <= 0){
            toast.warning('Digite uma senha.')
            return
        }

        setLoading(true)

        await api.post('/authorization',{user,password})
        .then((response)=>{
            setLoading(false)
            
           navigate('/painel')

           console.log(response.data.content.token)
            let user_login = {
                "token": response.data.content.token,
                "tipo": response.data.content.tipo
            }
            saveAuth(user_login)
                  
            toast.success(response.data.mensagem)
        }).catch((error) => {
            setLoading(false)
            toast.error(error.response.data.mensagem)
        })

    }

    if(signed){
        navigate('/painel')
    }

    return(
        <div className='container-signin'>
            <div className='login-container'> 
                <div className='logo-header'>
                    <img  className='logo' src={logo}  alt='Logo Logtech'/>
                    <span className='login-footer-version'>Versão 1.0.2</span>
                </div>

               <div className='login-form-box'>
                    <span className='login-title'>Login</span>
                    <span className='login-description'>Entre com sua credencial de login</span>

                    <form onSubmit={handleSubmi}>
                        <div className='login-input-form'>
                            <input type='text' placeholder='E-mail' value={user} onChange={(e) => setUser(e.target.value)} />
                            <input  type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                            
                            {
                                loading? <button disabled className='btnEnter'>Carregando...</button>:  <button className='btnEnter'>Entrar</button>
                            }

                        </div>
                    </form>

                    <span className='login-form-footer-line'></span>
                  
                    <Link to='#' className='login-form-recovery-password'>Esqueci minha senha</Link>
               </div>

                <div  className='login-footer-container'>
                <img  className='login-footer-logo' src={logoFooter} alt='Logo logtech' />
                <span className='login-footer-version'>Versão 1.0.2</span>
                </div>
            </div>

            <div className='logo-container'>
                <img  className='logo' src={logo} alt='Logo Logtech'/>
            </div>
        </div>
    )
}