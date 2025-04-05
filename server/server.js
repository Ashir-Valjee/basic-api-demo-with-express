import express from "express";
import cors from "cors";
import dotenv from "dotenv";

console.log("hello");

const app = express();
app.use(cors());

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// define route for root

app.get("/", (req, res) => {
  res.send("welcome to my root route!");
});

// define route for comments
const url = "https://jsonplaceholder.typicode.com/comments";

app.get("/comments", async (req, res) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // serve the fetched comments
    res.json(data);
  } catch (error) {
    console.error("error fetching comments", error);
    res.status(500).json({ error: "failed to fetch coments" });
  }
});

// define route for dynamic comments
// Fetch all comments from JSONPlaceholder
async function fetchComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return await response.json();
}

app.get("/comments/:index", async (req, res) => {
  try {
    const comments = await fetchComments();
    const index = Number(req.params.index);

    if (index < 0 || index >= comments.length) {
      return res.status(404).json({ error: "comment not found" });
    }

    res.json(comments[index]);
  } catch (error) {
    console.log("oops");
  }
});
