import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Avatar } from './styles'

export function Profile(){
  return(
    <Container>
      <header>
          <Link to= "/"> 
          <ButtonText  title="Voltar" icon={FiArrowLeft}/>
          </Link>
      
      </header>

      <Form>

        <Avatar>
          <img src="http://github.com/JuliaNascF.png" alt="Foto do Usuário" />
          <label htmlFor="Avatar">
            
            <FiCamera />
            
            < input
            id="Avatar"
            type="file">
            </input>

          </label>
        </Avatar>

      <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}/>

        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>

        <Input 
        placeholder="Senha atual"
        type="password"
        icon={FiLock}/>

        <Input 
        placeholder="Nova senha"
        type="password"
        icon={FiLock}/>

        <Button title="Salvar"/>
      </Form>
      
    </Container>
  )
}