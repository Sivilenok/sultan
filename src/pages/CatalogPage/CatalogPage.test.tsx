import { render, screen } from '@testing-library/react';
import { CatalogPage } from './CatalogPage';

describe('CatalogPage', () => {
  test('renders mobile view correctly', () => {
    // Arrange
    window.innerWidth = 500;

    // Act
    render(<CatalogPage />);

    // Assert
    const title = screen.getByText('Косметика и гигиена');
    expect(title).toBeInTheDocument();
    const productList = screen.getByRole('list');
    expect(productList).toBeInTheDocument();
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders desktop view correctly', () => {
    // Arrange
    window.innerWidth = 1024;

    // Act
    render(<CatalogPage />);

    // Assert
    const title = screen.getByText('Косметика и гигиена');
    expect(title).toBeInTheDocument();
    const filters = screen.getAllByRole('button');
    expect(filters.length).toBeGreaterThan(0);
    const productList = screen.getByRole('list');
    expect(productList).toBeInTheDocument();
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('can filter products by category', () => {
    // Arrange
    render(<CatalogPage />);
    const filters = screen.getAllByRole('button');
    const filterToClick = filters[0];

    // Act
    filterToClick.click();

    // Assert
    const products = screen.getAllByRole('listitem');
    const firstProduct = products[0];
    expect(firstProduct).toHaveTextContent('Уход за телом');
  });

  test('can change pagination page', () => {
    // Arrange
    render(<CatalogPage />);
    const nextPageButton = screen.getByTitle('Следующая страница');

    // Act
    nextPageButton.click();

    // Assert
    const currentPageButton = screen.getByRole('button', { name: /2/i });
    expect(currentPageButton).toHaveAttribute('aria-current', 'page');
  });
});


