# _Asynchrony and APIs Independent Project_

#### _Doctor Lookup, 02.14.2020_

#### By _**Jose Amesquita**_

## Description

_This web application will guide you to a doctor near you. This application will take a medical issue (a response) and a name search for doctors from the user and returns a list of doctors depending on the city the user is located (Portland or Seattle). This was developed to practice using existing APIs and using information from the API given displayng to the user._

## Setup/Installation Requirements

1. visit https://github.com/joseamesquita/Find-Doctor.git
2. click the green button: Clone or download 
3. select copy and open terminal from your desktop
4. on terminal browse to your desktop: cd Desktop
5. type: 'git clone https://github.com/joseamesquita/Find-Doctor.git'
6. in the same directory within your Find-Doctor folder type on terminal: 'npm install'
7. type: 'code .' to view all source code on Visual Studio Code
8. in the same directory within your Find-Doctor folder type on terminal: 'npm run start' and the webpage will begin loading in a new browser

_Installing your personal API Key_
1. visit https://developer.betterdoctor.com/ and sign up for API registration
2. fill out the form and you shall receive your personal API Key
3. within your Find-Doctor directory on terminal create a new file -> 'touch .env'
4. inside your .env file create a new variable called 'API_KEY' and set that varaiable assigned to your personal API Key like (the XXXXXXXXXX is where you insert your API Key) -> 'API_KEY = XXXXXXXXXX'

## Specs

Behavior | Input | Output
--- | --- | ---
if the user leaves the input blank | "" | Please insert symptom and name 
user inputs a symptom and receives a list of doctors in Portland to treat the symptom | "cough" | returns list of doctors that treat "cough" symptom
user inputs a name and receives a list of doctors in Portland with the name given | "diaz" | returns a list of doctors that inlude 'diaz' in first or last name

## Known Bugs

_This application is under-developed and is currently improving._

## Support and contact details

_Please reach out to me if you have any questions or any concerns with this application. email: joseamesquita11@gmail.com_

## Technologies Used

* _JavaScript & JQuery_
* _form inputs_
* _Git_
* _Asynchrony and APIs_
* _npm_
* _VSCode_
* _Jest_
* _webpack_

### License

*This is licensed by MIT.*

Copyright (c) 2016 **_Jose Amesquita_**