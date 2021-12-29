import NextImage from 'next/image';
import image from '../../public/img/korabl-sudno-tanker-platforma.jpeg';
import Container from './image.styles';

// https://nextjs.org/docs/api-reference/next/image
const Image = () => (
  <Container>
    <NextImage src={image} alt="ship and sea" layout="fill" priority placeholder="blur" />
  </Container>
);

export default Image;
