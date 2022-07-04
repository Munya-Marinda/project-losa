// This file contains the main javascript executions

// Thanks Legacy.
// I hope JB, Luther, Hope, Amilda, Pedro, ... and other will join us.

//
//
//
// Dummy Data Ends
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// array of objects - each object will contain lesson data

const lessonDummy = [
  {
    id: 1,
    fldlesson_header: "Getting started with HTML",
    fldlesson_description:
      "<ul> <li> HTML = HyperText Markup Language.  <li> HTML’s primary function is to define the structure of a document using a tagging system</li>  <li>... and allows web browsers to present web pages using a standardized language. </li><li> Originally used to create content and apply style information to web pages: defines which parts of a document are headings, paragraphs, tables etc </li><li> ... and can be used to define how each section is presented. </li><li> Latest iteration is HTML5, which introduced tags for multimedia content to be displayed natively in HTML.</li></ul>",

    fldlesson_subheaders: [
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" }
    ],
    fldexamples: [
      { descr: "001 descr xxxxx", code: "001 code xxxxx" },
      { descr: "002 descr xxxxx", code: "002 code xxxxx" },
      { descr: "003 descr xxxxx", code: "003 code xxxxx" }
    ],
    fldchallenge_info: [
      { name: 1, descr: "001 descr xxxxx", hint: "001 hint xxxxx" },
      { name: 2, descr: "002 descr xxxxx", hint: "002 hint xxxxx" },
      { name: 3, descr: "003 descr xxxxx", hint: "003 hint xxxxx" }
    ],
    fldadvanced_info:
      "<html><body><div style='background-color: maroon; padding: 10px; color: white' ><h5 style='font-weight:bold'>This part is hmtl code.</h5> <p> You can customize this part of the view to further explain the lesson.</p> <div></body></html>",
    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"]
  },
  {
    id: 2,
    fldlesson_header: "Using tags properly",
    fldlesson_description:
      "<li> HTML is made up of a series of pre-defined ”Tags” </li><li> Which are indicated by triangular brackets: </li><li>like this, <code>  < p > </code> This text is tagged as a paragraph <code> < / p > </code> </li><li> Tags need to be opened and closed: </li><li> An opening tag looks like this: <code> < p > </code> </li><li> A closing tag looks like this: <code> < / p > </code>  </li><li> Tags must be “nested”:  </li><li> i.e. opened and closed in the correct order: </li><li> In practice, this means that when you open a tag which “nests” in another set of tags, </li><li> ... then it must be closed before the surrounding tag is closed: </li><li> <code> < p > </code> The nested tag <code> < em > </code> must be closed <code>  < / em > </code> before the surrounding tag <code> < / p > </code> </li>",
    fldlesson_subheaders: [
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" }
    ],
    fldexamples: [
      { descr: "001 descr lesson 1", code: "001 code lesson 2" },
      { descr: "002 descr lesson 2", code: "002 code lesson 2" },
      { descr: "003 descr lesson 2", code: "003 code lesson 2" }
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr lesson 2", hint: "001 hint lesson 2" },
      { id: 2, descr: "002 descr lesson 2", hint: "002 hint lesson 2" },
      { id: 3, descr: "003 descr lesson 2", hint: "003 hint lesson 2" }
    ],
    fldadvanced_info:
      "<table> <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table>",

    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"]
  },
  {
    id: 3,
    fldlesson_header: "Introducing Attributes: Getting started with CSS",
    fldlesson_description:
      "<li> <b>Cascading Style Sheets</b> – define the look and formatting of web documents. </li><li> Designed to separate document content from presentation. </li> <br><b> Cornerstone of the web: </b> <li> Helps to create visually engaging web pages, </li><li> Improves accessibility </li><li> Allows for adaptive webpages for mobile platforms </li> <br> <li> <b>HTML </b> is for defining structural elements of a webpage </li> <li> <b> CSS</b> is for defining the style – good practice to separate the two.</li>",
    fldlesson_subheaders: [
      {
        subHeader: "Benefits of CSS",
        subDescr:
          "<li> Style rules can be applied to multiple pages. </li> <li> Changes can be made to one CSS file rather than multiple HTML files. </li> <li> Browsers retain a copy of CSS, speeding up load times. </li> <li> CSS can allow for responsive web design on different platforms (desktop, mobile, tablets etc.). </li> <li> Separating HTML and style elements improves accessibility, </li> <li> particularly for readers using page reader applications.  </li>"
      }
    ],
    fldexamples: [
      { descr: "001 descr lesson 3", code: "001 code lesson 3" },
      { descr: "002 descr lesson 3", code: "002 code lesson 3" },
      { descr: "003 descr lesson 3", code: "003 code lesson 3" }
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr lesson 3", hint: "001 hint lesson 3" },
      { id: 2, descr: "002 descr lesson 3", hint: "002 hint lesson 3" },
      { id: 3, descr: "003 descr lesson 3", hint: "003 hint lesson 3" }
    ],
    fldadvanced_info:
      "<div style='background-color: darkgreen; color: white'><table > <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table> <div>",

    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"]
  },
  {
    id: 4,
    fldlesson_header: "Selectors and Declarations",
    fldlesson_description: "CSS rules consist of a selector and declaration:",
    fldlesson_subheaders: [
      {
        subHeader: "1. Selectors and Declarations",
        subDescr:
          " <div style='margin-left:10px ;padding-left: 20px ; border-left: 4px red solid'><code> h1, h2, h3 { <br>        font-family: arial, helvetica, sans-serif; <br>       font-weight: bold; <br>       color: red;} </code> </div> <br> <ul><li> This rule applies to headings, and defines the font type, weight, and colour.</li></ul>"
      },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" }
    ],
    fldexamples: [
      { descr: "001 descr lesson 3", code: "001 code lesson 3" },
      { descr: "002 descr lesson 3", code: "002 code lesson 3" },
      { descr: "003 descr lesson 3", code: "003 code lesson 3" }
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr lesson 3", hint: "001 hint lesson 3" },
      { id: 2, descr: "002 descr lesson 3", hint: "002 hint lesson 3" },
      { id: 3, descr: "003 descr lesson 3", hint: "003 hint lesson 3" }
    ],
    fldadvanced_info:
      "<div style='background-color: darkgreen; color: white'><table > <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table> <div>",

    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"]
  },
  {
    id: 5,
    fldlesson_header: "XXXXXXXXX",
    fldlesson_description: "XXXXXXXXX",
    fldlesson_subheaders: [
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" }
    ],
    fldexamples: [
      { descr: "001 descr lesson 3", code: "001 code lesson 3" },
      { descr: "002 descr lesson 3", code: "002 code lesson 3" },
      { descr: "003 descr lesson 3", code: "003 code lesson 3" }
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr lesson 3", hint: "001 hint lesson 3" },
      { id: 2, descr: "002 descr lesson 3", hint: "002 hint lesson 3" },
      { id: 3, descr: "003 descr lesson 3", hint: "003 hint lesson 3" }
    ],
    fldadvanced_info:
      "<div style='background-color: darkgreen; color: white'><table > <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table> <div>",

    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"]
  },
  {
    id: 6,
    fldlesson_header: "XXXXXXXXX",
    fldlesson_description: "XXXXXXXXX",
    fldlesson_subheaders: [
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" }
    ],
    fldexamples: [
      { descr: "001 descr lesson 3", code: "001 code lesson 3" },
      { descr: "002 descr lesson 3", code: "002 code lesson 3" },
      { descr: "003 descr lesson 3", code: "003 code lesson 3" }
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr lesson 3", hint: "001 hint lesson 3" },
      { id: 2, descr: "002 descr lesson 3", hint: "002 hint lesson 3" },
      { id: 3, descr: "003 descr lesson 3", hint: "003 hint lesson 3" }
    ],
    fldadvanced_info:
      "<div style='background-color: darkgreen; color: white'><table > <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table> <div>",

    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"]
  }
];

//
//
//
// Dummy Data Ends
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
    // number = 3; // DEBUG!!!

    // show the first lesson
    if (number === 0) {
      // if (number === 3) { // DEBUG!!!
      this.lessonNumber = number;
      // call function to update the rest of the components
      this.updatePage();
      return;
    }

    // go to prev lesson, 'if' statement to make sure it does not go past 1st lesson (results in an error)
    if (number === -1 && this.lessonNumber !== 0) {
      this.lessonNumber += number;
      // call function to update the rest of the components
      this.updatePage();
      return;
    }

    // go to next lesson, 'if' statement to make sure it does not go past last lesson (results in an error)
    if (number === 1 && this.lessonNumber < lessonDummy.length - 1) {
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

    if (inner_HTML === "") {
      inner_HTML = "...loading examples.";
    }

    return inner_HTML;
  }

  // iterates through 'lessonDummy.fldlesson_subheaders' and returns the examples formated
  getLessonSubHeaders() {
    var inner_HTML = "";

    lessonDummy[this.lessonNumber].fldlesson_subheaders.forEach((value) => {
      inner_HTML += "<h4>" + value.subHeader + "</h4>";
      inner_HTML += "<p>" + value.subDescr + "</p>";
    });

    if (inner_HTML === "") {
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

    if (inner_HTML === "") {
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

    if (inner_HTML === "") {
      inner_HTML = "...loading tag list.";
    }

    return inner_HTML;
  }

  // updates page components when lesson index changes
  updatePage() {
    console.log("... page is being updated.");

    // Change lesson id
    document.getElementById("lessonID").innerHTML =
      "HTML Lesson ID: " + lessonDummy[this.lessonNumber].id.toString();

    // Change lesson header
    document.getElementById("lessonHeader").innerHTML =
      lessonDummy[this.lessonNumber].fldlesson_header;

    // Change lesson description
    document.getElementById("lessonDescr").innerHTML =
      lessonDummy[this.lessonNumber].fldlesson_description;

    // Change lesson sub-headers
    document.getElementById(
      "lessonSubHeaders"
    ).innerHTML = this.getLessonSubHeaders();

    // Change lesson examples - gets values from getLessonExamples()
    document.getElementById(
      "lessonExamples"
    ).innerHTML = this.getLessonExamples();

    // Change lesson challanges - gets values from getLessonChallenges()
    document.getElementById(
      "lessonChallenges"
    ).innerHTML = this.getLessonChallenges();

    // Change lesson advanced information - the information is stored as html-markup
    document.getElementById("advanceInformation").innerHTML = lessonDummy[
      this.lessonNumber
    ].fldadvanced_info.toString();

    // Change tag list - gets values from getTagList()
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

//
//
//
//

const lessonObjectTemplate = {
  id: 3,
  fldlesson_header: "XXXXXXXXX",
  fldlesson_subheader: "Sub-head",
  fldlesson_description: "XXXXXXXXX",
  fldexamples: [
    { descr: "001 descr lesson 3", code: "001 code lesson 3" },
    { descr: "002 descr lesson 3", code: "002 code lesson 3" },
    { descr: "003 descr lesson 3", code: "003 code lesson 3" }
  ],
  fldchallenge_info: [
    { id: 1, descr: "001 descr lesson 3", hint: "001 hint lesson 3" },
    { id: 2, descr: "002 descr lesson 3", hint: "002 hint lesson 3" },
    { id: 3, descr: "003 descr lesson 3", hint: "003 hint lesson 3" }
  ],
  fldadvanced_info:
    "<div style='background-color: darkgreen; color: white'><table > <th>This is advance information</th> <tr> <td>property name 1</td> <td>property value 1</td> </tr> <tr> <td>property name 2</td> <td>property value 2</td> </tr> <tr> <td>property name 3</td> <td>property value 3</td> </tr> </table> <div>",

  fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"]
};
