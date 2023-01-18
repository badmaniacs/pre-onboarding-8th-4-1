# 원티드 프리온보딩 8th - 3주차 과제

[![React Version](https://img.shields.io/badge/React-v18.2.0-blue)](https://ko.reactjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v8.12.1-yellow)](https://www.npmjs.com/)

API 서버와 통신하여 작동하는 댓글 기능을 Redux 를 통해 구현하였습니다.

### 🗓 수행 기간

> 2023.01.16 - 2022.01.19

## 📚 목차

- [팀 정보](#팀-정보)
- [Best Practice](#best-practice)
- [실행 방법](#실행-방법)
- [디렉토리 구조](#디렉토리-구조)

<br />

## 팀 정보

원티드 프리온보딩 프론트엔드 인턴쉽 과정 1팀입니다.

### Members

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/hyejj19">
                <img src="https://avatars.githubusercontent.com/u/89173923?v=4" width="100px;" alt="박혜정"/>
                <br />
                <sub>
                    <b>박혜정</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=hyejj19" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/minsang98">
                <img src="https://avatars.githubusercontent.com/u/64800318?v=4" width="100px;" alt="김민상"/>
                <br />
                <sub>
                    <b>김민상</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=minsang98" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/kwakhyun">
                <img src="https://avatars.githubusercontent.com/u/73919235?v=4" width="100px;" alt="곽현"/>
                <br />
                <sub>
                    <b>곽현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=kwakhyun" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/badmaniacs">
                <img src="https://avatars.githubusercontent.com/u/96967183?v=4" width="100px;" alt="박경태"/>
                <br />
                <sub>
                    <b>박경태</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=badmaniacs" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/zkzk8953">
                <img src="https://avatars.githubusercontent.com/u/78520794?s=400&u=355629856caf2969fe39e5cc7f4a07f800e90f5d&v=4" width="100px;" alt="seoungheon lee"/>
                <br />
                <sub>
                    <b>이성헌</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=zkzk8953" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/JeongTaekCho">
                <img src="https://avatars.githubusercontent.com/u/92679073?v=4" width="100px;" alt="조정택"/>
                <br />
                <sub>
                    <b>조정택</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=JeongTaekCho" title="Code">💻</a>
        </td> 
        <td align="center">
            <a href="https://github.com/aydenote">
                <img src="https://avatars.githubusercontent.com/u/77476077?v=4" width="100px;" alt="최승수"/>
                <br />
                <sub>
                    <b>최승수</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=aydenote" title="Code">💻</a>
        </td>                 
    </tr>
</table>

### Notion

> https://galvanized-gecko-b10.notion.site/Code-Wiki-week-2-6d55122209b34219b595097fa55387c8 > <br />

## Best Practice

과제에서 요구한 기능들의 구현 여부 및 Best Practice로 도출된 코드들에 대해 설명합니다.

---

### Assignment1

- [x] 댓글 CRUD 구현

        <br />

  ```jsx
  // features/comments/commentSlice.ts
  // Redux 비동기 요청 함수
  export const getComments = createAsyncThunk('GET_COMMENTS', async ({ url }: { url: string }) => {
    const response = await commentsAPI.get(url);
    return { comments: response.data, totalCount: response.headers['x-total-count'] };
  });

  // features/comments/commentSlice.ts
  const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
      value: [],
      status: 'welcome',
      totalCounts: 0,
    },
    reducers: {},
    extraReducers(builder) {
      // getComments
      builder.addCase(getComments.pending, (state) => {
        state.status = 'loading';
      });
      builder.addCase(getComments.fulfilled, (state, action) => {
        state.value = action.payload.comments;
        state.totalCounts = +action.payload.totalCount;
        state.status = 'complete';
      });
      builder.addCase(getComments.rejected, (state) => {
        state.status = 'fail';
      });

      // updateComments
      builder.addCase(updateComment.fulfilled, (state, action) => {
        state.value = state.value.map((comment) => {
          return comment.id === action.payload.id ? { ...comment, content: action.payload.content } : comment;
        });
        state.status = 'complete';
      });
    },
  });
  ```

  > 📌 Redux-toolkit 을 사용해 비동기 호출 api 데이터를 전역 상태로 관리하고, 데이터 조회, 수정을 위해 createAsyncThunk 를 활용하였습니다.  
  > 📌

## <br />

### Assignment2

- [x] 페이지네이션 구현

       <br />

  ```jsx
  // features/comments/PageList.tsx
  const PageList = () => {
    const totalCount = useSelector((state: RootState) => state.comments.totalCounts);
    const totalPageNum = Math.floor(totalCount / 5);

    const { handlePagination } = usePagination();

    const pageArray = [];

    for (let i = 1; i <= totalPageNum + 1; i++) {
      pageArray.push(
        <Page key={i} onClick={() => handlePagination(i)}>
          {i}
        </Page>
      );
    }

    return <PageListStyle>{pageArray}</PageListStyle>;
  };

  // hooks/usePagination.ts
  export const usePagination = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePagination = (idx: number) => {
    dispatch(getComments({ url: `/comments?_page=${idx}&_limit=4&_order=desc&_sort=id` }));
  };

  return { handlePagination };
  };
  ```

  > 📌 페이지네이션 로직을 담당하는 훅을 사용해 뷰-로직을 분리하였습니다.  
  > 📌 페이지 이동 버튼을 누르면 해당하는 페이지에 api 호출을 하여 comments 전역 상태를 변화시키도록 구현하였습니다.

## <br />

### Assignment3

- [x] 댓글 작성,삭제 후 1페이지로 이동 및 입력 폼 초기화

   <br />

  ```jsx
  // pages/Main.tsx
     // feature/comments/CommentList.tsx
   const handleDelete = (id: number) => {
    commentsAPI.delete(`comments/${id}`).then(() => {
      dispatch(getComments({ url: '/comments?_page=1&_limit=4&_order=desc&_sort=id' }));
    });

    // feature/form/Form.tsx > handleSubmit
    // 댓글 작성 및 수정 로직
    if (formData.id === -1) {
      commentsAPI.post(`/comments`, comment).then(() => {
        dispatch(getComments({ url: '/comments?_page=1&_limit=4&_order=desc&_sort=id' }));
      });
    } else {
      dispatch(updateComment({ id: formData.id, comment })).then(() => {
        dispatch(setFormData({ id: -1, author: '', content: '' }));
      });
    }
  ```

  > 📌 delete 요청 및 post 요청 후 then 메서드를 사용하여 첫 페이지를 요청하도록 구현하였습니다.  
  > 📌 수정데이터를 전역으로 관리하는 form state를 생성하고, 수정 후에 state 및 form 을 초기화하였습니다.

<br />

---

## 실행 방법

해당 프로젝트를 로컬서버에서 실행하기 위해서는 Git 과 Npm (node.js를 포함) 이 설치되어 있어야 합니다.

1. 레파지토리 클론

   ```
   https://github.com/preOnboarding8-team1/pre-onboarding-8th-4-1.git
   ```

2. packages 설치

   ```bash
   npm install
   ```

3. 실행

   ```bash
   # client 실행 : localhost:3000
   npm start

   # server 실행 : localhost:4000
   npm run api
   ```

<br />

## 디렉토리 구조

<details>
    <summary>Repository Overview</summary>
    <div>

        ┣ 📂 src
          ┣ 📂 api
          ┃ ┗ 📝 commentsAPI.ts
          ┣ 📂 app
          ┃ ┣ 📝 App.tsx
          ┃ ┗ 📝 store.ts
          ┣ 📂 features
          ┃ ┣ 📂 features
          ┃ ┃ ┣ 📝 CommentList.tsx
          ┃ ┃ ┣ 📝 commentSlice.ts
          ┃ ┃ ┗ 📝 PageList.tsx
          ┃ ┗ 📂 form
          ┃   ┣ 📝 Form.tsx
          ┃   ┗ 📝 formSlice.ts
          ┣ 📂 hooks
          ┃ ┗ 📝 usePagination.ts
          ┣ 📂 pages
          ┃ ┗ 📝 Main.tsx
          ┣ 📂 style
          ┃ ┗ 📝 GlobalStyle.tsx
          ┣ 📂 types
          ┃  ┗ 📝 types.ts
          ┣ 📂 utils
          ┃  ┗ 📝 httpClient.ts
          ┗ 📝 index.tsx

</details>
