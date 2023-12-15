// because of the script of the CDN it the axios works here
// this is all in a data base of
// the GET or READ
axios
  .get("https://reqres.in/api/users?page=2")
  .then((res) => console.log(res.data.data))
  .catch((e) => console.log(e));

function dataFetch(data) {
  console.log(data);
}

// the POST or CREATE
// some info are not required as a post as ID can not be posted
axios
  .post("https://reqres.in/api/users", {
    first_name: "Hanan",
    lastName: "World",
    id: "1234",
  })
  .then(function (response) {
    console.log(response.data);
  });

// the PUT asa as UPDATE
// http us updted to what we want
axios
  .put("https://reqres.in/api/users/201", {
    firstName: "George",
    lastName: "Jetson",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (e) {
    console.log(e);
  });

// the DELETE aka DELETE
// this deleted my axios .put so my name is gone
axios
  .delete("https://reqres.in/api/users/201")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (e) {
    console.log(e);
  });
