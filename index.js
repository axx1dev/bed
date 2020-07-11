var assert = require('chai').assert;

const sumArr = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

const maxSubArray = (arr) => {
    //const longitude = arr.length - 1;
    const max = Math.max.apply(null, arr);
    let maxSubArr = [];
    let arrComparation = [], arrComparation2 = [], arrComparation3 = [];
    let sum1 = 0, sum2 = 0, sum3 = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == max) {
            const until = i + 3;
            const until2 = i - 2;
            const until3_1 = i - 1;
            const until3_2 = i + 2;

            arrComparation = arr.slice(i, until);
            arrComparation2 = arr.slice(until2, (i + 1));
            arrComparation3 = arr.slice(until3_1, until3_2);

            sum1 = sumArr(arrComparation);
            sum2 = sumArr(arrComparation2);
            sum3 = sumArr(arrComparation3);

            maxSubArr.push(sum1, sum2, sum3);
            const maxint = Math.max.apply(null, maxSubArr);
            switch (maxint) {
                case sum1:
                    return arrComparation;


                case sum2:
                    return arrComparation2;


                case sum3:
                    return arrComparation3;

            }
        }

    }
}

const sumNums = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

const removeDuplicates = (nums) => {
    let unique = [...new Set(nums)];
    return unique;
}

const lockedKeys = (arrkeys) => {
    let arr = []
    let openKeys = ['(', '[']
    let closedKeys = [')', ']']
    for (let letter of arrkeys) {
        if (openKeys.includes(letter)) {
            arr.push(letter)
        } else if (closedKeys.includes(letter)) {
            let openPair = openKeys[closedKeys.indexOf(letter)];
            if (arr[arr.length - 1] === openPair) {
                arr.splice(-1, 1);
            } else { 
                arr.push(letter)
                break //end bucle
            }
        }
    }
    return (arr.length === 0) 
}

const checkClass = (arrobj) => {
    const arr = arrobj.classes;
    let classroom = [];
    let classesSeconds = [];

    for (let i = 0; i < arr.length; i++) {
        const hr1 = arr[i].hour1.split(':');
        const seconds1 = (hr1[0] * 60 * 60) + (hr1[1] * 60); 
        const hr2 = arr[i].hour2.split(':');
        const seconds2 = (hr2[0] * 60 * 60) + (hr2[1] * 60); 
        classesSeconds.push({s1: seconds1, s2: seconds2});
    }

    classroom.push({clase: [
        {s1: classesSeconds[0].s1, s2: classesSeconds[0].s2}
    ]});
    
    //i was not time anymore
    for (let j = 0; j < classesSeconds.length; j++) {
        if (j > 0) {
            for (let n = 0; n < classroom[0].clase.length; n++) {
                

                if ((classesSeconds[j].s1 < classroom[0].clase[n].s1 && classesSeconds[j].s2 < classroom[0].clase[n].s1) || (classesSeconds[j].s1 > classroom[0].clase[n].s2 && classesSeconds[j].s2 > classroom[0].clase[n].s2)) {
                    console.log("entra")
                    classroom[0].clase.push({s1: classesSeconds[j].s1, s2: classesSeconds[j].s2})
                } else {
                    classroom.push({clase: [
                        {s1: classesSeconds[j].s1, s2: classesSeconds[j].s2}
                    ]});
                }
                
            }
        }
    }

    console.log(JSON.stringify(classroom))

    return classroom.length;
}




////EXERCISE 1
/*var arr = [1, 2, 4, 9, 7, 3, 2, 1];
const maxsub = maxSubArray(arr);
console.log(maxsub)*/

//EXERCISE 2
/*const total = sumNums(2,6);
console.log(total);*/

//EXERCISE 3

//EXERCISE 4
/*var duplicateArr = [1, 2, 2, 4, 9, 7, 3, 2, 9, 8, 5, 1];
const unique = removeDuplicates(duplicateArr);
console.log(unique);*/

//EXERCISE 5
//console.log(lockedKeys('[[](]'));

//EXERCISE 6
/*const arrClass = {
    classes: [
        {
            hour1: '11:00',
            hour2: '14:00'
        },
        {
            hour1: '12:00',
            hour2: '15:00'
        },
        {
            hour1: '14:30',
            hour2: '16:00'
        }
    ]
};

const numTotalClassroom = checkClass(arrClass);
console.log(numTotalClassroom);*/

//EXERCISE 7


module.exports = { lockedKeys }
