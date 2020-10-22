var q1_value = 0;
var q2_value = 0;

function question1(s) {
    q1_value = parseInt(s.value);
    if (q1_value === 100) {
        showOrDisplayQuestion2(true);
    } else {
        showOrDisplayQuestion2(false);
        q2_value = 0;
    }
}

function question2() {
    var count = 0;
    obj = document.getElementsByName("stat2");
    for (k in obj) {
        if (obj[k].checked) {
            count += parseInt(obj[k].value);
        }
    }
    q2_value = count;
}

function SubmitFunc() {
    var sum = 0;
    if (checkQuestionOne()) {
        alert("You must make a choice for Question 1.")
        return;
    } else {
        if (q1_value == 100) {
            if (q2_value == 0) {
                alert("You must make at least one choice for Question 2.")
                return;
            }
        } else {
            q2_value = 0;
        }
    }
     sum = q1_value + q2_value;
    if (sum >= 0 && sum <= 225) {
        SendToServer(sum);
    } else {
        alert("Throw Exception.")
    }

}
function checkQuestionOne() {
    var count = 0;
    obj = document.getElementsByName("q1");
    for (k in obj) {
        if (obj[k].checked) {
            count++;
        }
    }
    if (count == 0) return true;
    else return false;
}
function SendToServer(sum) {
    alert("value sending to server "+sum)
}
function showOrDisplayQuestion2(show) {
    var t = document.getElementById('question2');
    if (Boolean(show) == true) {
        t.style.display = 'block';// show
    } else {
        t.style.display = 'none'; // display
    }
}