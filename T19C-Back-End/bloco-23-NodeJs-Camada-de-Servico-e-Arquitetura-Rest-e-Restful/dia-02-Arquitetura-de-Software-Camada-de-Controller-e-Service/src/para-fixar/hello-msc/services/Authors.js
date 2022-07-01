// services/Authors.js

const Author = require('../models/Author');

const Contact = require('../models/Contact');

const getAll = async () => Author.getAll();

const findById = async (id) => Author.findById(id);

/* ... */

const createAuthor = async (firstName, middleName, lastName, contacts) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }
  const { id } = await Author.createAuthor(firstName, middleName, lastName);

  await Promise.all(contacts.map((contact) => Contact.createContact(id, contact)));

  return ({ id, firstName, middleName, lastName, contacts });
};

/* ... */

module.exports = {
  getAll,
  findById,
  createAuthor,
};