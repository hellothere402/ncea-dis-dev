import { PrismaClient } from '@prisma/client'; //imports the required packages
import React, { useState } from 'react';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    try {
      const contact = await prisma.contact.create({
        data: {
          name,
          email,
          message
        },
      });
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: "Failed to add contact" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    const form = new FormData(event.target);
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/contact';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if (response.ok) {
        setStatus('success');
        setMessage('Message sent successfully!');
        // Optionally reset the form here
        event.target.reset();
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message due to network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit" disabled={status === 'submitting'}>Send</button>

      {status === 'submitting' && <p>Sending your message...</p>}
      {status === 'success' && <p style={{ color: 'green' }}>{message}</p>}
      {status === 'error' && <p style={{ color: 'red' }}>{message}</p>}
    </form>
  );
}
