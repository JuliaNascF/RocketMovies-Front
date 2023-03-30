import { Container, Form } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

import { Link } from "react-router-dom";

import { Header } from '../../components/Header'
import{ ButtonText } from '../../components/ButtonText'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { MovieItem } from "../../components/MovieItem";
import{ Textarea } from '../../components/Textarea'

export function New(){
return (
<Container>

<Header/>
<main>
    <Form>
    <header>
      <Link to="/">
   <ButtonText title="Voltar" icon={FiArrowLeft}/>
      </Link>

   <h1>Novo Filme</h1>

    </header>

   <div className='InputGroup'>
    <Input placeholder="Título"/>
    <Input type="number" min="0" max="5" placeholder="Sua nota (de 0 a 5)"/>
     </div>

     <Textarea placeholder="Observações"/>

            <div className="Tags">
              <span>Marcadores</span>

              <div className="MoviesTags">
                <MovieItem value="Ficção Científica"/>
                <MovieItem value="Drama"/>
                <MovieItem value="Família"/>
                <MovieItem isNew value="Novo Marcador"/>
              </div>
            </div>

            <div className="button">
              <Button  isActive= {false} title="Excluir Filme"/>
              <Button title="Salvar alterações"/>
            </div>


    </Form>
</main>
</Container>



); 





}