import { Container, Form } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from '../../components/Header'
import{ ButtonText } from '../../components/ButtonText'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { MovieItem } from "../../components/MovieItem";
import{ Textarea } from '../../components/Textarea'

export function New(){
const [rating, setRating] = useState([]);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState("");

const navigate = useNavigate();
function handleBack(){
  navigate(-1);
}

function handleAddTag(){
  setTags(prevState=> [...prevState, newTag]);
  setNewTag("");
}

function handleRemoveTag(deleted){
  setTags(prevState => prevState.filter(tag => tag!== deleted))
 }

async function handleNewMovie(){
  if(!title){
     return alert("Digite o nome do filme")
  }

  if(Number(rating) < 0 || Number(rating) > 5){
    return alert("Digite uma nota entre 0 e 5")
}

  if(!rating){
    return alert("Digite uma nota para o filme de 0 a 5")
 }

  if(newTag){
     return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio. ")
  }

  await api.post("/notes", {
     title,
     description,
     rating,
     tags,
  });

  

  alert("Nota criada com sucesso!");
  navigate(-1);
  
 
}

return (
<Container>

<Header/>
<main>
    <Form>
    <header>
      
   <ButtonText onClick= {handleBack} title="Voltar" icon={FiArrowLeft}/>
   

   <h1>Novo Filme</h1>

    </header>

   <div className='InputGroup'>
    <Input 
    placeholder="Título"
    onChange = { e => setTitle(e.target.value)}
    />
    <Input 
    type="number"
     min="0" max="5"
      placeholder="Sua nota (de 0 a 5)"
      onChange = { e => setRating(e.target.value)}
      />
     </div>

     <Textarea 
     placeholder="Observações"
     onChange = { e => setDescription(e.target.value)}
     />

            <div className="Tags">
              <span>Marcadores</span>

              <div className="MoviesTags">
              {
                  tags.map((tag, index) => (
                      <MovieItem 
                      key={String(index)}
                      value={tag}
                      onClick = {()=>  handleRemoveTag(tag) }
                      
                      />
                  ))
               }
            
            <MovieItem
             isNew 
             placeholder = "Nova tag" 
             onChange = {e => setNewTag(e.target.value)}
             value= {newTag}
             onClick= {handleAddTag}
             />

              </div>
            </div>

            <div className="button">
              <Button  title="Excluir Filme" onClick={handleBack} />
              <Button title="Salvar alterações" onClick = {handleNewMovie}/>
            </div>


    </Form>
</main>
</Container>



); 

}