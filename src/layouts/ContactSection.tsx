/* eslint-disable @next/next/link-passhref */
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import { MinContainerStyle } from '../components/common/Container';
import { SectionTitleRight } from '../components/common/SectionTitle';
import { Medias } from '../styles/Media';
// --------------- Function ---------------
export default function ContactSection() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok: boolean, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    axios({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_FORMSPREE_URL,
      data: inputs,
    })
      .then(() => {})
      .catch(() => {
        handleServerResponse(false, '送信に失敗しました');
      });
  };

  return (
    <Contact_section>
      <MinContainerStyle className='contact_container'>
        {/*  @ts-ignore */}
        <SectionTitleRight className='contact_title'>Contact</SectionTitleRight>
        <FormStyle onSubmit={handleOnSubmit}>
          <FormLeft_div>
            <p>
              <label htmlFor='name'>Name</label>
              <input id='name' type='text' onChange={handleOnChange} required value={inputs.name} />
            </p>
            <p>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                name='_replyto'
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </p>
          </FormLeft_div>
          <FormRight_div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                onChange={handleOnChange}
                required
                value={inputs.message}
                rows={8}
              />
            </div>
            <ButtonStyle type='submit' disabled={status.submitting}>
              {!status.submitting ? (!status.submitted ? '送信' : '送信しました') : '送信中'}
            </ButtonStyle>
            {status.info.error && <div className='error'>Error: {status.info.msg}</div>}
          </FormRight_div>
        </FormStyle>
        <Link href='https://twitter.com/Whale_ELAHW00'>
          <TwitterBlock_a target='_blank' rel='noopener'>
            <FaTwitter size={30} color={'#ffffff'} />
            <p>DMでもお問い合わせ可能です</p>
          </TwitterBlock_a>
        </Link>
      </MinContainerStyle>
    </Contact_section>
  );
}
// --------------- Styled ---------------
const Contact_section = styled.section`
  margin-top: 10rem;
  padding: 0 2.5rem;
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  .contact_title {
    color: var(--white);
    right: 0;
  }
  .contact_container {
    position: relative;
    padding-top: 25rem;
    padding-bottom: 10rem;
  }
  .error {
    font-size: 1.8rem;
    color: var(--white);
    text-align: center;
    margin-top: 2rem;
  }
  ${Medias.custom(480)} {
    .contact_container {
      padding-top: 8rem;
      padding-bottom: 5rem;
    }
    .succes,
    .error {
      font-size: 1.2rem;
    }
  }
`;
const FormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  label {
    display: block;
    text-transform: uppercase;
    font-size: 1.8rem;
  }
  input,
  textarea {
    margin-top: 1rem;
    display: block;
    width: 100%;
    background-color: var(--primary);
    border: none;
    color: var(--white);
    font-size: 1.8rem;
    padding: 1rem 1rem 0 0;
    border-bottom: 1px solid var(--white);
  }
  ${Medias.custom(480)} {
    flex-direction: column;
    gap: 3rem;
    label {
      font-size: 1.4rem;
    }
    input,
    textarea {
      font-size: 1.2rem;
    }
  }
`;

const FormLeft_div = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  ${Medias.tab} {
    width: 35%;
    gap: 3rem;
  }
  ${Medias.custom(480)} {
    width: 100%;
    gap: 3rem;
  }
`;
const FormRight_div = styled.div`
  width: 60%;
  ${Medias.custom(480)} {
    width: 100%;
  }
`;

const ButtonStyle = styled.button`
  max-width: 350px;
  width: 100%;
  height: 60px;
  font-size: 2.2rem;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 auto;
  letter-spacing: 0.2em;
  margin-top: 8rem;
  color: var(--primary);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  ${Medias.custom(480)} {
    height: 40px;
    max-width: 200px;
    font-size: 1.4rem;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 0;
    top: 100%;
    transition: all 1s;
  }
  &:hover {
    &::before {
      top: 0;
    }
  }
`;
const TwitterBlock_a = styled.a`
  display: block;
  max-width: 300px;
  width: 100%;
  cursor: pointer;
  margin-top: 5rem;
  color: var(--white);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  ${Medias.tab} {
    font-size: 1.2rem;
  }
  p {
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--white);
      position: absolute;
      opacity: 0;
      transition: all 0.6s;
    }
    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
`;
