import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Form, Button, Header, Divider } from 'semantic-ui-react';
import InputField from './InputField';

const names = {
    email: 'email',
    password: 'password',
};
const required = { required: true };

const Login = () => {
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="app flex-column">
            <div className="padded">
                <Header as="h1">SIGN IN</Header>
            </div>
            <div className="padded bordered login-container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        fieldError={errors[names.email]}
                        registration={register(names.email, required)}
                        placeholderText={'Email'}
                    />
                    <InputField
                        fieldError={errors[names.password]}
                        registration={register(names.password, required)}
                        placeholderText={'Password'}
                    />
                    <Divider hidden />
                    <div className="full-width centered">
                        <Button color="purple" type='submit'>Submit</Button>
                    </div>
                </Form>         
                <Divider />
                <div className="full-width centered">
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;