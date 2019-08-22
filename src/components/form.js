import React, {useState} from 'react';

const Form = (props) => {
    const [member, setMember] = useState({name: '', email: '', role: ''});
    const changer = event => {
        setMember({...member, [event.target.name]: event.target.value})
    };
    const submitHandler = event =>{
        event.preventDefault();
        setTeam(team => [...team, member]);
    };
    const {setTeam}= props;
    return(
        <form onSubmit={submitHandler}>
            <input placeholder='name' value={member.name} name='name' onChange={changer}/>
            <input placeholder='email' value={member.email} name='email' onChange={changer}/>
            <input placeholder='role' value={member.role} name='role' onChange={changer} />
            <button type='submit'>Add Member</button>
        </form>
    );
};

export default Form;