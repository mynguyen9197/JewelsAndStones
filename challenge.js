//check if all characters in a string are unique
function checkUnique(str){
    var obj = {};
    for(const ele of str){
        if (obj[ele]){
            return false
        } else {
            obj[ele] = true
        }
    }
    return true;
}

//count how many stones in S are Jewels
function findJewels(J, S){
    const trimJ = J.trim()
    const trimS = S.trim()
    if(!checkUnique(J)){
        return "all characters in J must be unique"
    }
    if(trimJ === "" || trimS === ""){
        return "J and S can not be empty"
    } else if(trimJ.length > 50 && trimS.length>50){
        return "J and S have length at most 50"
    }
    let count = 0;
    for(const s of trimS){
        if(trimJ.indexOf(s) !== -1){
            count ++
        }
    }
    return count
}