import { Container , Profile } from './styles'
import { useAuth } from '../../hooks/auth'
import { Input } from '../Input';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export function Header ({ search, setSearch }) {
     
      const { signOut, user } =  useAuth();
      const navigation = useNavigate();

   
      function handleSignOut(){
            navigation("/");
             signOut();
          }
          const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

      return (
            <Container>
                  <h1>RocketMovies</h1>

                  <Input 
                   placeholder='Pesquisar pelo título'
                   type='search'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   />


                  <Profile >


                        <div>
                             <Link to= "/profile" > <strong>{user.name}</strong></Link>
                              <button onClick={handleSignOut}>Sair</button>
                              
                        </div>

                        <img
                               src = { avatarUrl }
                               alt = {user.name}
                        />
                  </Profile>
            </Container>



      );


}