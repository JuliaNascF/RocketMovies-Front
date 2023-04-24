import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import { Container } from './styles'

export function Rating( { grade, isBigSize} ) {
    let stars = [];
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<AiTwotoneStar key={cont} />);
    } else {
      stars.push(<AiOutlineStar key={cont} />);
    }
  }

  return (
    <Container risBigSize={isBigSize}>{stars}
  </Container>
  )
}