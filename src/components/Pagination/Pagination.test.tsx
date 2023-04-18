import { fireEvent, render } from '@testing-library/react';
import { Pagination } from './Pagination';

test('renders page numbers correctly', () => {
    // correctness of page number generation:
  const totalPages = 5;
  const { getAllByRole } = render(<Pagination currentPage={1} totalPages={totalPages} onPageChange={() => {}} />);
  const pageButtons = getAllByRole('button').filter(button => button.getAttribute('aria-label') !== 'Previous page' && button.getAttribute('aria-label') !== 'Next page');
  expect(pageButtons.length).toBe(totalPages);
  pageButtons.forEach((button, index) => {
    expect(button).toHaveTextContent((index + 1).toString());
  });
});

test('calls onPageChange with the correct page number when a button is clicked', () => {
    // clicking on the button calls the onPageChange function with the correct argument
  const onPageChangeMock = jest.fn();
  const currentPage = 2;
  const totalPages = 5;
  const { getByLabelText } = render(<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChangeMock} />);
  const nextPageButton = getByLabelText('Next page');
  const prevPageButton = getByLabelText('Previous page');
  const secondPageButton = getByLabelText(currentPage.toString());
  fireEvent.click(nextPageButton);
  expect(onPageChangeMock).toHaveBeenCalledWith(currentPage + 1);
  fireEvent.click(prevPageButton);
  expect(onPageChangeMock).toHaveBeenCalledWith(currentPage - 1);
  fireEvent.click(secondPageButton);
  expect(onPageChangeMock).toHaveBeenCalledWith(currentPage);
});

