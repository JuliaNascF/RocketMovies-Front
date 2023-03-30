import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import { Container } from './styles'

export function Rating({ rate }) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    let star = i < rate ? AiTwotoneStar :  AiOutlineStar

    stars.push(star)
  }

  return (
    <Container>
      {stars.map((Star, i) => (
        <Star key={i} />
      ))}
    </Container>
  )
}