let avengerdatas = [
    {
        id:1,
        name: "Batman",
        age:40,
        planet: "Earth",
        group: "Justice League",
    },

    {
        id:2,
        name: "Thor",
        age:1500,
        planet: "Asgard",
        group: "Avengers",
    },

    {
        id:3,
        name: "Wonderwoman",
        age:35,
        planet: "Amazon",
        group: "Justice League",
    },

    {
        id:4,
        name: "Superman",
        age:38,
        planet: "Krypton",
        group: "Justice League",
    },
]




avengerdatas.forEach(function(avengerdata, i){
    // console.log(ele);

  

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.append(i+1);

    let td2=document.createElement("td");
    td2.append(avengerdata.name);

    let td3=document.createElement("td");
    td3.append(avengerdata.age);

    let td4=document.createElement("td");
    td4.append(avengerdata.planet);

    let td5=document.createElement("td");
    td5.append(avengerdata.group);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    // tr.append(noTD);
    // document.getElementById("data").append(tr);
    // console.log(tr)

    document.getElementById("data").append(tr);
})


function createRows(supes)
{

    document.getElementById("data").innerHTML="";


    supes.forEach(function(avengerdata,i){
        // console.log(ele);
    
        let tr=document.createElement("tr");
    
        let td1=document.createElement("td");
        td1.append(i+1);
    
        let td2=document.createElement("td");
        td2.append(avengerdata.name);
    
        let td3=document.createElement("td");
        td3.append(avengerdata.age);
    
        let td4=document.createElement("td");
        td4.append(avengerdata.planet);
    
        let td5=document.createElement("td");
        td5.append(avengerdata.group);
    
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
    
        // tr.append(noTD);
        // document.getElementById("data").append(tr);
        // console.log(tr);
    
        document.getElementById("data").append(tr);
    })

}


createRows(avengerdatas);



function searchName(sname){

//    console.log(sname);



    let filteredArray=avengerdatas.filter(function(avengerdata,i){
        return avengerdata.name.toUpperCase().includes(sname.toUpperCase());
    })

    // console.log(filteredArray);
    createRows(filteredArray)
}