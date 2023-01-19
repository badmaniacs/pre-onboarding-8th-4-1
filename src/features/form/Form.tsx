import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch, RootState } from '../../app/store';
import { getComments, updateComment } from '../comments/commentsSlice';
import { commentsAPI } from '../../api/commentsAPI';
import { resetForm, setFormData } from './formSlice';

const Form = () => {
  const formData = useSelector((state: RootState) => state.form.payload);

  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = { ...formData };
    delete payload.id;

    if (formData.id === -1) {
      commentsAPI.post(`/comments`, payload).then(() => {
        dispatch(getComments({ url: '/comments?_page=1&_limit=4&_order=desc&_sort=id' }));
      });
    } else {
      dispatch(updateComment({ id: formData.id, payload })).then(() => {
        dispatch(resetForm());
      });
    }

    dispatch(resetForm());
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={formData.profile_url}
          required
          onChange={handleOnChange}
        />
        <br />
        <input type="text" name="author" placeholder="작성자" value={formData.author} onChange={handleOnChange} />
        <br />
        <textarea name="content" placeholder="내용" required value={formData.content} onChange={handleOnChange} />
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          value={formData.createdAt}
          onChange={handleOnChange}
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
