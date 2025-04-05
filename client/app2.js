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
    const myComment = document.createElement("p");

    const bob2 = allComments[i].body;
    console.log(bob2);
    myComment.textContent = bob2;
    myCommentContainer.appendChild(myComment);
  }
}

renderComments2(1);
