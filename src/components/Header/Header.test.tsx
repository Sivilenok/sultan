import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
  // when the user enters a new value
  it('updates the search value', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText(/поиск/i);
    userEvent.type(searchInput, 'test');
    expect(searchInput).toHaveValue('test');
  });

  it('changes the search value when the select input changes', () => {
    // selecting a new search type from the drop-down list
    render(<Header />);
    const selectInput = screen.getByLabelText(/поиск по/i);
    userEvent.selectOptions(selectInput, 'name');
    const searchInput = screen.getByPlaceholderText(/поиск/i);
    userEvent.type(searchInput, 'test');
    expect(searchInput).toHaveValue('test');
  });

  it('updates the mobile menu on resize', () => {
    // the menu for mobile devices switches
    render(<Header />);
    expect(screen.getByAltText(/burger/i)).toBeInTheDocument();
    global.innerWidth = 800;
    fireEvent(window, new Event('resize'));
    expect(screen.queryByAltText(/burger/i)).not.toBeInTheDocument();
  });
});
