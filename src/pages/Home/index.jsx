import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';



import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { useState, useEffect } from 'react';
import { Container, HeaderPage, Content, Movies } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MoviePreview } from '../../components/MoviePreview'

export function Home ( ) {

  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  
  
 

  useEffect(() => {
    async function fetchMovies() {
        const resp =  await api.get(`/notes?title=${search}`);
     
        setNotes(resp.data);
    }
    fetchMovies();
}, [search]);


  return (
    <Container>
     <Header 
      value={search} setSearch={setSearch}
        />
   

      <main>
        <Content>

          <HeaderPage>
            <h1>Meus filmes</h1>

            <Link to="/new">
              <Button icon={FiPlus} title='Adicionar filme' />
            </Link>

          </HeaderPage>

          <Movies>
            {
              notes.map(note => (
                <MoviePreview
                  key={String(note.id)}
                  description={note.description}
                  rating= {note.rating}
                  data={note}
                  onClick={() => handleDetails(note.id)}

                />
              ))
            }
          </Movies>
        </Content>
      </main>
    </Container>
  )
}