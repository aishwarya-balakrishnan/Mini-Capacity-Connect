// ======================================
// STUDENT FORM
// ======================================

const studentForm = document.getElementById("studentForm");

if (studentForm) {

    studentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const registerNo = document.getElementById("registerNo").value;
        const department = document.getElementById("department").value;
        const year = document.getElementById("year").value;
        const language = document.getElementById("language").value;

        localStorage.setItem("name", name);
        localStorage.setItem("registerNo", registerNo);
        localStorage.setItem("department", department);
        localStorage.setItem("year", year);
        localStorage.setItem("language", language);

        window.location.href = "skill-test.html";

    });

}


// ======================================
// QUESTIONS
// ======================================

const questions = {

    Python: [
        {
            question: "Which function is used to display output in Python?",
            options: ["print()", "scan()", "display()", "show()"],
            answer: "print()"
        },

        {
            question: "Which symbol is used for a single-line comment in Python?",
            options: ["#", "//", "/*", "--"],
            answer: "#"
        },

        {
            question: "Which data type stores whole numbers in Python?",
            options: ["int", "string", "float", "boolean"],
            answer: "int"
        },

        {
            question: "Which keyword is used to create a function in Python?",
            options: ["def", "function", "fun", "create"],
            answer: "def"
        },

        {
            question: "What is the output of 2 + 3?",
            options: ["4", "5", "6", "23"],
            answer: "5"
        }
    ],

    Java: [
        {
            question: "Which statement is used to print output in Java?",
            options: [
                "System.out.println()",
                "print()",
                "display()",
                "show()"
            ],
            answer: "System.out.println()"
        },

        {
            question: "Which keyword is used to create a class in Java?",
            options: ["class", "create", "object", "new"],
            answer: "class"
        },

        {
            question: "Which data type stores whole numbers in Java?",
            options: ["int", "String", "float", "boolean"],
            answer: "int"
        },

        {
            question: "Which keyword is used to create an object in Java?",
            options: ["new", "object", "create", "class"],
            answer: "new"
        },

        {
            question: "What is the output of 2 + 3?",
            options: ["4", "5", "6", "23"],
            answer: "5"
        }
    ],

    C: [
        {
            question: "Which function is used to print output in C?",
            options: ["printf()", "print()", "display()", "cout"],
            answer: "printf()"
        },

        {
            question: "Which symbol is used for a single-line comment in C?",
            options: ["//", "#", "/*", "--"],
            answer: "//"
        },

        {
            question: "Which data type stores whole numbers in C?",
            options: ["int", "char", "float", "double"],
            answer: "int"
        },

        {
            question: "Which function is used to read input in C?",
            options: ["scanf()", "input()", "read()", "get()"],
            answer: "scanf()"
        },

        {
            question: "What is the output of 2 + 3?",
            options: ["4", "5", "6", "23"],
            answer: "5"
        }
    ],

    "C++": [
        {
            question: "Which object is commonly used for output in C++?",
            options: ["cout", "printf()", "print()", "output()"],
            answer: "cout"
        },

        {
            question: "Which header file is commonly used for cout?",
            options: ["iostream", "stdio.h", "string.h", "math.h"],
            answer: "iostream"
        },

        {
            question: "Which data type stores whole numbers in C++?",
            options: ["int", "char", "float", "string"],
            answer: "int"
        },

        {
            question: "Which symbol is used with cout?",
            options: ["<<", ">>", "==", "&&"],
            answer: "<<"
        },

        {
            question: "What is the output of 2 + 3?",
            options: ["4", "5", "6", "23"],
            answer: "5"
        }
    ]

};


// ======================================
// DISPLAY QUESTIONS
// ======================================

const skillTestForm =
    document.getElementById("skillTestForm");

const questionsContainer =
    document.getElementById("questionsContainer");


if (skillTestForm && questionsContainer) {

    const selectedLanguage =
        localStorage.getItem("language");


    // Check language
    if (!selectedLanguage || !questions[selectedLanguage]) {

        alert("Please select a programming language first.");

        window.location.href = "index.html";

    }
    else {

        const selectedQuestions =
            questions[selectedLanguage];


        // Show language
        const testCourse =
            document.getElementById("testCourse");

        if (testCourse) {

            testCourse.textContent =
                selectedLanguage + " Skill Test";

        }


        // Show student details
        const studentName =
            document.getElementById("studentName");

        if (studentName) {

            studentName.textContent =
                localStorage.getItem("name") || "";

        }


        const studentRegister =
            document.getElementById("studentRegister");

        if (studentRegister) {

            studentRegister.textContent =
                localStorage.getItem("registerNo") || "";

        }


        const studentDepartment =
            document.getElementById("studentDepartment");

        if (studentDepartment) {

            studentDepartment.textContent =
                localStorage.getItem("department") || "";

        }


        const studentYear =
            document.getElementById("studentYear");

        if (studentYear) {

            studentYear.textContent =
                localStorage.getItem("year") || "";

        }


        // Create questions
        selectedQuestions.forEach(function(item, index) {

            const questionNumber = index + 1;


            // Question heading
            const questionTitle =
                document.createElement("h3");

            questionTitle.textContent =
                questionNumber + ". " + item.question;


            questionsContainer.appendChild(
                questionTitle
            );


            // Options
            item.options.forEach(function(option) {

                const label =
                    document.createElement("label");


                const radio =
                    document.createElement("input");


                radio.type = "radio";

                radio.name =
                    "question" + questionNumber;

                radio.value =
                    option;

                radio.required = true;


                label.appendChild(radio);

                label.appendChild(
                    document.createTextNode(
                        " " + option
                    )
                );


                questionsContainer.appendChild(
                    label
                );

            });

        });


        // ======================================
        // SUBMIT SKILL TEST
        // ======================================

        skillTestForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                let score = 0;


                selectedQuestions.forEach(
                    function(item, index) {

                        const selectedAnswer =
                            document.querySelector(
                                'input[name="question' +
                                (index + 1) +
                                '"]:checked'
                            );


                        if (
                            selectedAnswer &&
                            selectedAnswer.value === item.answer
                        ) {

                            score++;

                        }

                    }
                );


                // Calculate percentage
                const percentage =
                    (score / selectedQuestions.length) * 100;


                // Calculate skill level
                let level;


                if (score <= 2) {

                    level = "Beginner";

                }
                else if (score <= 4) {

                    level = "Intermediate";

                }
                else {

                    level = "Advanced";

                }


                // Save result
                localStorage.setItem(
                    "skillScore",
                    score
                );

                localStorage.setItem(
                    "skillPercentage",
                    percentage
                );

                localStorage.setItem(
                    "skillLevel",
                    level
                );


                // Go to result
                window.location.href =
                    "result.html";

            }
        );

    }

}


// ======================================
// RESULT PAGE
// ======================================

const resultCourse =
    document.getElementById("resultCourse");


if (resultCourse) {

    const language =
        localStorage.getItem("language");

    const score =
        Number(
            localStorage.getItem("skillScore")
        );

    const percentage =
        Number(
            localStorage.getItem("skillPercentage")
        );

    const level =
        localStorage.getItem("skillLevel");


    // Language
    resultCourse.textContent =
        language + " Skill Assessment Result";


    // Score
    const skillScore =
        document.getElementById("skillScore");

    if (skillScore) {

        skillScore.textContent =
            score + " / 5";

    }


    // Level
    const skillLevel =
        document.getElementById("skillLevel");

    if (skillLevel) {

        skillLevel.textContent =
            level;

    }


    // Progress
    const skillProgress =
        document.getElementById("skillProgress");

    if (skillProgress) {

        skillProgress.value =
            percentage;

    }


    // Percentage
    const skillPercentage =
        document.getElementById("skillPercentage");

    if (skillPercentage) {

        skillPercentage.textContent =
            percentage + "%";

    }


    // Recommendation
    const recommendation =
        document.getElementById("recommendation");


    if (recommendation) {

        if (level === "Beginner") {

            recommendation.textContent =
                "Improve your basic programming concepts such as syntax, variables, data types and operators.";

        }
        else if (level === "Intermediate") {

            recommendation.textContent =
                "You have good basic knowledge. Improve loops, functions, problem solving and data structures.";

        }
        else {

            recommendation.textContent =
                "You have strong programming knowledge. You can move to advanced programming concepts.";

        }

    }

}


// ======================================
// TAKE TEST AGAIN
// ======================================

function startTestAgain() {

    localStorage.clear();

    window.location.href =
        "index.html";

}