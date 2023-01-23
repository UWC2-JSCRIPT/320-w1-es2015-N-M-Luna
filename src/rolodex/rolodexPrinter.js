import people from './people.json' assert { type: 'json' };

people.forEach((person) => {
  const { name, email, phone } = person;
  const [firstName, lastName] = name.split(' ');

  console.log(`First name: ${firstName}
  Last name: ${lastName}
  Email: ${email}
  Phone number: ${phone}
  `);
});
