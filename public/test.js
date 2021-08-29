const questionaire = document.querySelector('.questionaire')
const resultBox = document.querySelector('.question_result_section')
const submit = document.querySelector('.submit');
const retry = document.querySelector('.question_retry');
const questionInput = document.querySelector('.question_input')
const chkInfo1 = document.getElementsByName('chk_info');
const chkInfo2 = document.getElementsByName('chk_info2');
const chkInfo3 = document.getElementsByName('chk_info3');
const chkInfo4 = document.getElementsByName('chk_info4');
const correctCount = document.querySelector('.correct_count');
const wrongCount = document.querySelector('.wrong_count');
const totalCount = document.querySelector('.total');

resultBox.style.display="none";


var correct = 0;
var total = 0;
var wrong = 0;

submit.addEventListener('click',()=>{

    var chkInfo1Check=0;
    var chkInfo2Check=0;
    var chkInfo3Check=0;
    var chkInfo4Check=0;
    var chkInfo1Count =0;
    var chkInfo2Count =0;
    var chkInfo3Count =0;
    var chkInfo4Count =0;



    for(i=0;i<chkInfo1.length;i++){
        if(chkInfo1[i].checked==true){
            if(chkInfo1[i].value=="correct"){
                correct ++
            };
            chkInfo1Count++
        }
    }

    for(i=0;i<chkInfo2.length;i++){
        if(chkInfo2[i].checked==true){
            if(chkInfo2[i].value=="correct"){
                correct ++
            };
            chkInfo2Count++
        }
    }

    for(i=0;i<chkInfo3.length;i++){
        if(chkInfo3[i].checked==true){
            if(chkInfo3[i].value=="correct"){
                correct ++
            };
            chkInfo3Count++
        }
    }
    for(i=0;i<chkInfo4.length;i++){
        if(chkInfo4[i].checked==true){
            if(chkInfo4[i].value=="correct"){
                correct ++
            };
            chkInfo4Count++
        }
    }

    if(questionInput.value=="인구"){
        correct++;
    }

    total = correct*20;
    wrong = 5-correct;

    if(questionInput.value==""||chkInfo1Count==0||chkInfo2Count==0||chkInfo3Count==0||chkInfo4Count==0){
        alert("풀지 않은 문제가 있습니다.")
    } else{
        totalCount.innerHTML=total+"점";
        correctCount.innerHTML=correct;
        wrongCount.innerHTML=wrong;
        questionaire.style.display="none";
        resultBox.style.display=""
    }
    

})

retry.addEventListener('click',()=>{
    location.reload();
})



