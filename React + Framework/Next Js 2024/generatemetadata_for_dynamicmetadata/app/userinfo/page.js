
const UserInfo =()=>{
    return <div>
        <h1>User information</h1>
    </div>
}
export default UserInfo


// we have to keep this meta comp as it is
// we can't use dynamic meta data method with the client component, this method only allow in server component.
 export function generateMetadata(){
    return {
        title:"User-info",
        //we can also add description
        description: "User page description by Abhi"
    }

 }