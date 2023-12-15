axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Wonder Land",
    body: "Place",
    userId: 1,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "MY Dear Bear",
    body: "Animal",
    userId: 2,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
