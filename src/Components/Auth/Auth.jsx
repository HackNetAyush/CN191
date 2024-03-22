import React, {useState, useEffect} from 'react'
import { auth } from '../../Firebase/config';
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { Routes, Route, Navigate  } from 'react-router-dom'


const Auth = () => {

  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handlePass = (e) =>{
    setPassword(e.target.value)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User signed in")
        // <Navigate to="/editor" />
        // navigate('/editor');
        // Navigate to the dashboard page
      } else {
        console.log("User is not signed in")
        // No user is signed in
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  async function handleSubmit(){
    console.log("Hello")
    await signInWithEmailAndPassword(auth, email, password).then(()=>{
      console.log("Successfully signed in!");
      
    }).catch(err => console.log("Error: "+err))
  }

  return (

    <div className='w-full h-full flex items-center justify-center'>
      <div
  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm "
  data-v0-t="card"
>
  <div className="flex flex-col p-6 text-center space-y-2">
    <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Login</h3>
    <p className="text-sm text-muted-foreground">Enter your email below to login to your account.</p>
  </div>
  <div className="p-6 space-y-4">
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="email"
        placeholder="m@example.com"
        required=""
        type="email"
        value={email}
        onChange={handleEmail}
        
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="password"
        required=""
        type="password"
        value={password}
        onChange={handlePass}

      />
    </div>
  </div>
  <div className="items-center p-6 flex justify-center">
    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-gray-900 dark:text-white"
      onClick =  {handleSubmit}
    >
      Sign in
    </button>
  </div>
</div>
    
</div>


    
  )
}

export default Auth;