import React, {useState} from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
  
  const initialFormValues = {
    email: '',
    password: '',
    confirmPassword: ''
  }

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();

    // Check if All fields are filled in

    if((!formValues.email) || (!formValues.password) || (!formValues.confirmPasword)) {
      // Failed - All fields are required
    } else if(formValues.password === formValues.confirmPassword) {
      // Failed - Passwords do not match
    } else {
      // YAY! We can log user in
      const newUser = { ...formValues }
      setFormValues(initialFormValues);
    }
}

return (
    <Router>
    <div className="App">
      <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
              />
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}
export default App;
