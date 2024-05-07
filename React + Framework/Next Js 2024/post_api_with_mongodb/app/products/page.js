import Link from "next/link";
import { GET } from "../api/products/route";

const CallApi = async () => {
  // let res = await fetch("http://localhost:3000/api/products");   // NOT WORKING Here...
  let res = await GET("http://localhost:3000/api/products");
  let data = await res.json();
  // console.log(data)
  return data.result;
};

const Products = async () => {
  const productlist = await CallApi();
  // console.log(productlist);

  return (
    <div>
      <h1>All Products Details...</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Company</td>
            <td>Color</td>
            <td>Update</td>
          </tr>
        </thead>
        <tbody>
          {productlist.map((item) => (
            <tr key={item._id}>
              <td>{item.name} </td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td>{item.color}</td>
              <td><Link href={`/products/${item._id}`}>Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/">Back to Home</Link>
      <div>
        {" "}
        <Link href="/addproduct">Add Product</Link>
      </div>
    </div>
  );
};
export default Products;
