console.log("hello");

const url = "http://localhost:8000/comments";

async function getComments() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

getComments();

const myCommentContainer = document.querySelector(".comment-container");
console.log(myCommentContainer);

async function renderComments2(n) {
  const allComments = await getComments();
  for (let i = 0; i < n; i++) {
    const commentContainer = document.createElement("div");
    const myComment = document.createElement("p");
    const postId = document.createElement("p");
    const userName = document.createElement("p");

    const bob2 = allComments[i].body;
    console.log(bob2);
    postId.textContent = `postID ${allComments[i].postId}`;
    userName.textContent = allComments[i].name;
    myComment.textContent = bob2;

    commentContainer.append(postId);
    commentContainer.append(userName);
    commentContainer.append(myComment);

    myCommentContainer.appendChild(commentContainer);
    commentContainer.classList.add("individual-comment");
    myCommentContainer.classList.add("comment-div");
  }
}

renderComments2(10);
