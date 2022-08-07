const contactsMethods = require('./contacts.js');
const { program } = require('commander');





const argv = program.opts();

const invokeActions = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contactsMethods.listContacts();
            console.table(allContacts);
            break;
        case 'get':
            const oneContact = await contactsMethods.getContactById(id);
            console.table(oneContact);
            break;
        case 'remove':
            const removedContact = await contactsMethods.removeContact(id);
            console.table(removedContact);
            break;
        case 'add':
            const newContact = await contactsMethods.addContact(name, email, phone);
            console.table(newContact);
            break;
    
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone")

program.parse();

const options = program.opts();
invokeActions(options);
