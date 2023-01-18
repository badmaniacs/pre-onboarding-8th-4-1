### Assignment1

- [x] 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현

   <br />

  ```jsx
    export const getComment = createAsyncThunk("GET_COMMENT", async () => {
    const response = await commentApi.getAllComments();
    return response.data;
    })

    export const getCommentByPage = createAsyncThunk("GET_COMMNET_PAGE", async (page:number) => {
        const respose = await commentApi.getComments(page);
        return respose.data
    })

    export const addComment = createAsyncThunk("ADD_COMMENT", async (comment: Comment) => {
        const response = await commentApi.addComment(comment);
        return response.data
    })

    export const deleteComment = createAsyncThunk("DEL_COMMENT", async (id: number) => {
        await commentApi.deleteComment(id);
        return id
    })

    export const updateComment = createAsyncThunk("UPDATE_COMMENT", async (comment: Comment) => {
        const response = await commentApi.updateComment(comment.id, comment);
        return response.data
    })

    const initialState: CommentsState = {
    comments: [],
    pageComments : [],
    lastId: 0,
    length: 0,
    };

    const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addComment.fulfilled, (state, action) => {
            state.comments.push(action.payload);
            state.lastId += 1;
        })
        .addCase(getComment.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.lastId = state.comments[state.comments.length - 1].id;
            state.length = state.comments.length;
        })
        .addCase(deleteComment.fulfilled, (state, action) => {
            state.comments = state.comments.filter((comment) => comment.id !== action.payload);
        })
        .addCase(updateComment.fulfilled, (state, action) => {
            state.comments = state.comments.map((comment) => {
            if (comment.id === action.payload.id) {
                return action.payload;
            }
            return comment;
            });
            state.pageComments = state.pageComments.map((comment) => {
                if (comment.id === action.payload.id) {
                return action.payload;
                }
                return comment;
            })
        })
        .addCase(getCommentByPage.fulfilled, (state, action) => {
            state.pageComments = action.payload;
        } );
    },
    });

    export const commentActions = commentsSlice.actions;

    export default commentsSlice;
  ```

  > 📌 비동기 액션을 처리하는 thunk와 비동기 액션에 대한 extreReducer를 사용해 CRUD가 동작하게 기능을 구현했습니다.

## <br />

### Assignment2

- [x] 페이지네이션

   <br />

  ```jsx
    import { createSlice } from '@reduxjs/toolkit';
    import { PageState } from '../types/types';

    const initialState: PageState = {
    page: 1,
    };

    const pageSlice = createSlice({
        name : 'page',
        initialState,
        reducers : {
            replacePage(state,action) {
                state.page = action.payload
            }
        },
    })

    export const pageActions = pageSlice.actions;

    export default pageSlice;

    const PageList = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector((state)=>state.page.page)
    const comment = useAppSelector((state)=>state.comments.comments)
    const pageArray = [];
    const pageHandler = (i) => {
        dispatch(pageActions.replacePage(i))
    }
    const pages = Math.ceil(useAppSelector((state) => state.comments.length) / 10);
    for (let i = 1; i <= pages; i++) {
        pageArray.push(
        <Page key={i} onClick={() => pageHandler(i)} active={page === i}>
            {i}
        </Page>
        );
    }

    useEffect(()=>{
        dispatch(getCommentByPage(page))
    },[dispatch,page,comment])

    return <PageListStyle>{pageArray}</PageListStyle>;
    };
  ```

  > 📌 페이지 상태를 담당하는 reducer를 통해, 페이지에 맞는 데이터를 요청하는 action을 호출해서 페이지네이션을 구현했습니다. 

## <br />

### Assignment3

- [x] 댓글 작성, 수정, 삭제 후 동작

   <br />

  ```jsx
    const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = {
      id: id + 1,
      content,
      author,
      createdAt,
      profile_url: url,
    };
    dispatch(addComment(comment));
    dispatch(pageActions.replacePage(1));
    onReset();
    };

    const handleDelete = () => {
    dispatch(deleteComment(id));
    dispatch(pageActions.replacePage(1));
    };
  ```

  > 📌 등록과 삭제 후 페이지 상태를 담당하는 reducer를 통해 첫번째 페이지로 이동합니다. 
<br />
