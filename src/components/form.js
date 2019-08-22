import React, {useState} from 'react';

const Form = (props) => {
    const [member, setMember] = useState({name: '', email: '', role: ''});
    const changer = event => {
        setMember({...member, [event.tager.name]: event.taget.value})
    }
    return(
        <form>
            <input placeholder='name' value={member.name} name='name' onChange={changer}/>
            <input placeholder='email' value={member.email} name='email' onChange={changer}/>
            <input placeholder='role' value={member.role} name='role' onChange={changer} />
        </form>
    );
};

export default Form;