import { gql } from '@apollo/client';

// 
const LOGIN_MUTATION = gql`
    # Checks Email and Password with backend db and returns true/false
    mutation LoginMutation(
        $email: String!
        $password: String!
    ) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export default LOGIN_MUTATION;