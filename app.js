// Quiz Application Logic with Answer Randomization
const STORAGE_KEY = 'quiz_progress';

// Lecture data mapping
const LECTURES = {
  networking: {
    title: 'Transport Layer & Networking',
    questions: NETWORKING_QUESTIONS
  },
  cybersecurity: {
    title: 'Cyber Security Essentials',
    questions: CYBER_SECURITY_QUESTIONS
  }
};

// Application state
let state = {
  selectedLecture: null,
  quizQuestions: [],
  currentIndex: 0,
  userAnswers: [],
  shuffledChoices: [], // Store shuffled order per question
  settings: {
    numQuestions: 'all',
    shuffle: true,
    persist: true
  }
};

// DOM Elements
const lectureSelection = document.getElementById('lectureSelection');
const settingsSection = document.getElementById('settingsSection');
const quizSection = document.getElementById('quizSection');
const resultSection = document.getElementById('resultSection');
const reviewSection = document.getElementById('reviewSection');

const btnStart = document.getElementById('btnStart');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnSubmit = document.getElementById('btnSubmit');
const btnReset = document.getElementById('btnReset');
const btnRetake = document.getElementById('btnRetake');
const btnReviewWrong = document.getElementById('btnReviewWrong');
const btnBackToLectures = document.getElementById('btnBackToLectures');

const numQuestionsSelect = document.getElementById('numQuestions');
const shuffleQuestionsCheck = document.getElementById('shuffleQuestions');
const persistProgressCheck = document.getElementById('persistProgress');

const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const scoreMini = document.getElementById('scoreMini');
const questionContainer = document.getElementById('questionContainer');
const choicesList = document.getElementById('choicesList');

// Utility: Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Shuffle answer choices for each question and track correct answer position
function prepareShuffledChoices(questions) {
  return questions.map(q => {
    const indices = q.choices.map((_, i) => i);
    const shuffled = shuffleArray(indices);
    const newCorrect = shuffled.indexOf(q.correct);
    return {
      order: shuffled,
      correctIndex: newCorrect
    };
  });
}

// Select a lecture
function selectLecture(lectureName) {
  state.selectedLecture = lectureName;
  const lecture = LECTURES[lectureName];
  
  document.getElementById('selectedLectureTitle').textContent = lecture.title + ' - Quiz Settings';
  
  lectureSelection.classList.add('hidden');
  settingsSection.classList.remove('hidden');
}

// Back to lecture selection
function backToLectures() {
  lectureSelection.classList.remove('hidden');
  settingsSection.classList.add('hidden');
  quizSection.classList.add('hidden');
  resultSection.classList.add('hidden');
  state.selectedLecture = null;
  clearProgress();
}

// Initialize Quiz
function startQuiz() {
  if (!state.selectedLecture) {
    alert('Please select a lecture first');
    return;
  }

  const numQ = numQuestionsSelect.value;
  const doShuffle = shuffleQuestionsCheck.checked;
  const doPersist = persistProgressCheck.checked;

  state.settings = { numQuestions: numQ, shuffle: doShuffle, persist: doPersist };

  let pool = [...LECTURES[state.selectedLecture].questions];
  if (doShuffle) pool = shuffleArray(pool);
  if (numQ !== 'all') pool = pool.slice(0, parseInt(numQ));

  state.quizQuestions = pool;
  state.userAnswers = new Array(pool.length).fill(null);
  state.shuffledChoices = prepareShuffledChoices(pool);
  state.currentIndex = 0;

  if (doPersist) saveProgress();

  settingsSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
  resultSection.classList.add('hidden');

  renderQuestion();
}

// Render current question
function renderQuestion() {
  const q = state.quizQuestions[state.currentIndex];
  const shuffleData = state.shuffledChoices[state.currentIndex];
  const userAnswer = state.userAnswers[state.currentIndex];

  progressText.textContent = `Question ${state.currentIndex + 1} of ${state.quizQuestions.length}`;
  const percent = ((state.currentIndex + 1) / state.quizQuestions.length) * 100;
  progressBar.style.width = percent + '%';

  const answered = state.userAnswers.filter(a => a !== null).length;
  scoreMini.textContent = `Answered: ${answered}/${state.quizQuestions.length}`;

  questionContainer.textContent = q.question;

  // Render shuffled choices
  choicesList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  shuffleData.order.forEach((origIdx, newIdx) => {
    const li = document.createElement('li');
    li.className = 'choice';
    li.innerHTML = `
      <input type="radio" name="answer" value="${newIdx}" id="choice${newIdx}" ${userAnswer === newIdx ? 'checked' : ''} />
      <label for="choice${newIdx}" style="cursor:pointer;flex:1">
        <span class="letter">${letters[newIdx]}.</span> ${q.choices[origIdx]}
      </label>
    `;
    li.addEventListener('click', () => {
      document.getElementById(`choice${newIdx}`).checked = true;
      selectAnswer(newIdx);
    });
    choicesList.appendChild(li);
  });

  // Button states
  btnPrev.disabled = state.currentIndex === 0;
  btnNext.style.display = state.currentIndex < state.quizQuestions.length - 1 ? 'inline-block' : 'none';
  btnSubmit.style.display = state.currentIndex === state.quizQuestions.length - 1 ? 'inline-block' : 'none';
}

// Select answer
function selectAnswer(choiceIndex) {
  state.userAnswers[state.currentIndex] = choiceIndex;
  if (state.settings.persist) saveProgress();
}

// Navigation
function prevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (state.currentIndex < state.quizQuestions.length - 1) {
    state.currentIndex++;
    renderQuestion();
  }
}

// Submit and calculate score
function submitQuiz() {
  let correct = 0;
  state.quizQuestions.forEach((q, i) => {
    const userChoice = state.userAnswers[i];
    const correctChoice = state.shuffledChoices[i].correctIndex;
    if (userChoice === correctChoice) correct++;
  });

  const total = state.quizQuestions.length;
  const incorrect = total - correct;
  const percent = Math.round((correct / total) * 100);

  document.getElementById('resTotal').textContent = total;
  document.getElementById('resCorrect').textContent = correct;
  document.getElementById('resIncorrect').textContent = incorrect;
  document.getElementById('resScore').textContent = percent + '%';

  quizSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
  reviewSection.classList.add('hidden');

  if (state.settings.persist) clearProgress();
}

// Review wrong answers
function reviewWrongAnswers() {
  const reviewList = document.getElementById('reviewList');
  reviewList.innerHTML = '';

  state.quizQuestions.forEach((q, i) => {
    const userChoice = state.userAnswers[i];
    const correctChoice = state.shuffledChoices[i].correctIndex;

    if (userChoice !== correctChoice) {
      const shuffleData = state.shuffledChoices[i];
      const userOrigIdx = userChoice !== null ? shuffleData.order[userChoice] : null;
      const correctOrigIdx = shuffleData.order[correctChoice];

      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div class="q"><strong>Q${i + 1}:</strong> ${q.question}</div>
        <div class="your">Your answer: ${userChoice !== null ? q.choices[userOrigIdx] : 'Not answered'}</div>
        <div class="correct">Correct answer: ${q.choices[correctOrigIdx]}</div>
      `;
      reviewList.appendChild(card);
    }
  });

  if (reviewList.children.length === 0) {
    reviewList.innerHTML = '<p style="color:var(--success)">All answers correct! 🎉</p>';
  }

  reviewSection.classList.remove('hidden');
}

// Retake quiz
function retakeQuiz() {
  resultSection.classList.add('hidden');
  settingsSection.classList.remove('hidden');
  clearProgress();
}

// Reset progress
function resetQuiz() {
  if (confirm('Clear all saved progress and restart?')) {
    clearProgress();
    location.reload();
  }
}

// LocalStorage helpers
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    selectedLecture: state.selectedLecture,
    quizQuestions: state.quizQuestions,
    userAnswers: state.userAnswers,
    shuffledChoices: state.shuffledChoices,
    currentIndex: state.currentIndex,
    settings: state.settings
  }));
}

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      state = data;
      if (state.selectedLecture && LECTURES[state.selectedLecture]) {
        lectureSelection.classList.add('hidden');
        settingsSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        renderQuestion();
        return true;
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
  }
  return false;
}

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

// Event Listeners
btnStart.addEventListener('click', startQuiz);
btnPrev.addEventListener('click', prevQuestion);
btnNext.addEventListener('click', nextQuestion);
btnSubmit.addEventListener('click', submitQuiz);
btnReset.addEventListener('click', resetQuiz);
btnRetake.addEventListener('click', retakeQuiz);
btnReviewWrong.addEventListener('click', reviewWrongAnswers);
btnBackToLectures.addEventListener('click', backToLectures);

// Lecture selection event listeners
document.querySelectorAll('.select-lecture-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lectureCard = e.target.closest('.lecture-card');
    const lectureName = lectureCard.dataset.lecture;
    selectLecture(lectureName);
  });
});

// On page load, check for saved progress
window.addEventListener('DOMContentLoaded', () => {
  if (persistProgressCheck.checked) {
    const resumed = loadProgress();
    if (resumed) {
      console.log('Resumed previous quiz session');
    }
  }
});
