function change1(){
    // const db = getDatabase();
    const checkBox = document.getElementById("1");
    const data={};
    if (checkBox.checked == true){
        data["D1"]="1";
   
    }
    else {
        data["D1"]="0";
    }
    return firebase.database().ref().child("HomeAutomation_Firebase_4CH").update(data);
   }

   function change2(){
    // const db = getDatabase();
    const checkBox = document.getElementById("2");
    const data={};
    if (checkBox.checked == true){
        data["D2"]="1";
   
    }
    else {
        data["D2"]="0";
    }
    return firebase.database().ref().child("HomeAutomation_Firebase_4CH").update(data);
   }

   function change3(){
    // const db = getDatabase();
    const checkBox = document.getElementById("3");
    const data={};
    if (checkBox.checked == true){
        data["D3"]="1";
   
    }
    else {
        data["D3"]="0";
    }
    return firebase.database().ref().child("HomeAutomation_Firebase_4CH").update(data);
   }

   function change4(){
    // const db = getDatabase();
    const checkBox = document.getElementById("4");
    const data={};
    if (checkBox.checked == true){
        data["D4"]="1";
   
    }
    else {
        data["D4"]="0";
    }
    return firebase.database().ref().child("HomeAutomation_Firebase_4CH").update(data);
   }
   function changeall(){
    // const db = getDatabase();
    const checkBox = document.getElementById("5");
    const data={};
    if (checkBox.checked == true){
        data["D4"]="1";
        data["D3"]="1";
        data["D2"]="1";
        data["D1"]="1";
   
    }
    else {
        data["D4"]="0";
        data["D3"]="0";
        data["D2"]="0";
        data["D1"]="0";
    }
    // console.log(data);
    return firebase.database().ref().child("HomeAutomation_Firebase_4CH").update(data);
   }
   
    