import { gql } from '@apollo/client';

const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
        $email: String!
        $password: String!
        $first_name: String!
        $last_name: String!
        $address: String!
        $phone_number: String!
    ) {
        signup(
            email: $email
            password: $password
            first_name: $first_name
            last_name: $last_name
            address: $address
            phone_number: $phone_number
        ) {
            token
        }
    }
`;

export default SIGNUP_MUTATION;