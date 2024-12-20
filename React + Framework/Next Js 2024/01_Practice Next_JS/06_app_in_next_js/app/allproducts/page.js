import DelButton from "../components/DelButton";
import EditButton from "../components/EditButton";

const CallApi = async () => {
  let res = await fetch("http://localhost:3000/api/product", {
    cache: "no-cache",
  });
  let data = await res.json();
  // console.log(data)
  return data.rslt;
};

const page = async () => {
  let products = await CallApi();
  // console.log(products);

  return (
    <div>
      <h1>All Products Page</h1>
      {products.map((list) => (
        <ul key={list._id}>
          <li>{list.name}</li>
          <li>{list.company}</li>
          <li>{list.price}</li>
          <li>{list.colour}</li>
          <EditButton id={list._id} />
          <DelButton productId={list._id} />
        </ul>
      ))}
    </div>
  );
};

export default page;
