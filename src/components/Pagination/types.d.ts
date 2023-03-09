export interface IPagination {
  limit: number;
  currentPage: number;
  itemsPerPage: number;
  nextClick: () => void;
  prevClick: () => void;
}
