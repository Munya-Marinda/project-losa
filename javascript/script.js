// This file contains the main javascript executions

// array of objects
arrData = [{}, {}, {}];

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
    fldadvanced_info: "<html><body><h1>IT WORKED!!!</h1></body></html>",
    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"],
  },
  {
    id: 2,
    fldlesson_header: "Fototos",
    fldlesson_description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    fldexamples: [
      { descr: "001 descr xxxxx", code: "001 code xxxxx" },
      { descr: "002 descr xxxxx", code: "002 code xxxxx" },
      { descr: "003 descr xxxxx", code: "003 code xxxxx" },
    ],
    fldchallenge_info: [
      { id: 1, descr: "001 descr xxxxx", hint: "001 hint xxxxx" },
      { id: 2, descr: "002 descr xxxxx", hint: "002 hint xxxxx" },
      { id: 3, descr: "003 descr xxxxx", hint: "003 hint xxxxx" },
    ],
    fldadvanced_info: null,
    fldtag_list: ["01 xxxx", "02 xxxx", "03 xxxx", "04 xxxx"],
  },
];

console.log("It worked.");
console.log(">>>" + lessonDummy[0].fldexamples[0].descr);

// each_object has class properties
class Lessons {
  constructor(
    id,
    fldlesson_header,
    fldlesson_description,
    fldexamples,
    fldchallenge_info,
    fldadvanced_info,
    fldtag_list
  ) {
    this.id = id;
    this.fldlesson_header = fldlesson_header;
    this.fldlesson_description = fldlesson_description;
    this.fldexamples = fldexamples; // complex
    this.fldchallenge_info = fldchallenge_info; // complex2
    this.fldadvanced_info = fldadvanced_info; //complex
    this.fldtag_list = fldtag_list; // complex
  }
}

lessonDummy.forEach((lesson) => {
  // get lesson id
  const id = lesson.id;

  // get lesson header
  const header = lesson.fldlesson_header;

  // get lesson description
  const description = lesson.fldlesson_description;

  // get lesson examples | complex
  const examples = lesson.fldexamples;

  // get lesson challenge_info | complex
  const challenge_info = lesson.fldchallenge_info;

  // get lesson advanced_info | complex
  const advanced_info = lesson.fldadvanced_info;

  // get lesson tag_list | complex
  const tag_list = lesson.fldtag_list;
});
