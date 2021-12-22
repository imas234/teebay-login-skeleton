import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Header, Divider, Grid } from 'semantic-ui-react';

const Signup = () => {
    return (
        <div className="app centered flex-column">
            <div className="padded">
                <Header as="h1">SIGN UP</Header>
            </div>
            <div className="padded bordered signup-container">
                <Form>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Form.Field>
                                <Input placeholder='First Name' />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field>
                                <Input placeholder='Last Name' />
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden />
                    <Form.Field>
                        <Input placeholder='Address' />
                    </Form.Field>
                    <Divider hidden />
                    <Grid columns={2}>
                        <Grid.Column>
                            <Form.Field>
                                <Input placeholder='Email' />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field>
                                <Input placeholder='Phone Number' />
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden />
                    <Form.Field>
                        <Input placeholder='Password' />
                    </Form.Field>
                    <Divider hidden />
                    <Form.Field>
                        <Input placeholder='Confirm Password' />
                    </Form.Field>
                    <Divider hidden />
                    <div className="full-width centered">
                        <Button color="purple" type='submit'>Submit</Button>
                    </div>
                    <Divider />
                    <div className="full-width centered">
                        <p>
                            Already have an account? <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </Form>         
            </div>
        </div>
    );
}

export default Signup;