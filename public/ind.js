const btn = document.querySelector(".btn");
btn.onclick = () => {
  const category_name = document.querySelector(".category_name").value;

  const data = {
    category_name: category_name,
  };
  const url = "http://localhost:3000/api/category";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => console.log(response))
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
