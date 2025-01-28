import axios from "axios";
import { useEffect, useState } from "react";

function CobaAxios() {
  const [posts, setPosts] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setPosts(response.data); // Update the state with the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li> // Display product titles
        ))}
      </ul>
    </div>
  );
}

export default CobaAxios;
