document.getElementById('birthdate').addEventListener('input', function () {
  const birthdate = new Date(this.value);
  const currentDate = new Date();
  const ageInDays = Math.floor((currentDate - birthdate) / (60 * 60 * 24));
  document.getElementById('result').innerText = `Your age in days is ${ageInDays} days.`;
});

document.getElementById("birthdate").max = new Date().toISOString().split("T")[0];

document.getElementById('birthdate').addEventListener('input', function () {

  const birthdate = new Date(this.value);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthdate;
  const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  document.getElementById('result').textContent = `Your age in days is ${ageInDays} days.`;
});

document.getElementById("birthdate").max = new Date().toISOString().split("T")[0];
