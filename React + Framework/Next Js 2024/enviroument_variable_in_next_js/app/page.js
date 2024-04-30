

export default function Home() {
  // console.log(process.env.NODE_ENV)  //** *to check in which mode we are working..
  return (
    <main>
      <h1>Home Page......</h1>
      {
        process.env.NODE_ENV=="development" ? <h2>You are in Dev Mode</h2>:<h2>You are Production Mode</h2>
      }
    </main>
  );
}


// console.log() only work on developer mode not in production mode.
