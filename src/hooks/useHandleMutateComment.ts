import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { updateComment } from '../features/comments/commentsSlice';

export const useHandleMutateComment = (comment) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleMutateComment = (id: number) => {
    dispatch(
      updateComment({
        id,
        comment,
      })
    );
  };

  return { handleMutateComment };
};
