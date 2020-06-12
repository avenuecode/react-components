// @flow
import React from 'react';
import classNames from 'classnames';
import { X, AlertTriangle } from 'react-feather';
import Modal from '../Modal';
import Button from '../Button';
import AlternatingText from '../AlternatingText';
import './ConfirmModal.scss';

type Props = {
  /** Boolean describing if the modal should be shown or not. */
  isOpen: boolean,
  /** Function that will be run when the modal is requested to be closed
   * (either by clicking on overlay or pressing ESC). */
  onClose: Function,
  /** Function that will be run when the confirm button is clicked. */
  onConfirm: Function,
  /** String or FormattedMessage to display as Confirm title. */
  title: string | React.Element,
  /** String or FormattedMessage to display as Confirm subtitle. */
  subtitle: string | React.Element,
  /** String or FormattedMessage to display as Confirm disclaimer. */
  disclaimer: string | React.Element,
  /** String className or Array of String classNames to be applied to the modal content. */
  classList?: string | Array<string>,
  /** String to display as the dismiss/close button text. */
  dismissButtonLabel?: string,
  /** String to display as the confirm button text. */
  confirmButtonLabel?: string,
  /** React component to display as icon. Default is a frown icon. */
  dialogIcon?: React.Element,
  /** String to describe confirm type: `danger`, `warning`, or `success`. */
  dialogType?: string,
  /** ARIA attributes to make your `Modal` more accessible.
   * Keys define the attributes you want to set (without the leading aria- prefix).
   * Ex. `{ describedby: 'full_description' }` will use the element with id `full_description`
   * to set a text alternative to the `aria-describedby` attribute.
   */
  ariaAttributes?: object,
};

const ConfirmModal = (props: Props) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    title,
    subtitle,
    disclaimer,
    classList,
    dismissButtonLabel,
    confirmButtonLabel,
    dialogIcon,
    dialogType,
    ariaAttributes,
    ...rest
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      classList={classNames('ac-modal--confirm', classList)}
      contentLabel="Confirm Modal"
      ariaAttributes={ariaAttributes}
      {...rest}
    >
      <div className="modal-content p-5">
        <div className="d-flex justify-content-end">
          <X className="clickable" onClick={onClose} />
        </div>

        <div className="d-flex flex-column text-center pt-5 pb-5">
          <div className={`ac-modal--confirm__icon align-self-center mb-5 text-${dialogType}`}>
            {dialogIcon}
          </div>
          <AlternatingText text={title} separator=" " classList={`ac-modal--confirm__title text-${dialogType}`} />
          <div className="mt-3">
            <h4 className="ac-modal--confirm__subtitle font-weight-bold">{subtitle}</h4>
            <p className="ac-modal--confirm__disclaimer font-size-base text-gray-dark">{disclaimer}</p>
          </div>
        </div>

        <div className="mt-5 d-flex justify-content-end">
          <Button
            classList="ac-modal--confirm__btn-dismiss btn btn-outline-dark m-3"
            style={{ border: 'transparent' }}
            onClick={onClose}
          >
            {dismissButtonLabel}
          </Button>
          <Button classList={`ac-modal--confirm__btn-confirm btn btn-${dialogType} m-3`} onClick={onConfirm}>{confirmButtonLabel}</Button>
        </div>
      </div>
    </Modal>
  );
};

ConfirmModal.defaultProps = {
  classList: '',
  dialogIcon: <AlertTriangle className="feather-64" />,
  dialogType: 'primary',
  dismissButtonLabel: 'Cancel',
  confirmButtonLabel: 'Confirm',
  ariaAttributes: {},
};

ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;
