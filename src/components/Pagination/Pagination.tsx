import styles from './styles.module.scss';

interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: IProps) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevArrow}
        type="button"
        onClick={() => onPageChange(prevPage)}
        disabled={prevPage < 1}
        aria-label="Previous page"
      />

      {pageNumbers.map((pageNumber) => (
        <button
          type="button"
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`${styles.currentPage} ${currentPage === pageNumber ? styles.active : ''}`}
          aria-label={styles.currentPage}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={styles.nextArrow}
        type="button"
        onClick={() => onPageChange(nextPage)}
        disabled={nextPage > totalPages}
        aria-label="Next page"
      />
    </div>
  );
};
