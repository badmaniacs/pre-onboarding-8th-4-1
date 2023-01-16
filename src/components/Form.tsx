import React from 'react';
import styled from 'styled-components';
import { commentAdd, commentPatch } from '../store/slices/commentsSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setPage } from '../store/slices/pageSlice';
import { setForm, resetForm } from '../store/slices/formSlice';
import { patchComment, postComment } from '../api/comment';
import { setPatch } from '../store/slices/patchSlice';

const Form = () => {
  const { form } = useAppSelector((state) => state.form);
  const { patch } = useAppSelector((state) => state.patch);
  const dispatch = useAppDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(setForm({ ...form, [name]: value }));
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (patch) {
        const res = await patchComment(form);
        dispatch(commentPatch(res.data));
        dispatch(setPatch(false));
      } else {
        const res = await postComment(form);
        dispatch(commentAdd(res.data));
        dispatch(setPage(1));
      }
      dispatch(resetForm());
    } catch (err) {
      alert('댓글 작성 실패');
    }
  };

  return (
    <FormStyle>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          onChange={handleOnChange}
          value={form.profile_url}
        />
        <br />
        <input type="text" name="author" placeholder="작성자" onChange={handleOnChange} value={form.author} />
        <br />
        <textarea name="content" placeholder="내용" required onChange={handleOnChange} value={form.content} />
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          onChange={handleOnChange}
          value={form.createdAt}
        />
        <br />
        <button type="submit" onClick={handleOnSubmit}>
          등록
        </button>
      </form>
    </FormStyle>
  );
};

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

export default Form;
