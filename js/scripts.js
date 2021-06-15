/*!
* Start Bootstrap - Freelancer v7.0.0 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<li class="mb-0" style="position: relative; padding: 0.5rem 1rem; text-decoration: none; background-color: #fff; border: 0.125rem solid rgba(0, 0, 0, 0.125);">
                <input type="radio" name="question${questionNumber}" value="${letter}" id="answer-check-${questionNumber}-${letter}">
                <label for="answer-check-${questionNumber}-${letter}">${letter} : ${currentQuestion.answers[letter]}</label>
            </li>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div><h4 class="bg-light">第 ${questionNumber+1} 題</h4></div>
            <div class="question"> ${currentQuestion.question} </div>
            <ul class="answers list-group"> ${answers.join("")} </ul>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'blue';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "口腔皮膜細胞中最小的成分為何？",
      answers: {
        a: "基因",
        b: "染色體",
        c: "DNA分子",
        d: "細胞核",
        e: "核苷酸"
      },
      correctAnswer: "e"
    },
    {
      question: "繼上題，最大的成分為何？",
      answers: {
        a: "基因",
        b: "染色體",
        c: "DNA分子",
        d: "細胞核",
        e: "核苷酸"
      },
      correctAnswer: "d"
    },
    {
      question: "若有一DNA的片段，其含氮鹼基序列為GGCATC，則下列何者為此DNA片段複製時所複製的DNA片段？",
      answers: {
        a: "GGCATC",
        b: "CTACGG",
        c: "CCGUAG",
        d: "CCGTAG"
      },
      correctAnswer: "d"
    },
    {
      question: "不同種類的細胞如肌肉、皮膜和神經細胞，其功能不同之原因為何？",
      answers: {
        a: "基因的種類不同",
        b: "基因的數目不同",
        c: "基因的表現不同",
        d: "基因的排列不同"
      },
      correctAnswer: "c"
    },
    {
      question: "DNA 與 RNA 組成小分子之比較，下列何者正確？",
      answers: {
        a: "DNA 的五碳醣無氧，RNA 的五碳醣有氧不同",
        b: "DNA 的含氮鹼基有 T，RNA 的含氮鹼基沒有 T",
        c: "DNA 的磷酸間會有羥基，RNA 的磷酸間沒有"
      },
      correctAnswer: "b"
    },
    {
      question: "桃麗羊的外型應該與何者相同？",
      answers: {
        a: "提供乳房細胞細胞核的母羊",
        b: "提供去細胞核卵細胞的母羊",
        c: "充當代理孕母的母羊"
      },
      correctAnswer: "a"
    },
    {
      question: "下列何者突變為發生於兩條非同源染色體的基因互換？",
      answers: {
        a: "缺失",
        b: "重複",
        c: "倒位",
        d: "易位"
      },
      correctAnswer: "d"
    },
    {
      question: "下列有關「試管嬰兒」的敘述何者正確？",
      answers: {
        a: "屬於離體培養的技術",
        b: "醫師可藉由腹腔鏡由產道，伸入母體中取出卵",
        c: "試管的意思是指精子與卵子於試管中結合",
        d: "胚胎可以選擇植入母體中或是繼續留在試管中發育。"
      },
      correctAnswer: "a"
    },
    {
      question: "人類的 ABO 血型不包含哪些遺傳特性？",
      answers: {
        a: "顯隱性",
        b: "多基因遺傳",
        c: "複對偶基因",
        d: "等顯性"
      },
      correctAnswer: "b"
    },
    {
      question: "有關 CRISPR 基因編輯所造成的突變敘述，哪些正確？",
      answers: {
        a: "一定產生新的生物特性或導致性狀消失，並可以遺傳給後代",
        b: "CRISPR 基因編輯發生在細胞質",
        c: "gRNA 與 DNA 序列配對是決定 Cas9 精準找到目標基因的關鍵",
        d: "Cas9 不是一種核酸酶",
        e: "CRISPR 技術無需任何細胞酵素的協助"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

