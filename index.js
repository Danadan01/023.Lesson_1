const form = document.createElement('form');
document.body.appendChild(form);

const nameLabel = document.createElement("label");
nameLabel.for = "user_name";
nameLabel.textContent = "Enter your name here:";
form.appendChild(nameLabel);

const userName = document.createElement('input');
userName.type = 'text';
userName.name = 'user_name';
form.appendChild(userName);


const secondNameLabel = document.createElement("label");
secondNameLabel.for = "user_second_name";
secondNameLabel.textContent = "Enter your second name here:";
form.appendChild(secondNameLabel);

const userSecondName = document.createElement('input');
userSecondName.type = 'text';
userSecondName.name = 'user_second_name';
form.appendChild(userSecondName);


const DateOfBirthLabel = document.createElement("label");
DateOfBirthLabel.for = "date_of_bitrh";
DateOfBirthLabel.textContent = "Enter your date of birth here:";
form.appendChild(DateOfBirthLabel);

const userDateOfBirth = document.createElement('input');
userDateOfBirth.type = 'date';
userDateOfBirth.name = 'date_of_bitrh';
form.appendChild(userDateOfBirth);



const divRadioWrapper = document.createElement("div");
divRadioWrapper.className = "radioWrapper";
form.appendChild(divRadioWrapper);

const userGenderMale = document.createElement('input');
userGenderMale.type = 'radio';
userGenderMale.name = 'gender';
userGenderMale.value = "Male";
divRadioWrapper.appendChild(userGenderMale);

const GenderMaleLabel = document.createElement("label");
GenderMaleLabel.for = "gender";
GenderMaleLabel.textContent = "Male";
divRadioWrapper.appendChild(GenderMaleLabel);

const userGenderFemale = document.createElement('input');
userGenderFemale.type = 'radio';
userGenderFemale.name = 'gender';
userGenderFemale.value = "Female";
divRadioWrapper.appendChild(userGenderFemale);

const GenderFemaleLabel = document.createElement("label");
GenderFemaleLabel.for = "gender";
GenderFemaleLabel.textContent = "Female";
divRadioWrapper.appendChild(GenderFemaleLabel);

const userGenderNone = document.createElement('input');
userGenderNone.type = 'radio';
userGenderNone.name = 'gender';
userGenderNone.value = "None";
divRadioWrapper.appendChild(userGenderNone);

const GenderNoneLabel = document.createElement("label");
GenderNoneLabel.for = "gender";
GenderNoneLabel.textContent = "None";
divRadioWrapper.appendChild(GenderNoneLabel);



const cityLabel = document.createElement("label");
cityLabel.for = "city";
cityLabel.textContent = "Please select your city:";
form.appendChild(cityLabel);

const userCity = document.createElement('select');
userCity.name = 'cities';
form.appendChild(userCity);

const noneCity = document.createElement('option');
noneCity.textContent = "None";
noneCity.value = "None";
userCity.appendChild(noneCity);

const city1 = document.createElement('option');
city1.textContent = "Kiev";
city1.value = "Kiev";
userCity.appendChild(city1);

const city2 = document.createElement('option');
city2.textContent = "Stockholm";
city2.value = "Stockholm";
userCity.appendChild(city2);

const city3 = document.createElement('option');
city3.textContent = "London";
city3.value = "London";
userCity.appendChild(city3);

const city4 = document.createElement('option');
city4.textContent = "New-York";
city4.value = "New-York";
userCity.appendChild(city4);



const addressLabel = document.createElement("label");
addressLabel.textContent = "Please enter your address here:";
addressLabel.className = "margin";
form.appendChild(addressLabel);

const userAddress = document.createElement('textarea');
userAddress.rows = 5;
userAddress.className = "textarea";
form.appendChild(userAddress);



const languagesLabel = document.createElement("label");
languagesLabel.textContent = "Please chose languages that you know:";
languagesLabel.className = "margin";
form.appendChild(languagesLabel);

const divCheckboxWrapper = document.createElement("div");
divCheckboxWrapper.className = "checkboxWrapper"; 
form.appendChild(divCheckboxWrapper);

const divLanguageWrapper = document.createElement("div");
divLanguageWrapper.className = "language"; 
divCheckboxWrapper.appendChild(divLanguageWrapper);

const divLabelWrapper = document.createElement("div");
divLabelWrapper.className = "language"; 
divCheckboxWrapper.appendChild(divLabelWrapper);

const userLanguage1 = document.createElement("input");
userLanguage1.type = "checkbox";
userLanguage1.value = "Spanish";
divLanguageWrapper.appendChild(userLanguage1);

const language1Label = document.createElement("label");
language1Label.textContent = "Spanish";
divLabelWrapper.appendChild(language1Label);

const userLanguage2 = document.createElement("input");
userLanguage2.type = "checkbox";
userLanguage2.value = "French";
divLanguageWrapper.appendChild(userLanguage2);

const language2Label = document.createElement("label");
language2Label.textContent = "French";
divLabelWrapper.appendChild(language2Label);

const userLanguage3 = document.createElement("input");
userLanguage3.type = "checkbox";
userLanguage3.value = "Chinese";
divLanguageWrapper.appendChild(userLanguage3);

const language3Label = document.createElement("label");
language3Label.textContent = "Chinese";
divLabelWrapper.appendChild(language3Label);


const button = document.createElement("button");
button.type = "submit";
button.className = "button";
button.textContent = "Submit";
form.appendChild(button);


button.addEventListener("click", (e) => {
  form.className = "hide";
  document.getElementById("formtable").removeAttribute("class");

  e.preventDefault();
  document.getElementById("name").textContent = `${userName.value} ${userSecondName.value}`;
  document.getElementById("dateOfBirth").textContent = userDateOfBirth.value;

  if (userGenderMale.checked) {
    document.getElementById("gender").textContent = userGenderMale.value;
  } else if (userGenderFemale.checked) {
    document.getElementById("gender").textContent = userGenderFemale.value;
  } else if (userGenderNone.checked) {
    document.getElementById("gender").textContent = userGenderNone.value;
  } 

  document.getElementById("city").textContent = userCity.value;
  document.getElementById("address").textContent = userAddress.value;

  let res = [];
  let languageArray = [userLanguage1, userLanguage2, userLanguage3];
  languageArray.forEach(elem => {
    if (elem.checked) {
      res.push(elem.value);
    }
  })
  document.getElementById("languages").textContent = res.toString();
})