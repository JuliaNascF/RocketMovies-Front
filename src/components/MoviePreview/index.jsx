import { Container, Tagline } from "./styles";
import { Tag } from '../Tag'
import { Rating } from '../Rating'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

export function MoviePreview({ data, title, rating, description, tags, ...rest }){
  const limitedDescription = description.slice(0, 85) + (description.length > 85? '...' : '');

  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Rating grade={rating} />

      <p>
        {limitedDescription}
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