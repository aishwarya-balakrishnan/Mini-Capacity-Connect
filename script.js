/* =====================================================
PROGRAMMING SKILL ASSESSMENT APP
COMPLETE script.js
===================================================== */

/* =====================================================
WELCOME PAGE
===================================================== */

function startAssessment() {


window.location.href = "register.html";


}

/* =====================================================
STUDENT DETAILS
===================================================== */

function getStudentDetails() {


const savedDetails =
    localStorage.getItem("studentDetails");

if (!savedDetails) {

    return null;

}

try {

    return JSON.parse(savedDetails);

} catch (error) {

    return null;

}
```

}

/* =====================================================
SELECTED LANGUAGE
===================================================== */

function getSelectedLanguage() {

```
return localStorage.getItem(
    "selectedLanguage"
);
```

}

/* =====================================================
RESULT DATA
===================================================== */

function getResultData() {

```
const savedResult =
    localStorage.getItem("resultData");

if (!savedResult) {

    return null;

}

try {

    return JSON.parse(savedResult);

} catch (error) {

    return null;

}


}

/* =====================================================
TAKE SAME TEST
===================================================== */

function takeSameTest() {


const language =
    getSelectedLanguage();


if (!language) {

    window.location.href =
        "language.html";

    return;

}


localStorage.removeItem(
    "resultData"
);


window.location.href =
    "skill-test.html";


}

/* =====================================================
TAKE ANOTHER LANGUAGE TEST
===================================================== */

function takeAnotherTest() {


localStorage.removeItem(
    "resultData"
);


localStorage.removeItem(
    "selectedLanguage"
);


window.location.href =
    "language.html";
```

}

/* =====================================================
PROTECT SKILL TEST PAGE
===================================================== */

function checkSkillTestAccess() {


const student =
    getStudentDetails();

const language =
    getSelectedLanguage();


if (!student) {

    window.location.href =
        "register.html";

    return false;

}


if (!language) {

    window.location.href =
        "language.html";

    return false;

}


return true;
```

}

/* =====================================================
PROTECT RESULT PAGE
===================================================== */

function checkResultAccess() {


const student =
    getStudentDetails();

const result =
    getResultData();


if (!student) {

    window.location.href =
        "register.html";

    return false;

}


if (!result) {

    window.location.href =
        "language.html";

    return false;

}


return true;


}

/* =====================================================
PAGE LOAD
===================================================== */

document.addEventListener(
"DOMContentLoaded",
function () {


    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    /* ---------------------------------------------
       SKILL TEST PAGE
    --------------------------------------------- */

    if (
        currentPage ===
        "skill-test.html"
    ) {

        checkSkillTestAccess();

    }


    /* ---------------------------------------------
       RESULT PAGE
    --------------------------------------------- */

    if (
        currentPage ===
        "result.html"
    ) {

        checkResultAccess();

    }


}


);
