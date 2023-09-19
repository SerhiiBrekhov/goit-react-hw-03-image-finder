import { Component } from 'react';
import { Overlay, ModalDiv } from './modal.styled';
import { createPortal } from 'react-dom';
// import style from './modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modalka extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
      console.log(event);
    }
  };

  handleBackdropClick = e => {
    e.target === e.currentTarget && this.props.toggleModal();
  };

  render() {
    const { modalImage, imageAlt } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalDiv>
          <img src={modalImage} alt={imageAlt} />
        </ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}

Modalka.propTypes = {
  modalImage: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Modalka;
