# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Iban Rosales

https://iirosales.github.io/Lab5_Starter/expose.html

https://iirosales.github.io/Lab5_Starter/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, I would not use a unit test to test the "message" feature of a messaging application, because that will basically mean testing the whole application, and has many different features it will need to test instead of a single specific one. Testing this will require not a unit test but an beta test or end-to-end testing methods. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test to test the "max message length" feature of a messaging application, because this logic of checking if the current message typed is more than 80 characters can be easily isolated and tested with a singular function. It does not rely in any other features as well. 
