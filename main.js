// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function ageToAbilities(age){
    if(age < 16){
        return 'You can\'t drive.'
    }
    else if(18 > age && age >=16){
        return 'You can drive but not vote.'
    }
    else if(25> age && age >= 18){
        return 'You can vote but not rent a car.'
    }
    else if(age >= 25){
        return 'You can do pretty much anything.'
    }
}

function evenLengthedStrings(arr){
    return arr.filter(a => a.length %2 === 0)
}

function countBs(arr){
    let counter =0
    for(let a of arr){
        const temp = a.toString()
        for(let s of temp){
            if(s == '8'){
                counter++
            }
        }
    }
    return counter
}

function lastIndexOfPunctuation(str){
    let marker = -1
    for (let i=0; i<str.length; i++){
        if(str[i] === "." ||
        str[i] === "!" ||
        str[i] === "?" ||
        str[i] === "," ){
            marker = i
        }
    }
    return marker
}

function divisbles(a, b){
    const arr = []
    for (let i=0; i<a.length; i++){
        if(a[i] %b[i] == 0){
            arr.push(true)
        }
        else{
            arr.push(false)
        }
    }
    return arr
}

function getLetters(array, x){
    let str = ''
    for (let a of array){
        if(a[x] === undefined){
            str+= '-'
        }
        else{
            str+=a[x]
        }
    }
    return str
}

function getCenturies(arr){
    let result = []
    let output = []
    for(let a of arr){
        let temp = Math.ceil(a/100)
        result.push(temp)
    }
    for(let r of result){
        let temp = r.toString()
        if(temp[temp.length-1] === "1" && temp[temp.length-2] !== "1"){
            output.push(temp +'st') 
        }
        else if(temp[temp.length-1] === "2" && temp[temp.length-2] !== "1"){
            output.push(temp +'nd') 
        }
        else if(temp[temp.length-1] === "3" && temp[temp.length-2] !== "1"){
            output.push(temp +'rd') 
        }
        else{
            output.push(temp +'th') 
        }
    }
    return output
}

function gridSum(arr, a, b, c, d){
    let sum = 0
    for(let i = a; i<=c; i++){
        const temp = arr[i]
        for(let j = b; j<=d; j++){
            sum += temp[j]
        }
    }
    return sum
}



// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports = {
    ageToAbilities: isDef(typeof ageToAbilities) ? ageToAbilities : pass,
    evenLengthedStrings: isDef(typeof evenLengthedStrings) ? evenLengthedStrings : pass,
    countBs: isDef(typeof countBs) ? countBs : pass,
    lastIndexOfPunctuation: isDef(typeof lastIndexOfPunctuation) ? lastIndexOfPunctuation : pass,
    divisbles: isDef(typeof divisbles) ? divisbles : pass,
    getLetters: isDef(typeof getLetters) ? getLetters : pass,
    getCenturies: isDef(typeof getCenturies) ? getCenturies : pass,
    gridSum: isDef(typeof gridSum) ? gridSum : pass
};
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
