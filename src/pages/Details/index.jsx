import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { useState, useEffect } from "react";
import moment from 'moment';


import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api.js";

import { Container, Tagline, HeaderMovie, Content } from "./styles"

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'



export function Details (){
  const { user } =  useAuth();
  const [data, setData] = useState("");
  const [dateFormatted, setDateFormatted] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

 async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?")
    if(confirm){
     await api.delete(`/notes/${params.id}`);
     navigate(-1);
    }
  }


  useEffect(()=> {
   async function fetchNote(){
    const response = await api.get(`/notes/${params.id}`);
    setData(response.data)
   }

   fetchNote();

  }, [])

  useEffect(() => {
    if (data.updated_at) {
      const initialFormat = data.updated_at;
      const momentDate = moment(initialFormat).subtract(3, 'hours');
      setDateFormatted({
        date: momentDate.format('DD/MM/YYYY'),
        hour: momentDate.format('HH:mm'),
      });
    }
  }, [data]);


  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;


    return (
        <Container>
      <Header />

{


      <main>
        <Content>
          
            <div className="buttonText">

            <ButtonText onClick = {handleBack} title='Voltar' icon={FiArrowLeft} />
            <ButtonText onClick={handleRemove} title= "Excluir Filme"/>
            </div>
         
          
          <HeaderMovie>
            
            <div className='TitleRating'>
            <h1> {data.title} </h1>
              <Rating grade={data.rating} isBigSize/>
            </div>

            <div className='UserData'>
              <img src={ avatarUrl } alt="Foto do Usuário da nota" />
              <span>Por {user.name}</span> 
              <FiClock />
              {dateFormatted && (
                  <span>
                    {dateFormatted.date} ás {dateFormatted.hour}
                  </span>
                    )}
            </div>

          </HeaderMovie>


          <Tagline>
          {data.tags && data.tags.map(tag => (
    <Tag key={tag.id} title={tag.name} />
  ))}
          </Tagline>

         <p>

         {data.description}
         </p>
         
        
        
        </Content>
      </main>
      }
    </Container>
    )
}