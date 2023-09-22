import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import {
  TextInput,
  PasswordInput,
  Paper,
  Container,
  Button,
  Badge
} from '@mantine/core';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("in handle login");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <Container size={420} my={40} className="login">
      <Paper withBorder shadow="md" p={30} mt={30} radius="md" >
        <form onSubmit={handleLogin}>
            <TextInput label="Email" placeholder="you@mantine.dev" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput label="Password" placeholder="Your password" type="password" required mt="md" value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            <Button fullWidth mt="xl" type="submit" >
                Log in
            </Button>
            <br/>
            {error && 
            <Badge color={'red'} variant="filled">
              Please check your credentials
            </Badge>
           }
        </form>
      </Paper>
    </Container>
  );
};

export default Login;