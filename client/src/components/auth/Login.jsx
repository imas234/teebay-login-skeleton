import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Header, Divider } from 'semantic-ui-react';

const Login = () => {
    return (
        <div className="app flex-column">
            <div className="padded">
                <Header as="h1">SIGN IN</Header>
            </div>
            <div className="padded bordered login-container">
                <Form>
                    <Form.Field>
                        <Input placeholder='Email' />
                    </Form.Field>
                    <Divider hidden />
                    <Form.Field>
                        <Input placeholder='Password' />
                    </Form.Field>
                    <Divider hidden />
                    <div className="full-width centered">
                        <Button color="purple" type='submit'>Submit</Button>
                    </div>
                    <Divider />
                    <div className="full-width centered">
                        <p>
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </Form>         
            </div>
        </div>
    );
}

export default Login;