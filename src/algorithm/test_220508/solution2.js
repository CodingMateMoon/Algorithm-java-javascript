function solution(scores) {
    const infoArray = Array.from(Array(scores.length), ()=> new Array(3));
    let exam1total = 0;
    let exam2total = 0;
    for (let i = 0; i < scores.length; i++) {
        exam1total += scores[i][0];
        exam2total += scores[i][1];
        let eachTotal = scores[i][0] + scores[i][1];
        infoArray[i][0] = eachTotal;
        infoArray[i][2] = i + 1; // id
    }
    let hardIndex = -1; // 각 문제 총점이 동일한 경우
    if(exam1total < exam2total) {
        hardIndex = 0;
    } else if (exam1total > exam2total) {
        hardIndex = 1;
    }

    for (let i = 0; i < scores.length; i++) {
        infoArray[i][1] = 0;
        if(hardIndex != -1) {
            infoArray[i][1] = scores[i][hardIndex];
        }
    }
    console.log(infoArray);

    for (let i = 0; i < infoArray.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < infoArray.length; j++) {
            if (infoArray[maxIndex][0] < infoArray[j][0]) { //응시자 총점 비교
                maxIndex = j;
            } else if (infoArray[maxIndex][0] === infoArray[j][0] ) {
                if(hardIndex != -1) {
                    if (infoArray[maxIndex][1]< infoArray[j][1]) {
                        maxIndex = j;
                    } else if (infoArray[maxIndex][1]== infoArray[j][1]) {
                        if (infoArray[maxIndex][2] > infoArray[j][2]) {
                            maxIndex = j;
                        }
                    }
                } else {
                    if (infoArray[maxIndex][2] > infoArray[j][2]) {
                        maxIndex = j;
                    }
                }
            }
        }
        if(maxIndex != i) {
            //console.log("maxArray : " + maxArray);
            let temp = infoArray[i];
            infoArray[i] = infoArray[maxIndex];
            infoArray[maxIndex] = temp;
            //console.log("i : " + i + "/ infoArray[" + maxIndex + "]");
        }

    }
    var answer = new Array(scores.length);
    for (let i = 0; i < infoArray.length; i++) {
        answer[infoArray[i][2] -1] = i+1;
    }
    //console.log("------result------");
    //console.log(infoArray);
    return answer;
}

console.log(solution([[85, 90], [65, 67], [88, 87], [88, 87], [73, 81], [65, 89], [99, 100], [80, 94]]));
console.log(solution([[85, 90], [91, 87], [88, 87]]));
