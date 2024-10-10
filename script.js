const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

imageUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
      imageUpload.style.display = "none";
    };

    reader.readAsDataURL(file);
  } else {
    preview.style.display = "none";
    imageUpload.style.display = "block";
  }
});

const signUpload = document.getElementById("signUpload");
const signpreview = document.getElementById("sign-preview");

signUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      signpreview.src = e.target.result;
      signpreview.style.display = "block";
      signUpload.style.display = "none";
    };

    reader.readAsDataURL(file);
  } else {
    signpreview.style.display = "none";
    signUpload.style.display = "block";
  }
});

window.onload = function () {
  let previousValue = 100;
  previousValue += 1;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("code").value = previousValue;
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentMonth = monthNames[currentDate.getMonth()];

// Display the current year and month in the paragraph
document.getElementById("year").textContent = `${currentYear}`;
document.getElementById("footer-year").textContent = `${currentYear}`;
document.getElementById("month").textContent = `${currentMonth}`;
function toggleInput() {
  var inputField = document.getElementById("mobile-search-input");

  if (inputField.style.display === "none" || inputField.style.display === "") {
    inputField.style.display = "block";
  } else {
    inputField.style.display = "none";
  }
}

//form submission

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(event.target);

  var formValues = {};
  formData.forEach(function (value, key) {
    formValues[key] = value;
  });
  console.log(formValues);
});
