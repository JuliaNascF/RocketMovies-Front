import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';



import { Container, HeaderPage, Content, Movies } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MoviePreview } from '../../components/MoviePreview'

export function Home() {
  return (
    <Container>
    <Header />  

      <main>
        <Content>

            <HeaderPage>
              <h1>Meus filmes</h1>
           
               <Link to="/new">
                <Button icon={FiPlus} title='Adicionar filme' />
               </Link>
            
            </HeaderPage>

            <Movies>
              <MoviePreview data={{
                  title: 'Interestellar',
                  tags: [
                    {id: '1', name: 'Ficção Científica'},
                    {id: '3', name: 'Drama'},
                    {id: '2', name: 'Familia'}
                  ]
              }}/>
              <MoviePreview data={{
                  title: 'Interestellar',
                  tags: [
                    {id: '1', name: 'Ficção Científica'},
                    {id: '3', name: 'Drama'},
                    {id: '2', name: 'Familia'}
                  ]
              }}/>
              <MoviePreview data={{
                  title: 'Interestellar',
                  tags: [
                    {id: '1', name: 'Ficção Científica'},
                    {id: '3', name: 'Drama'},
                    {id: '2', name: 'Familia'}
                  ]
              }}/>
            </Movies>
        </Content>
      </main>
  </Container>
  )
}