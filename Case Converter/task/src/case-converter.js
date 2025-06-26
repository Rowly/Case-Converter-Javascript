let upperCase = document.getElementById('upper-case');
let lowerCase = document.getElementById('lower-case');
let properCase = document.getElementById('proper-case');
let sentenceCase = document.getElementById('sentence-case');
let saveTextFile = document.getElementById('save-text-file');
let textArea = document.getElementById('text');

function makeTextUpperCase() {
  let text = textArea.value;
  text = text.toUpperCase().trim();
  textArea.value = text;
}

function makeTextLowerCase() {
  let text = textArea.value;
  text = text.toLowerCase().trim();
  textArea.value = text;
}

function makeTextProperCase() {
  let text = textArea.value;
  text = text.trim();
  let splitText = text.split(' ');
  let capitalisedWords = [];
  splitText.forEach(word => {
    word = word.toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    capitalisedWords.push(word);
  })
  textArea.value = capitalisedWords.join(' ');
}

function makeTextSentenceCase() {
  let text = textArea.value;
  let sentences = text.split('. ');
  let capitalisedSentences = [];

  sentences.forEach(sentence => {
    let trimmedSentence = sentence.trim();
    if (trimmedSentence.length > 0) {
      let capitalised = trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1).toLowerCase();
      capitalisedSentences.push(capitalised);
    }
  })
  textArea.value = capitalisedSentences.join('. ');
}

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


upperCase.addEventListener('click', makeTextUpperCase);
lowerCase.addEventListener('click', makeTextLowerCase);
properCase.addEventListener('click', makeTextProperCase);
sentenceCase.addEventListener('click', makeTextSentenceCase);
saveTextFile.addEventListener('click', function() {
  download('text.txt', textArea.value);});

