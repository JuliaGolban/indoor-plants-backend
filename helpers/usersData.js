const userMainField = [
  "_id",
  "userName",
  "email",
  // 'password',
  "location",
  "phone",
  "birthday",
  "avatar",
  "groupAcces",
  "role",
  // 'authToken',
];

const userFullField = [
  "_id",
  "userName",
  "email",
  // 'password',
  "location",
  "phone",
  "birthday",
  "avatar",
  "groupAcces",
  "authToken",
  "role",
];

const userFieldReceivedFromFront = [
  "userName",
  "email",
  "location",
  "phone",
  "birthday",
  "avatar",
  "password",
  "id"
];

const requiredSignUpFields = [
  "userName",
  "email",
  "location",
  "phone",
  "password",
];

module.exports = {
  userMainField,
  userFullField,
  userFieldReceivedFromFront,
  requiredSignUpFields,
};
