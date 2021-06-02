import React,{useState} from 'react'
import '../entry/entry.style.css';
import {Jumbotron} from 'react-bootstrap';
import { LoginForm } from '../../components/Login/Login';
import { ResetPassword } from '../../components/password-reset/password-reset';


export const Entry = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [frmLoad, setFrmLoad] = useState('login')

const handleOnChange = e =>{
	const { name, value} = e.target;
	switch(name){
		case 'email':
		setEmail(value)
		break
		case 'password':
		setPassword(value)
		break

		default:
			break
		
	} 
	};

	const handleOnSubmit = e =>{
		e.preventDefault()
		if(!email || !password){
			alert("Fill up all the form");
		}
		//TODO call api to submit the form

		console.log(email, password);
	}
	const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please Enter The Email");
    }
    //TODO call api to submit the form

    console.log(email);
  };

const formSwitcher = frmtype =>{
   setFrmLoad(frmtype);
}
	return (
    <div className="entry-page">
      <Jumbotron className="form-box">
        {frmLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}
        {frmLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};


