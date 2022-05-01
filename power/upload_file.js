const URL = "./my_model/";

let model, labelContainer, maxPredictions;

/* 
init 함수 기능
주요기능 : 모델을 사용하기 위해 불러오는 기능을 합니다. 
모델을 불러오는 코드는
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
입니다.!
*/
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

        // append elements to the DOM
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

/*
predict 함수 기능
주요기능 : id = "face-image"에 들어가 있는 이미지를 image변수에 담고, 에측을 시킵니다. 
기대 아웃풋: classPrediction[0].probability.toFixed(2), classPrediction[1].probability.toFixed(2)
1. await model.predict(image, false)
  : 매개변수 (예측을할 이미지, 이미지가 뒤집혔는지 체크하는 인자(false로 고정해주시면 됩니다!))
2. for문
  : className의 요소가 [기 약한사람, 기 쎈사람]이라서 2개 클래스마다 image의 예측확률을 출력하기 위한 부분입니다!
*/
async function predict() {
    // predict can take in an image, video or canvas html element
    var image = document.getElementById("face-image")
    const prediction = await model.predict(image, false);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}


function DropFile(dropAreaId, fileListId) {
    let dropArea = document.getElementById(dropAreaId);
    let fileList = document.getElementById(fileListId);
  
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  
    function highlight(e) {
      preventDefaults(e);
      dropArea.classList.add("highlight");
    }
  
    function unhighlight(e) {
      preventDefaults(e);
      dropArea.classList.remove("highlight");
    }
  
    function handleDrop(e) {
      unhighlight(e);
      let dt = e.dataTransfer;
      let files = dt.files;
  
      handleFiles(files);
  
      const fileList = document.getElementById(fileListId);
      if (fileList) {
        fileList.scrollTo({ top: fileList.scrollHeight });
      }
    }
  
    function handleFiles(files) {
      files = [...files];
      // files.forEach(uploadFile);
      files.forEach(previewFile);
      files.forEach(renderFile);
    }
  
    function previewFile(file) {
      console.log(file);
      renderFile(file);
      image = file;
    }
  
    function renderFile(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        let img = dropArea.getElementsByClassName("preview")[0];
        img.src = reader.result;
        img.style.display = "block";
        const div = document.getElementById('next-btn');
        const label = document.getElementById('next-btn-message');
        div.style.visibility ='visible';
        label.style.visibility = 'visible';
      };
    }
  
    dropArea.addEventListener("dragenter", highlight, false);
    dropArea.addEventListener("dragover", highlight, false);
    dropArea.addEventListener("dragleave", unhighlight, false);
    dropArea.addEventListener("drop", handleDrop, false);
  
    return {
      handleFiles
    };
  }
  
  const dropFile = new DropFile("drop-file", "files");



function sendImage() {
  const img = document.getElementById('face-image');
  const img_block = document.getElementById('image-block');
  const result = document.getElementById('result');
  //img.remove();
  result.style.visibility='visible';

  const input = document.querySelector('input[type="file"]')
  const image = input.files[0];
  const formData = new FormData();
  temp = location.href.split("?");
  data = temp[1];
  if(data == 'man'){
    formData.append('image', image);
    fetch('http://dnatuna.fun/api/power/man', {
      method: 'POST',
      body: formData
    }).then(data => {
      console.log(data);
      return data.json();
    }).then(data => {
      var output = '당신의 전투력은 ' + parseInt(parseFloat(data['strong'])*100) +'점 입니다!!!';
      alert(output);
    })
  }
  if(data == 'woman'){
    formData.append('image', image);
    fetch('http://dnatuna.fun/api/power/woman', {
      method: 'POST',
      body: formData
    }).then(data => {
      console.log(data);
      return data.json();
    }).then(data => {
      var output = '당신의 전투력은 ' + parseInt(parseFloat(data['strong'])*100) +'점 입니다!!!';
      alert(output);
    })
  }
}
