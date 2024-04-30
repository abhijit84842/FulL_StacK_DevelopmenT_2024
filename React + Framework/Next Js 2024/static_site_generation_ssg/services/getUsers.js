

const GetUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  return data;
};

export default GetUsers;
