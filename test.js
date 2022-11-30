
function func(){
    var n = parseInt(document.getElementById('box1').value);
    var x = parseInt(document.getElementById('box2').value);
   
    var math = document.getElementById("math").value;
    if(math == "addition"){
        var z = n + x;
    } else if (math == "multiplication"){
        var z = n * x;
    } else if (math == "division"){
        var z = n / x;
    } else if (math == "subtract"){
        var z = n - x;
    } else {
        var z = "NO input!"
    }
    document.getElementById("demo").innerHTML = z;
    
}
const handleData = () => {

    const fname = document.querySelector("#firstname");
    const lname = document.querySelector("#lastname");
    const uname = document.querySelector("#username");
    const email = document.querySelector("#email");
    const date = document.querySelector("#date");
    const sex = document.querySelector("#gender");
    // const array = {
    //     name : [{
 
    //     }]
    // }
    const allarray = []
    localStorage.setItem('allarray', JSON.stringify(allarray))
    const storeObj = JSON.parse(localStorage.getItem('allarray'))
    if(storeObj === null) {storeObj = []}
    const array = [
        {
            firstname : fname.value,
            lastname : lname.value,
            username : uname.value,
            email : email.value,
            date : date.value,
            sex : sex.value,
        }
    ];
    // localStorage.setItem('array', JSON.stringify(array));

    storeObj.push(array);
    // localStorage.setItem('allarray', JSON.stringify(storeObj))

    console.log(allarray)
    // const key = Object.keys(array[0])
    // const values = key.map((item) => {
    //     return item;
        
    // }) 
    // var html = "<table class='table table-hover mt-5>'"

    //                 html+='<tr>';
    //                 html+= '<th>' + values[0] + '</th>';
    //                 html+= '<th>' + values[1] + '</th>';
    //                 html+= '<th>' + values[2] + '</th>';
    //                 html+= '<th>' + values[3] + '</th>';
    //                 html+= '<th>' + values[4] + '</th>';
    //                 html+= '<th>' + values[5] + '</th>';
    //                 html+='</tr>';
    // for(var i = 0 ; i < array.length ; i++){
    //                 html+='<tr>';
    //                 html+= '<td>' + array[i].firstname + '</td>';
    //                 html+= '<td>' + array[i].lastname + '</td>';
    //                 html+= '<td>' + array[i].username + '</td>';
    //                 html+= '<td>' + array[i].email + '</td>';
    //                 html+= '<td>' + array[i].date + '</td>';
    //                 html+= '<td>' + array[i].sex + '</td>';
    //                 html+='</tr>';
    // }
    // document.getElementById("table").innerHTML = html;

}

 
