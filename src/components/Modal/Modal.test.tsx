import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  test('renders with children when open', () => {
    // the content of the component is rendered when isOpen true
    render(
      <Modal isOpen={true} onClose={() => {}} clearBasket={() => {}}>
        <div>Child content</div>
      </Modal>
    );

    const childContent = screen.getByText('Child content');
    expect(childContent).toBeInTheDocument();
  });

  test('does not render when closed', () => {
    // the component is not rendered when isOpen is set to false
    render(
      <Modal isOpen={false} onClose={() => {}} clearBasket={() => {}}>
        <div>Child content</div>
      </Modal>
    );

    const childContent = screen.queryByText('Child content');
    expect(childContent).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    // when you click on the close button of the modal window, the onClose function is called
    const onCloseMock = jest.fn();

    render(
      <Modal isOpen={true} onClose={onCloseMock} clearBasket={() => {}}>
        <div>Child content</div>
      </Modal>
    );

    const closeButton = screen.getByRole('button', { name: 'X' });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('calls clearBasket when close button is clicked and clearBasket is provided', () => {
    // when you click on the close button of the modal window, the clearBasket function is called
    const onCloseMock = jest.fn();
    const clearBasketMock = jest.fn();

    render(
      <Modal isOpen={true} onClose={onCloseMock} clearBasket={clearBasketMock}>
        <div>Child content</div>
      </Modal>
    );

    const closeButton = screen.getByRole('button', { name: 'X' });
    fireEvent.click(closeButton);

    expect(clearBasketMock).toHaveBeenCalledTimes(1);
  });
});
