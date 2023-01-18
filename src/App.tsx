import React, { useEffect } from 'react';
import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';
import { useAppDispatch} from './hooks/hooks';
import {  getComment } from './store/commentActions';


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComment())
  }, [dispatch]);

  return (
      <div>
        <CommentListContainer />
        <PageListContainer />
        <FormContainer />
      </div>
  );
};

export default App;
