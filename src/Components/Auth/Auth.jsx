import React, {useState, useEffect} from 'react'
import { auth } from '../../Firebase/config';
import { signInWithEmailAndPassword,onAuthStateChanged, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { Navigate, useNavigate  } from 'react-router-dom'


const Auth = () => {

  const [mode, setMode] = useState("signup")

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);


  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handlePass = (e) =>{
    setPassword(e.target.value)
  }

  const handlename = (e) =>{
    setName(e.target.value)
  }

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user)

      if(user){
        console.log("Newwww...  ",user)
        window.location.href = "./dashboard";
      }
    });

    

    return () => unsubscribe();
  }, []);

  


  

  async function handleSignin(){
    console.log("Hello")
    await signInWithEmailAndPassword(auth, email, password).then(()=>{
      console.log("Successfully signed in!");
      
    }).catch(err => console.log("Error: "+err))
  }

  async function handleSignup() {
    console.log("Creating new account...");
    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Successfully created new account");
  
      // Update user profile
      await updateProfile(userCredential.user, { displayName: name });
      console.log("Successfully updated profile");
  
      // Navigate to dashboard upon successful signup
      navigate('/dashboard');
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (

    <div className='w-full h-full flex items-center justify-center'>
      <div
  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm "
  data-v0-t="card"
>
  <div className="flex flex-col p-6 text-center space-y-2">
    
    <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">{mode==="signup" ? "Create new account" : "Sign In" }</h3>
    <p className="text-sm text-muted-foreground">{mode==="signup" ? "Discover what's going on!" : "Login to your account" }</p>
  </div>
  <div className="p-6 space-y-4">

    {mode==="signup" ? <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="John Doe"
        required="true"
        type="text"
        value={name}
        onChange={handlename}
        
      />
    </div> : ""}

  

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


  <div className="items-center p-6 pb-0 flex justify-center">

    {/* <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-gray-900 dark:text-white"
      onClick =  {handleSubmit}
    >
      Sign in
    </button> */}

    {mode==="signup" ? <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-gray-900 dark:text-white"
      onClick =  {handleSignup}
    >
      Create Account
    </button> : <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-gray-900 dark:text-white"
      onClick =  {handleSignin}
    >
      Sign in
    </button>}

    

  </div>

  <div className="items-center p-6 pt-2 flex justify-center">

    {mode==="signup" ? <div
      className="inline-flex items-center justify-end whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-0 py-2 w-full text-gray-900 cursor-pointer"
      onClick =  {()=>{setMode("signin")}}
    >
      Already have an account?
    </div> : <div
      className="inline-flex items-center justify-end whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-0 py-2 w-full text-gray-900 cursor-pointer"
      onClick =  {()=>{setMode("signup")}}
    >
      Create new account
    </div>}

    

  </div>

</div>
    
</div>


    
  )
}

export default Auth;