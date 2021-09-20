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
      url: 'https://formspree.io/f/xleazlqj',
      data: inputs,
    })
      .then(() => {
        handleServerResponse(true, '送信に成功しました');
      })
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
            {!status.info.error && status.info.msg && <p className='succes'>{status.info.msg}</p>}
          </FormRight_div>
        </FormStyle>
        <Link href='https://twitter.com/Whale_ELAHW00'>
          <TwiiterBlock target='_blank' rel='noopener'>
            <FaTwitter size={30} color={'#ffffff'} />
            <p>DMでもお問い合わせ可能です</p>
          </TwiiterBlock>
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
  .succes,
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
  ${Medias.custom(480)} {
    height: 40px;
    max-width: 200px;
    font-size: 1.4rem;
  }
`;
const TwiiterBlock = styled.a`
  display: block;
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
`;
