

import Link from "next/link"
import styles from "./page.module.css"

export default function page(){
  return <div>
    <h1 className={styles.main}> This is Home Page</h1>
   <Link href="/userinfo">See Users</Link>
  </div>
}