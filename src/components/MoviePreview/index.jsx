import { Container, Tagline } from "./styles";
import { Tag } from '../Tag'
import { Rating } from '../Rating'

export function MoviePreview({ data, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Rating></Rating>

      <p>
      Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
      </p>

      {
        data.tags &&
        <Tagline>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </Tagline>
      }



    </Container>
  )
};