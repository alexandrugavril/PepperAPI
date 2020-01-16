var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Person = new keystone.List('Person');

Person.add({
    name: { type: Types.Name, required: true, index: true },
    user: { type: Types.Relationship, ref: 'User', required: false}
});

/**
 * Registration
 */
Person.defaultColumns = 'name, user';
Person.register();
