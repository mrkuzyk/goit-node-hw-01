const contactsMethods = require('./contacts.js');

const invokeActions = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'all':
            const allContacts = await contactsMethods.listContacts();
            console.table(allContacts);
            break;
        case 'getById':
            const oneContact = await contactsMethods.getContactById(id);
            console.table(oneContact);
            break;
        case 'removeById':
            const removedContact = await contactsMethods.removeContact(id);
            console.table(removedContact);
            break;
        case 'addContact':
            const newContact = await contactsMethods.addContact(name, email, phone);
            console.table(newContact);
            break;
    
        default:
            console.log('unknown action');
    }
}


// invokeActions({ action: 'all' });
// invokeActions({action: 'getById', id: '3'});
// invokeActions({action: 'removeById', id: '2'});
invokeActions({action: 'addContact', name: 'Petro', email: 'petro@semsempererat.com', phone: '(501) 472-5218'});
