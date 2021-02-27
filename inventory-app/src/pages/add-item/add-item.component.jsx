import React from 'react';

import FormInput from '../../components/form-input/form-input.component';

const addItem = () => (
    <div>
        <h1>Add Items</h1>
        <form>
            <FormInput label='Part Name' />
            <FormInput label='Material' />
            <FormInput label='Weight' />

        </form>
        
    </div>
)


export default addItem;


