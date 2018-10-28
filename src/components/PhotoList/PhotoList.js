import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';

import ColorCard from './ColorCard';

const Wrapper = styled.div`
  padding: 10px;
`;

export class PhotoList extends Component {
  static propTypes = {
    photos: PropTypes.array,
    fetchPhotos: PropTypes.func,
  };

  state = {
    loading: false,
  };

  render() {
    return (
      <Wrapper>
        {this.props.photos.map(photo => (
          <ColorCard key={photo.src} photo={photo} />
        ))}
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <Button onClick={this.handleFetchPhotos}>
            <span>Fetch more photos!</span>
          </Button>
        )}
      </Wrapper>
    );
  }

  handleFetchPhotos = async () => {
    this.setState({ loading: true });

    await this.props.fetchPhotos();

    this.setState({ loading: false });
  };
}
