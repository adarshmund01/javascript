//object singleton,constractor

const instaUser = new Object() // this is singleton object throgh new keyword

const instaUser2 = {} //this is non singleton object



//console.log(instaUser);

const regularUser = {

    email : "adarsh@gmail.com",
    name : {
        FullName : "Adarsh",
        MiddleName: "jyoti",
        LastName : "Mund"
    },
    skills :{
        Devops: "docker",
        UI    : "JS",
        BackEnd : "java"
    }
}
console.log(regularUser.email,regularUser.name,regularUser.skills);
 //console.log(regularUser.name);
//console.log(regularUser.skills);
//Note - we have to put comma afer object declaraction or else ir will thorow and it is optiol to put comma in last object