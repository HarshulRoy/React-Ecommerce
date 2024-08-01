import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { useAuth0 } from "@auth0/auth0-react";

const ContactForm = () => {
  const [text,setText] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [note,setNote] = React.useState('')
  const {user, isAuthenticated} = useAuth0();

  return (
    <Wrapper>
        <div  className='form-container'>
        <form action="https://formspree.io/f/xvojklob" method='POST'>
            <div className='form-container--items'>
                <div><input onChange={(e)=>setText(e.target.value)} type="text" value={isAuthenticated? user.nickname:text} required autoComplete='off' name='username' placeholder='username'/></div>
                <div><input onChange={(e)=>setEmail(e.target.value)} type="email" value={isAuthenticated? user.email:email} required autoComplete='off' name='email' placeholder='email' /></div>
                <div><textarea onChange={(e)=>setNote(e.target.value)} type="text" value={note} required autoComplete='off' name='textarea'  placeholder='message'/></div>
            </div>
            <Button>Send</Button>
        </form>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
  padding: 7rem 0 0 0;
  .form-container{
    display:flex;
    justify-content:center;
    
    form{
      width:36rem;
      display:flex;
      justify-content:center;
      flex-direction:column;

      .form-container--items{
        display:flex;
        flex-direction:column;
        gap:2rem;
        
        div{
          width:100%;

          input,textarea{
            width:100%;
            height:4rem;
            font-size:1.4rem;
            outline:none;
          }

          textarea{
            height: 12rem;
            margin-bottom:1.7rem;
          }          
        }
      }
    }
  }

`

export default ContactForm
