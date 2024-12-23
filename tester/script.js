let userInfo = {}; // Объект для хранения информации о пользователе

// Функция для переключения между слайдами
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

// Валидация формы регистрации
function validateRegistration() {
  const name = document.getElementById("name").value.trim();
  const birthDate = document.getElementById("birthDate").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  let isValid = true;

  // Проверка имени
  if (!/^[А-ЯЁ][а-яё]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Введите корректное имя (русские символы, первая заглавная)";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Проверка даты рождения
  const birthDateObj = new Date(birthDate);
  const today = new Date();
  const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
  if (!birthDate || birthDateObj > today || birthDateObj < minDate) {
    document.getElementById("birthDateError").textContent = "Введите корректную дату";
    isValid = false;
  } else {
    document.getElementById("birthDateError").textContent = "";
  }

  // Проверка пола
  if (!gender) {
    document.getElementById("genderError").textContent = "Выберите пол";
    isValid = false;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  if (isValid) {
    // Сохраняем информацию о пользователе
    userInfo = {
      name,
      birthDate,
      gender
    };

    // Переход на второй слайд
    showSlide(1);
  }
}

// Валидация теста
function validateQuiz() {
  const questions = ["q1", "q2", "q3", "q4", "q5", "q6"];
  const answers = {
    q1: "рыцарь",
    q2: "халлоунест",
    q3: "Хорнет",
    q4: "Гвоздь",
    q5: "57", 
    q6: "Мономон",
  };
  let score = 0;

  questions.forEach(question => {
    const errorElem = document.getElementById(`${question}Error`);
    errorElem.textContent = "";
    const answer = question === "q1" || question === "q2" ?
      document.getElementById(question).value.trim().toLowerCase() :
      document.querySelector(`input[name="${question}"]:checked`)?.value;

    if (answer === answers[question]) {
      score++;
    } else {
      errorElem.textContent = "Неправильный ответ";
    }
  });

  // Отображение данных пользователя и результатов на третьем слайде
  const resultText = `${userInfo.name}, вы ответили на ${score} из ${questions.length} вопросов верно.`;
  const userInfoText = `Имя: ${userInfo.name}<br>Дата рождения: ${userInfo.birthDate}<br>Пол: ${userInfo.gender}`;
  
  document.getElementById("resultText").innerHTML = `${resultText}<br><br><br>Информация о пользователе:<br><br>${userInfoText}`;

  // Переход на третий слайд
  showSlide(2);
}

// Обработчики событий для кнопок
document.getElementById("next1").addEventListener("click", validateRegistration);
document.getElementById("prev2").addEventListener("click", () => showSlide(0));
document.getElementById("next2").addEventListener("click", validateQuiz);
document.getElementById("restart").addEventListener("click", () => {
  showSlide(0);
  document.getElementById("name").value = "";
  document.getElementById("birthDate").value = "";
  document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
  document.querySelectorAll('input[type="text"]').forEach(input => input.value = "");
  document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
  document.querySelectorAll('.error').forEach(error => error.textContent = "");
});
