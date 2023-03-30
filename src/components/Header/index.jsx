import { Container , Profile } from './styles'
import { Input } from '../Input';

import { Link } from 'react-router-dom'

export function Header() {
      return (
            <Container>
                  <h1>RocketMovies</h1>

                  <Input 
                   placeholder='Pesquisar pelo título'/>


                  <Profile >


                        <div>
                             <Link to= "/profile" > <strong>Júlia Nascimento</strong></Link>
                              <span>Sair</span>
                        </div>

                        <img
                              src=" https://github.com/JuliaNascF.png"
                              alt="Foto do usuário"
                        />
                  </Profile>
            </Container>



      );


}