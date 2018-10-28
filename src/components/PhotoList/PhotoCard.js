import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PhotoPreview = styled.img`
  max-height: 500px;
  border-radius: 10px;
`;

export default function PhotoCard({ src, caption }) {
  return (
    <Wrapper>
      <h2>{caption}</h2>
      <PhotoPreview src={src} />
    </Wrapper>
  );
}

PhotoCard.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
};
