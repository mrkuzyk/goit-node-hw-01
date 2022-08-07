const fs = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

const listContacts = async() => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);
  return result || null;
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const removeContactIndex = contacts.findIndex(contact => contact.id === contactId);

  if (!removeContactIndex) {
    return null;
  }

  const [result] = contacts.splice(removeContactIndex, 1);
  await updateContacts(contacts);
  return result;
}

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(5),
    name,
    email,
    phone
  }
  contacts.push(newContact);
  await updateContacts(contacts)
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
};