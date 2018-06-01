import React from 'react';
import { Row, Col,Form, FormGroup, Input, Label, Button } from 'reactstrap';
import {APP_LOGO} from '../../asset/ImageConstants'

const Login = () => (
	<div className="login-wrapper f-fix">
		<Row className="no-margin">
			<Col lg="6" className="no-padding">
				<div className="left-overlay"></div>
			</Col>
			<Col lg="6" className="no-padding">
				<Form className="form-horizontal form login-form " action=" " method="post"  id="contact_form">
					<fieldset>
						<div className="logo a-center f-fix">
							<img src={APP_LOGO} alt="logo" />
						</div>
						<hgroup className="a-center">
							<h4><b>Create new account</b></h4>
							<h6>Already an existing user? <a className="secondary-color">Log In</a></h6>
						</hgroup>
						<FormGroup>
							<div className="inputGroupContainer">
								<Label className="control-label">Email address</Label>
								<Input name="email" placeholder="Enter Username/ Email here" className="form-control"  type="text"/>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="inputGroupContainer">
								<Label className="control-label">Password</Label>
								<Input  name="user_password" placeholder="Enter Password here" className="form-control"  type="password"/>
							</div>
						</FormGroup>
						<FormGroup className="">
							<Button type="submit" className="btn secondary-bg-color" >LOG IN</Button>
						</FormGroup>						
						<FormGroup className="a-center">
							<a className="secondary-color">Forgot Password?</a>
						</FormGroup>
					</fieldset>
				</Form>
			</Col>
		</Row>
	</div>
);

export default Login;
