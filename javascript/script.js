// This file contains the main javascript executions

// array of objects - each object will contain lesson data

const lessonDummy = [
  {
    id: 1,
    fldlesson_header: "La Asunción",
    fldlesson_description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    fldexamples: [
      { descr: "001 descr xxxxx", code: "001 code xxxxx" },
      { descr: "002 descr xxxxx", code: "002 code xxxxx" },
      { descr: "003 descr xxxxx", code: "003 code xxxxx" },
    ],
    fldchallenge_info: [
      { name: 1, descr: "001 descr xxxxx", hint: "001 hint xxxxx" },
      { name: 2, descr: "002 descr xxxxx", hint: "002 hint xxxxx" },
      { name: 3, descr: "003 descr xxxxx", hint: "003 hint xxxxx" },
    ],
    fldadvanced_info:
      "<html><body><div style='background-color: maroon; padding: 10px; color: white' ><h5 style='font-weight:bold'>This part is hmtl code.</h5> <p> You can customize this part of the view to further explain the lesson.</p> <div></body></html>",
    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"],
  },
  {
    id: 2,
    fldlesson_header: "Fototos",
    fldlesson_description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    fldexamples: [
      { descr: "001 descr lesson 1", code: "001 code lesson 2" },
      { descr: "002 descr lesson 2", code: "002 code lesson 2" },
      { descr: "003 descr lesson 2", code: "003 code lesson 2" },
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr lesson 2", hint: "001 hint lesson 2" },
      { id: 2, descr: "002 descr lesson 2", hint: "002 hint lesson 2" },
      { id: 3, descr: "003 descr lesson 2", hint: "003 hint lesson 2" },
    ],
    fldadvanced_info:
      "<table> <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table>",

    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"],
  },
  {
    id: 3,
    fldlesson_header: "Lesson 3",
    fldlesson_description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    fldexamples: [
      { descr: "001 descr lesson 3", code: "001 code lesson 3" },
      { descr: "002 descr lesson 3", code: "002 code lesson 3" },
      { descr: "003 descr lesson 3", code: "003 code lesson 3" },
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr lesson 3", hint: "001 hint lesson 3" },
      { id: 2, descr: "002 descr lesson 3", hint: "002 hint lesson 3" },
      { id: 3, descr: "003 descr lesson 3", hint: "003 hint lesson 3" },
    ],
    fldadvanced_info:
      "<div style='background-color: darkgreen; color: white'><table > <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table> <div>",

    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"],
  },
];

// Open the console to see this
console.log("/script/script.js is working.");

// The scripts start here
//
//

// This is a class to manage the lessons
class LessonControl {
  constructor() {
    // keeps the index of the lesson to display
    this.lessonNumber = 0;
  }

  // function to change the index
  changeLessonNumber(number) {
    // show the first lesson
    if (number == 0) {
      this.lessonNumber = number;
      // call function to update the rest of the components
      this.updatePage();
      return;
    }

    // go to prev lesson, 'if' statement to make sure it does not go past 1st lesson (results in an error)
    if (number == -1 && this.lessonNumber != 0) {
      this.lessonNumber += number;
      // call function to update the rest of the components
      this.updatePage();
      return;
    }

    // go to next lesson, 'if' statement to make sure it does not go past last lesson (results in an error)
    if (number == 1 && this.lessonNumber < lessonDummy.length - 1) {
      this.lessonNumber += number;
      // call function to update the rest of the components
      this.updatePage();
      return;
    }
  }

  // iterates through 'lessonDummy.fldexamples' and returns the examples formated
  getLessonExamples() {
    var inner_HTML = "";

    lessonDummy[this.lessonNumber].fldexamples.forEach((value) => {
      inner_HTML += "<p>" + value.descr + "</p>";
      inner_HTML += "<code>" + value.code + "</code>";
      inner_HTML += "<hr>";
    });

    if (inner_HTML == "") {
      inner_HTML = "...loading examples.";
    }

    return inner_HTML;
  }

  // iterates through 'lessonDummy.fldexamples' and returns the examples formated
  getLessonChallenges() {
    var inner_HTML = "";

    lessonDummy[this.lessonNumber].fldchallenge_info.forEach((value) => {
      inner_HTML += "<p>" + value.descr + "</p>";
      inner_HTML += "<p>" + value.hint + "</p>";
      inner_HTML += "<hr>";
    });

    if (inner_HTML == "") {
      inner_HTML = "...loading challenges.";
    }

    return inner_HTML;
  }

  getTagList() {
    var inner_HTML = "<ul>";

    lessonDummy[this.lessonNumber].fldtag_list.forEach((value) => {
      inner_HTML += "<li>" + value + "</li>";
    });

    inner_HTML += "</ul>";

    if (inner_HTML == "") {
      inner_HTML = "...loading tag list.";
    }

    return inner_HTML;
  }

  // updates page components when lesson index changes
  updatePage() {
    console.log("... page is being updated.");

    // Change lesson header
    document.getElementById("lessonHeader").innerHTML =
      lessonDummy[this.lessonNumber].fldlesson_header;

    // Change lesson description
    document.getElementById("lessonDescr").innerHTML =
      lessonDummy[this.lessonNumber].fldlesson_description;

    // Change lesson description - gets values from getLessonExamples()
    document.getElementById("lessonExamples").innerHTML =
      this.getLessonExamples();

    // Change lesson description - gets values from getLessonChallenges()
    document.getElementById("lessonChallenges").innerHTML =
      this.getLessonChallenges();

    // Change lesson advanced information - the information is stored as html-markup
    document.getElementById("advanceInformation").innerHTML =
      lessonDummy[this.lessonNumber].fldadvanced_info.toString();

    // Change lesson description - gets values from getTagList()
    document.getElementById("lessonTagList").innerHTML = this.getTagList();
  }
}

// create a new LessonControl object
const lesson_Control = new LessonControl();

// Show the 1st lesson using the new LessonControl object
lesson_Control.changeLessonNumber(0);

// Go to the next lesson onclick
function goToNextLesson() {
  lesson_Control.changeLessonNumber(1);
}

// Go to the prev lesson onclick
function goToPrevLesson() {
  lesson_Control.changeLessonNumber(-1);
}
