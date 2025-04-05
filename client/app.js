console.log("hello");

const url = "https://jsonplaceholder.typicode.com/comments";

async function getComments() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data[n]);
  return data;
}

// getComments(7);

const myCommentContainer = document.querySelector(".comment-container");
console.log(myCommentContainer);

async function renderComments(n) {
  for (let i = 0; i < n; i++) {
    const myComment = document.createElement("p");
    const bob = await getComments(i);
    const bob2 = bob.body;
    console.log(bob);
    myComment.textContent = bob2;
    myCommentContainer.appendChild(myComment);
  }
}

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

renderComments2(3);
