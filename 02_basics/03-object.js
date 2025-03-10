
const Mysymb = Symbol('key1')
const JsUser = {
    
    name: "Adarsh",
    [Mysymb] :"mykey1",
    age : 29,
    email: "adarsh@gmail",
    location : "bangalore",
    isLogin : true

}
console.log(JsUser["name"]);
console.log(JsUser[Mysymb]);

 // how to overide the value
 JsUser.name = "Akash";
    console.log(JsUser["name"]);
    // how to freeze the object
    Object.freeze(JsUser);