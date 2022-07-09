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
    id: 0,
    fldlesson_header: "What is this platform?",
    fldlesson_banner_img: "logo_LOSA.svg",
    fldlesson_description:
      "<div style='text-align: center; padding: 20px' > Project LOSA is a Project aimed at getting entry level and experienced programmers invotved in contributing their knowledge for beginners to learn. This knowledge will be shared on the LOSA platform with free access to the public.</div>",
  },
  {
    id: 1,
    fldlesson_header: "HTML",
    fldlesson_banner_img: "html001.png",
    fldlesson_description: "<span>  </span>",

    fldlesson_subheaders: [
      {
        subHeader: "What is it?",
        subDescr: "It is the abbreviation of <i>HyperText Markup Language</i>.",
      },
      {
        subHeader: "What does it do?",
        subDescr:
          "HTML’s primary function is to define the structure of a document using a <i>tagging system</i>.",
      },
    ],
    fldexamples: [{ descr: "001 descr xxxxx", code: "001 code xxxxx" }],
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
    fldlesson_header: "Using tags properly",
    fldlesson_banner_img: "html002.png",
    fldlesson_description:
      "<li> HTML is made up of a series of pre-defined ”Tags” </li><li> Which are indicated by triangular brackets: </li><li>like this, <code>  < p > </code> This text is tagged as a paragraph <code> < / p > </code> </li><li> Tags need to be opened and closed: </li><li> An opening tag looks like this: <code> < p > </code> </li><li> A closing tag looks like this: <code> < / p > </code>  </li><li> Tags must be “nested”:  </li><li> i.e. opened and closed in the correct order: </li><li> In practice, this means that when you open a tag which “nests” in another set of tags, </li><li> ... then it must be closed before the surrounding tag is closed: </li><li> <code> < p > </code> The nested tag <code> < em > </code> must be closed <code>  < / em > </code> before the surrounding tag <code> < / p > </code> </li>",
    fldlesson_subheaders: [
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
    ],
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
    fldlesson_header: "Introducing Attributes: Getting started with CSS",
    fldlesson_banner_img: "html003.png",
    fldlesson_description:
      "<li> <b>Cascading Style Sheets</b> – define the look and formatting of web documents. </li><li> Designed to separate document content from presentation. </li> <br><b> Cornerstone of the web: </b> <li> Helps to create visually engaging web pages, </li><li> Improves accessibility </li><li> Allows for adaptive webpages for mobile platforms </li> <br> <li> <b>HTML </b> is for defining structural elements of a webpage </li> <li> <b> CSS</b> is for defining the style – good practice to separate the two.</li>",
    fldlesson_subheaders: [
      {
        subHeader: "Benefits of CSS",
        subDescr:
          "<li> Style rules can be applied to multiple pages. </li> <li> Changes can be made to one CSS file rather than multiple HTML files. </li> <li> Browsers retain a copy of CSS, speeding up load times. </li> <li> CSS can allow for responsive web design on different platforms (desktop, mobile, tablets etc.). </li> <li> Separating HTML and style elements improves accessibility, </li> <li> particularly for readers using page reader applications.  </li>",
      },
    ],
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
  {
    id: 4,
    fldlesson_header: "Selectors and Declarations",
    fldlesson_banner_img: "standardBanner1.png",
    fldlesson_description: "CSS rules consist of a selector and declaration:",
    fldlesson_subheaders: [
      {
        subHeader: "1. Selectors and Declarations",
        subDescr:
          " <div style='margin-left:10px ;padding-left: 20px ; border-left: 4px red solid'><code> h1, h2, h3 { <br>        font-family: arial, helvetica, sans-serif; <br>       font-weight: bold; <br>       color: red;} </code> </div> <br> <ul><li> This rule applies to headings, and defines the font type, weight, and colour.</li></ul>",
      },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
    ],
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
  {
    id: 5,
    fldlesson_header: "XXXXXXXXX",
    // fldlesson_banner_img: "standardBanner1.png",
    fldlesson_description: "XXXXXXXXX",
    fldlesson_subheaders: [
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
    ],
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
  {
    id: 6,
    fldlesson_header: "XXXX Header XXXXX",
    fldlesson_banner_img: "standardBanner1.png",
    fldlesson_description: "XXXX Short Description XXXXX",
    fldlesson_subheaders: [
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
      { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
    ],
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
    // show the first lesson
    if (number === 0) {
      this.lessonNumber = number;
      // call function to update the rest of the components
      this.updatePage();
      return;
    }

    // go to prev lesson, 'if' statement to make sure it does not go past 1st lesson (results in an error)
    if (number === -1 && this.lessonNumber !== 0) {
      this.lessonNumber += number;
      // animate out the lesson
      lesson_Control.animate("out", "lessonBannerImage");
      lesson_Control.animate("out", "lessonID");
      lesson_Control.animate("out", "lessonHeader");
      lesson_Control.animate("out", "lessonDescr");
      lesson_Control.animate("out", "lessonSubHeaders");
      lesson_Control.animate("out", "lessonExamples");
      lesson_Control.animate("out", "lessonChallenges");
      lesson_Control.animate("out", "advanceInformation");
      lesson_Control.animate("out", "lessonTagList");
      //
      // wait after animation and load new lesson
      setTimeout(() => {
        // call function to update the rest of the components
        this.updatePage();
      }, 500);
      // wait after content loads to animate in new lesson
      setTimeout(() => {
        lesson_Control.animate("in", "lessonBannerImage");
        lesson_Control.animate("in", "lessonID");
        lesson_Control.animate("in", "lessonHeader");
        lesson_Control.animate("in", "lessonDescr");
        lesson_Control.animate("in", "lessonSubHeaders");
        lesson_Control.animate("in", "lessonExamples");
        lesson_Control.animate("in", "lessonChallenges");
        lesson_Control.animate("in", "advanceInformation");
        lesson_Control.animate("in", "lessonTagList");
      }, 500);
    }

    // go to next lesson, 'if' statement to make sure it does not go past last lesson (results in an error)
    if (number === 1 && this.lessonNumber < lessonDummy.length - 1) {
      this.lessonNumber += number;
      // animate out the lesson
      lesson_Control.animate("out", "lessonBannerImage");
      lesson_Control.animate("out", "lessonID");
      lesson_Control.animate("out", "lessonHeader");
      lesson_Control.animate("out", "lessonDescr");
      lesson_Control.animate("out", "lessonSubHeaders");
      lesson_Control.animate("out", "lessonExamples");
      lesson_Control.animate("out", "lessonChallenges");
      lesson_Control.animate("out", "advanceInformation");
      lesson_Control.animate("out", "lessonTagList");
      //
      // wait after animation and load new lesson
      setTimeout(() => {
        // call function to update the rest of the components
        this.updatePage();
      }, 500);
      // wait after content loads to animate in new lesson
      setTimeout(() => {
        lesson_Control.animate("in", "lessonBannerImage");
        lesson_Control.animate("in", "lessonID");
        lesson_Control.animate("in", "lessonHeader");
        lesson_Control.animate("in", "lessonDescr");
        lesson_Control.animate("in", "lessonSubHeaders");
        lesson_Control.animate("in", "lessonExamples");
        lesson_Control.animate("in", "lessonChallenges");
        lesson_Control.animate("in", "advanceInformation");
        lesson_Control.animate("in", "lessonTagList");
      }, 500);
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

    // Add header if any examples were found
    if (inner_HTML !== "") {
      inner_HTML =
        ' <h3 style="font-weight: bold; padding-top: 15px; padding-bottom: 10px"> Examples </h3>' +
        '<div style="border: 1px dashed red; padding: 10px; ">' +
        inner_HTML +
        "</div>";
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
      inner_HTML = "...loading subheader.";
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

    if (inner_HTML !== "") {
      inner_HTML =
        '<h4 style=" font-weight: bold; padding-top: 25px; padding-bottom: 10px; " > Challenge! </h4>' +
        '<div style="border: 1px dashed red; padding: 10px; ">' +
        inner_HTML +
        "</div>";
    }

    return inner_HTML;
  }

  // iterates through 'lessonDummy.fldtag_list' and returns the tag list formated
  getTagList() {
    var inner_HTML = "<ul>";

    lessonDummy[this.lessonNumber].fldtag_list.forEach((value) => {
      inner_HTML += "<li>" + value + "</li>";
    });

    inner_HTML += "</ul>";

    if (inner_HTML !== "") {
      inner_HTML =
        '<h6 style="font-weight: bold; padding-top: 35px; padding-bottom: 10px"> Related Tags </h6>' +
        '<div style="border: 1px dashed red; padding: 10px; ">' +
        inner_HTML +
        "</div>";
    }

    return inner_HTML;
  }

  // generate a random header image if header image is none existant - can be used on other parts of the page as well.
  getRandomBannerImage() {
    // array of images
    const images = ["standardBanner1", "standardBanner2", "standardBanner3"];

    // Returns a random integer from 0 to ...images.length
    var rand = Math.floor(Math.random() * images.length);

    return images[rand] + ".png";
  }

  //
  // animate new content
  animate(kind, elementID) {
    //get the main div
    var main = document.getElementById(elementID);

    // which kind of animation
    switch (kind) {
      //  element out animation
      case "out":
        // id of the animation
        let fadeOut1_id = null;
        // value to animate [opacity = opacityValue]
        var opacityValue = 1;
        // clear the animation - safety
        clearInterval(fadeOut1_id);
        // start the animation
        fadeOut1_id = setInterval(fadeOut1, 15);
        // actual animation
        function fadeOut1() {
          // if opacity reaches/less than 0
          if (opacityValue < 0) {
            // stop animation
            clearInterval(fadeOut1_id);
          } else {
            // gradually decrease opacity
            main.style.opacity = opacityValue -= 0.1;
          }
        }
        break;

      case "in":
        // id of the animation
        let fadeIn1_id = null;
        // value to animate [opacity = opacityValue]
        var opacityValue = 0;
        // clear the animation - safety
        clearInterval(fadeIn1_id);
        // start the animation
        fadeIn1_id = setInterval(fadeIn1, 15);
        // actual animation
        function fadeIn1() {
          // if opacity reaches/more than 1
          if (opacityValue > 1) {
            // stop animation
            clearInterval(fadeIn1_id);
          } else {
            // gradually increase opacity
            main.style.opacity = opacityValue += 0.1;
          }
        }
        break;

      default:
        break;
    }
  }

  // updates page components when lesson index changes
  updatePage() {
    //
    // start of if-statements :: used to validate data
    // below: variables to replace empty data
    var lesson_banner_img = this.getRandomBannerImage();
    //
    // check if header image exists
    if (lessonDummy[this.lessonNumber].fldlesson_banner_img) {
      lesson_banner_img = lessonDummy[this.lessonNumber].fldlesson_banner_img;
    }

    // (id) is mandatory - skip if none exist
    if (typeof lessonDummy[this.lessonNumber].id === typeof 1) {
      // Change lesson id
      document.getElementById("lessonID").innerHTML =
        "HTML Lesson ID: " + lessonDummy[this.lessonNumber].id.toString();

      // Change lesson banner image
      document.getElementById("lessonBannerImage").innerHTML =
        "<img src='./images/png-jpeg/LessonBanner/" +
        lesson_banner_img +
        "' style='width:100%' /> ";

      // Ignore if none exist
      if (lessonDummy[this.lessonNumber].fldlesson_header) {
        // Change lesson header
        document.getElementById("lessonHeader").innerHTML =
          lessonDummy[this.lessonNumber].fldlesson_header.toUpperCase();
        document.getElementById("lessonHeader").style.display = "block";
      } else {
        document.getElementById("lessonHeader").style.display = "none";
      }

      if (lessonDummy[this.lessonNumber].fldlesson_description) {
        // Change lesson description
        document.getElementById("lessonDescr").innerHTML =
          lessonDummy[this.lessonNumber].fldlesson_description;
        document.getElementById("lessonDescr").style.display = "block";
      } else {
        document.getElementById("lessonDescr").style.display = "none";
      }

      if (lessonDummy[this.lessonNumber].fldlesson_subheaders) {
        // Change lesson sub-headers
        document.getElementById("lessonSubHeaders").innerHTML =
          this.getLessonSubHeaders();
        document.getElementById("lessonSubHeaders").style.display = "block";
      } else {
        document.getElementById("lessonSubHeaders").style.display = "none";
      }

      if (lessonDummy[this.lessonNumber].fldexamples) {
        // Change lesson examples - gets values from getLessonExamples()
        document.getElementById("lessonExamples").innerHTML =
          this.getLessonExamples();
        document.getElementById("lessonExamples").style.display = "block";
      } else {
        document.getElementById("lessonExamples").style.display = "none";
      }

      if (lessonDummy[this.lessonNumber].fldchallenge_info) {
        // Change lesson challanges - gets values from getLessonChallenges()
        document.getElementById("lessonChallenges").innerHTML =
          this.getLessonChallenges();
        document.getElementById("lessonChallenges").style.display = "block";
      } else {
        document.getElementById("lessonChallenges").style.display = "none";
      }

      if (lessonDummy[this.lessonNumber].fldadvanced_info) {
        // Change lesson advanced information - the information is stored as html-markup
        document.getElementById("advanceInformation").innerHTML =
          ' <h4 style="font-weight: bold; padding-top: 35px; padding-bottom: 10px"> Advanced Information </h4>' +
          lessonDummy[this.lessonNumber].fldadvanced_info.toString();
      }

      if (lessonDummy[this.lessonNumber].fldtag_list) {
        // Change tag list - gets values from getTagList()
        document.getElementById("lessonTagList").innerHTML = this.getTagList();
        document.getElementById("lessonTagList").style.display = "block";
      } else {
        document.getElementById("lessonTagList").style.display = "none";
      }
    }
    //
    // end of if-statements - used to validate data
    // check curly-brace '{}' carefully
    //
  } //update page
} // class LessonControl

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
// Perfect Template

const lessonObjectTemplate = {
  id: 6,
  fldlesson_header: "XXXX Header XXXXX",
  fldlesson_banner_img: "standardBanner1.png",
  fldlesson_description: "XXXX Short Description XXXXX",
  fldlesson_subheaders: [
    { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
    { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
    { subHeader: "01_Subheader", subDescr: "01_subDescr_xxxxxxx_xxxxxxxxxx" },
  ],
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
};
