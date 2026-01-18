import { useState } from 'react';
import { Button } from './components/button';
import { Input } from './components/input';
import { Text } from './components/text';
import { validateEmail, validateText } from './utils/validator';

export function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="flex flex-col items-center bg-gray-50 p-4">
      <h1 className="font-bold text-2xl text-gray-800 mb-4">Tæmú Shop</h1>
      <img src="./map.png" alt="Map to contact page" />
      <div className="grid grid-cols-3 gap-2 p-4 bg-gray-50 rounded-md border border-gray-300">
        <address className="text-gray-700">
          <h4 className="font-semibold text-gray-800 mb-2">Address:</h4>
          Tæmú Shop
          <br />
          Karl Johans Gate 22
          <br />
          0954
          <p>
            Tel:{' '}
            <a
              href="tel:+4754321016"
              className="text-amber-600 hover:text-amber-700 transition-colors"
            >
              +47 54 32 10 16
            </a>
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:webshop@tæmu.com"
              className="text-amber-600 hover:text-amber-700 transition-colors"
            >
              webshop@tæmu.com
            </a>
          </p>
        </address>

        <div>
          <img src="contact.jpg" alt="Take contact" className="object-fill" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!validateEmail(email)) {
              return;
            }
            if (!validateText(fullName)) {
              return;
            }
            if (!validateText(subject)) {
              return;
            }
            if (!validateText(body)) {
              return;
            }

            console.log();
          }}
          className="text-gray-700 flex flex-col gap-2"
        >
          <Input
            value={fullName}
            onChange={(e) => {
              const newValue = e.target.value;
              setFullName(newValue);
            }}
            label="Full name"
            placeholder="John Doe"
            helptext="Please write your full name"
          />
          <Input
            value={subject}
            onChange={(e) => {
              const newValue = e.target.value;
              setSubject(newValue);
            }}
            label="Subject"
            placeholder="Subject"
            helptext="Please write your object"
          />
          <Input
            value={email}
            onChange={(e) => {
              const newValue = e.target.value;
              setEmail(newValue);
            }}
            label="Email"
            placeholder="sample@example.com"
            helptext="Please write your email address"
          />
          <Text
            value={body}
            onChange={(e) => {
              const newValue = e.target.value;
              setBody(newValue);
            }}
            label="Body"
            placeholder="Please write your message here"
            helptext="Your message could be min 3 characters length"
          />
          <Button type="submit">Send Me</Button>
        </form>
      </div>
    </div>
  );
}
