import React from 'react';
import { Form } from 'semantic-ui-react';

const InputField = ({
    fieldError, 
    registration,
    placeholderText,
}) => {
    return (
        <Form.Field error={fieldError}>
            <input
                {...registration}
                type='text'
                placeholder={placeholderText}
            />
        </Form.Field>
    );
}

export default InputField;
