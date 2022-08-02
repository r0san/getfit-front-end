
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [signUpUser, setSignUpUser] = useState({ firstName: '', lastName: '', email: '', password: '', telephone: '', age: '', address: { street: '', city: '', state: '', zip: '' } })
  const changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    const tempSignUpUser = { ...signUpUser }
    tempSignUpUser[name] = value
    setSignUpUser(tempSignUpUser);
  }
  const addressChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempSignUpUser = { ...signUpUser }
    tempSignUpUser.address[name] = value
    setSignUpUser(tempSignUpUser);
  }
  const theme = createTheme();

  // sigUpSubmitHandler:
  const signUpSubmitHandler = () => {
    axios.post('http://localhost:8080/sign-up', signUpUser).then(
      response => {
        navigate('/profile')
      })
  }
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState({});
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={""} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={changeHandler} value={signUpUser.firstName}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={changeHandler} value={signUpUser.lastName}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={changeHandler} value={signUpUser.telephone}

                    fullWidth
                    id="telephone"
                    label="Phone No."
                    name="telephone"
                    autoComplete="telephone"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={changeHandler} value={signUpUser.age}

                    fullWidth
                    id="age"
                    label="Age"
                    name="age"
                    autoComplete="age"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={addressChangeHandler} value={signUpUser.street}

                    fullWidth
                    id="Street"
                    label="Street"
                    name="street"
                    autoComplete="street"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={addressChangeHandler} value={signUpUser.city}

                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>

                  <select onChange={addressChangeHandler} name="state" value={signUpUser.state} id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option value="" selected="selected">Select a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>

                  </select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={addressChangeHandler} value={signUpUser.zip}
                    required
                    fullWidth
                    id="zip code"
                    label="Zip Code"
                    name="zip code"
                    autoComplete="zip code"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={changeHandler} value={signUpUser.email}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={changeHandler} value={signUpUser.password}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Link to="/sign-in" >
                <Button
                  onClick={signUpSubmitHandler}
                  to="/profile"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Link >
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link className="nav-link active" to="/sign-in" variant="body2">
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default SignUp;