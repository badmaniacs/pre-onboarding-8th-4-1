# 원티드 프리온보딩 8th - 4주차 과제

[![React Version](https://img.shields.io/badge/React-v18.2.0-blue)](https://ko.reactjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v8.12.1-yellow)](https://www.npmjs.com/)

API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현

### 🗓 수행 기간

> 2023.01.16 - 2022.01.19

### 📢 배포 링크

## 📚 목차

- [팀 정보](#팀-정보)
- [Best Practice](#best-practice)
- [실행 방법](#실행-방법)
- [디렉토리 구조](#디렉토리-구조)
- [추가 구현 기능](#추가-구현-기능)

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
            <a href="https://github.com/rewrite0w0">
                <img src="https://avatars.githubusercontent.com/u/55968557?v=4" width="100px;" alt="오태준"/>
                <br />
                <sub>
                    <b>오태준</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=rewrite0w0" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/bigwave-cho">
                <img src="https://avatars.githubusercontent.com/u/105909665?v=4" width="100px;" alt="조재현"/>
                <br />
                <sub>
                    <b>조재현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=bigwave-cho" title="Code">💻</a>
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

## Best Practice

과제에서 요구한 기능들의 구현 여부 및 Best Practice로 도출된 코드들에 대해 설명합니다.

---

### Assignment1

- [x] 페이지네이션

   <br />

  ```jsx
  const handlePageMove = (event) => {
    const targetPage = parseInt(event.target.dataset.key, 10);
    const handleGetComment = async () => {
      const getComments = await getCommentsApi(targetPage);
      dispatch(pageMove(getComments));
    };
    handleGetComment();
  };

  for (let i = 0; i < pageNumber; i++) {
    pageArray.push(
      <Page onClick={handlePageMove} data-key={i + 1} key={i + 1}>
        {i + 1}
      </Page>
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
  ```

  > 📌 버튼에 있는 key 값을 이용해 이동할 page 위치를 저장합니다.
  > 📌 저장된 page 위치로 API 요청을 통해 4개 수신합니다.
  > 📌 수신된 comment를 pageMove 라는 redux action을 통해 저장시켜 보여줍니다.

## <br />

### Assignment2

- [x] 댓글 작성, 수정, 삭제 후 동작

   <br />

  ```jsx
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
      dispatch(editActive(false, selectorEdit.targetId));
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


  const handleDelete = async (event) => {
    const targetId = parseInt(event.target.parentNode.parentNode.dataset.key, 10);
    await deleteCommentApi(targetId);
    dispatch(deleteComment(targetId));
  };

  const handleEdit = (event) => {
    const targetId = parseInt(event.target.parentNode.parentNode.dataset.key, 10);
    dispatch(editActive(true, targetId));
  };
  ```

  > 📌 editState로 등록 버튼 클릭 시 댓글 등록 또는 수정합니다.  
  > 📌 수정 작성후 전체 input창을 초기화 합니다.  
  > 📌 댓글 삭제, 댓글 등록 시 page 1로 이동합니다.

<br />

---

## 실행 방법

해당 프로젝트를 로컬서버에서 실행하기 위해서는 Git 과 Npm (node.js를 포함) 이 설치되어 있어야 합니다.

1. 레파지토리 클론

   ```
   https://github.com/preOnboarding8-team1/pre-onboarding-8th-4-1.git
   ```

2. packages 설치

   ```
   npm install
   ```

3. 실행

   ```
   npm start
   ```

<br />

## 디렉토리 구조

<details>
    <summary>Repository Overview</summary>
    <div>

        ┣ 📂 src
          ┣ 📂 api
          ┃ ┗ 📝 api.ts
          ┣ 📂 components
          ┃ ┣ 📝 CommentList.tsx
          ┃ ┣ 📝 Form.tsx
          ┃ ┗ 📝 PageList.tsx
          ┣ 📂 containers
          ┃ ┣ 📝 CommentListContainer.tsx
          ┃ ┣ 📝 FormContainer.tsx
          ┃ ┗ 📝 PageListContainer.tsx
          ┣ 📂 util
          ┃ ┣ 📂 redux
          ┃ ┃ ┣ 📝 action.ts
          ┃ ┃ ┣ 📝 index.ts
          ┃ ┃ ┣ 📝 reducer.ts
          ┃ ┗ 📝 type.ts
          ┣ 📝 App.tsx
          ┗ 📝 index.tsx

</details>
