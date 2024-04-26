import style from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div className={style.green}>
        <h1>CSS with Next js..</h1>
        <h2 className={style.red}>Next js is Framework of React js</h2>
      </div>
    </main>
  );
}
