import { MutableRefObject, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentsAPI } from '../api/commentsAPI';
import { AppDispatch } from '../app/store';
import { updateComment } from '../features/comments/commentsSlice';

export const useToggleEditMode = (ref: MutableRefObject<any>) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isEdit, setIsEdit] = useState({ id: -1, mode: false });

  const handleMutateComment = (id: number) => {
    dispatch(
      updateComment({
        id,
        comment: { content: ref.current.value },
      })
    );

    setIsEdit({ id: -1, mode: false });
  };

  return { handleMutateComment, isEdit, setIsEdit };
};
