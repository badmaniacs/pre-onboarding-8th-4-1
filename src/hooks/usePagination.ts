import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { getComments } from '../features/comments/commentsSlice';

export const usePagination = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePagination = (idx: number) => {
    dispatch(getComments({ url: `/comments?_page=${idx}&_limit=4&_order=desc&_sort=id` }));
  };

  return { handlePagination };
};
