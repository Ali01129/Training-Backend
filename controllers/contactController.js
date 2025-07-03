const Contact = require("../model/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.json({ error: err });
  }
};

//@desc create a contact
//@route POST /api/contacts/
//@access public
const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are required");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json({ msg: "contact created sucessfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

//@desc get a contact by id
//@route get /api/contacts/:Id
//@access public
const getContactbyID = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found!");
    }
    res.status(200).json(contact);
  } catch (err) {
    res.json({ error: err });
  }
};

//@desc update a contact by id
//@route put /api/contacts/:Id
//@access public
const updateContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are required");
    }
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found!");
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, phone },
      { new: true }
    );

    res.status(200).json({ msg: "Updated contact", contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//@desc delete a contact by id
//@route DELETE /api/contacts/:Id
//@access public
const deleteContact = async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found!");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Deleted contact", contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getContact, createContact, getContactbyID, updateContact, deleteContact };
