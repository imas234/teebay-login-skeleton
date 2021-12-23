import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Form, Button, Header, Divider, } from 'semantic-ui-react';
import InputField from './InputField';

const names = {
    firstName: 'first_name',
    lastName: 'last_name',
    address: 'address',
    email: 'email',
    phoneNumber: 'phone_number',
    password: 'password',
    confirmPassword: 'confirm_password',
};
const required = { required: true };

const Signup = () => {
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="app centered flex-column">
            <div className="padded">
                <Header as="h1">SIGN UP</Header>
            </div>
            <div className="padded bordered signup-container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group widths="equal">
                        <InputField
                            fieldError={errors[names.firstName]}
                            registration={register(names.firstName, required)}
                            placeholderText='First Name'
                        />
                        <InputField
                            fieldError={errors[names.lastName]}
                            registration={register(names.lastName, required)}
                            placeholderText='Last Name'
                        />
                    </Form.Group>
                    <InputField
                        fieldError={errors[names.address]}
                        registration={register(names.address, required)}
                        placeholderText='Address'
                    />
                    <Form.Group widths="equal">
                        <InputField
                            fieldError={errors[names.email]}
                            registration={register(names.email, required)}
                            placeholderText='Email'
                        />
                        <InputField
                            fieldError={errors[names.phoneNumber]}
                            registration={register(names.phoneNumber, required)}
                            placeholderText='Phone Number'
                        />
                    </Form.Group>
                    <InputField
                        fieldError={errors[names.password]}
                        registration={register(names.password, required)}
                        placeholderText='Password'
                    />
                    <InputField
                        fieldError={errors[names.confirmPassword]}
                        registration={register(names.confirmPassword, required)}
                        placeholderText='Confirm Password'
                    />
                    <Divider hidden />
                    <div className="full-width centered">
                        <Button color="purple" type='submit'>Sign Up</Button>
                    </div>
                </Form>         
                <Divider />
                <div className="full-width centered">
                    <p>
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;