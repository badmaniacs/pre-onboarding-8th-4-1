import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch, RootState } from '../../app/store';
import { getComments, updateComment } from '../comments/commentsSlice';
import { commentsAPI } from '../../api/commentsAPI';
import { setFormData } from './formSlice';

const Form = () => {
  const profileRef = useRef(null);
  const authorRef = useRef(null);
  const contentRef = useRef(null);
  const createdAtRef = useRef(null);

  const formData = useSelector((state: RootState) => state.form.payload);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const comment = {
      profile_url: profileRef.current.value,
      author: authorRef.current.value,
      content: contentRef.current.value,
      createdAt: createdAtRef.current.value,
    };

    if (formData.id === -1) {
      commentsAPI.post(`/comments`, comment).then(() => {
        dispatch(getComments({ url: '/comments?_page=1&_limit=4&_order=desc&_sort=id' }));
      });
    } else {
      dispatch(updateComment({ id: formData.id, comment })).then(() => {
        dispatch(setFormData({ id: -1, author: '', content: '' }));
      });
    }

    authorRef.current.value = '';
    contentRef.current.value = '';
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          defaultValue={formData.profile_url}
          required
          ref={profileRef}
        />
        <br />
        <input type="text" name="author" placeholder="작성자" ref={authorRef} defaultValue={formData.author} />
        <br />
        <textarea name="content" placeholder="내용" required ref={contentRef} defaultValue={formData.content} />
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          ref={createdAtRef}
          defaultValue={formData.createdAt}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
