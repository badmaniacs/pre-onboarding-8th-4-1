import styled from 'styled-components';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, editActive, editComment } from '../util/redux/action';
import { putCommentApi, postCommentApi, getCommentApi } from '../api/api';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const selectorEdit = useSelector((state: any) => state.editComment);

  const handleAddComment = async (event) => {
    event.preventDefault();
    const formElement = document.querySelector('form') as HTMLElement;
    const profileUrl = formElement[0].value;
    const author = formElement[1].value;
    const content = formElement[2].value;
    const createdAt = formElement[3].value;
    if (selectorEdit.isActive) {
      await putCommentApi(selectorEdit.targetId, profileUrl, author, content, createdAt);
      dispatch(
        editComment([
          {
            profile_url: profileUrl,
            author,
            content,
            createdAt,
          },
        ])
      );
      // dispatch(editActive(false, selectorEdit.targetId));
      selectorEdit.isActive = false;
      return;
    }
    await postCommentApi(profileUrl, author, content, createdAt);
    dispatch(
      addComment([
        {
          profile_url: profileUrl,
          author,
          content,
          createdAt,
        },
      ])
    );
  };

  useLayoutEffect(() => {
    const id = selectorEdit.targetId;
    const handleGetComment = async () => {
      const getComments = await getCommentApi(id);
      const formElement = document.querySelector('form') as HTMLElement;
      if (getComments) {
        formElement[0].value = getComments.profile_url;
        formElement[1].value = getComments.author;
        formElement[2].value = getComments.content;
        formElement[3].value = getComments.createdAt;
      }
    };
    handleGetComment();
  }, [selectorEdit]);

  return (
    <>
      {console.log(selectorEdit)}
      {selectorEdit.isActive ? (
        <FormStyle>
          <form>
            <input type="text" name="profile_url" placeholder="https://picsum.photos/id/1/50/50" required />
            <br />
            <input type="text" name="author" placeholder="작성자" />
            <br />
            <textarea name="content" placeholder="내용" required />
            <br />
            <input type="text" name="createdAt" placeholder="2020-05-30" required />
            <br />
            <button type="submit" onClick={handleAddComment}>
              등록
            </button>
          </form>
        </FormStyle>
      ) : (
        <FormStyle>
          <form>
            <input
              type="text"
              name="profile_url"
              placeholder="https://picsum.photos/id/1/50/50"
              required
              defaultValue="https://picsum.photos/id/1/50/50"
            />
            <br />
            <input type="text" name="author" placeholder="작성자" />
            <br />
            <textarea name="content" placeholder="내용" required />
            <br />
            <input type="text" name="createdAt" placeholder="2020-05-30" required />
            <br />
            <button type="submit" onClick={handleAddComment}>
              등록
            </button>
          </form>
        </FormStyle>
      )}
      ;
    </>
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
