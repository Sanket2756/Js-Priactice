let obj1 = {
    id: "101",
    email: "sanket@gmail.com",
    password: 1234,
    isLogged: true,
    greeting: function(){
        console.log("Hello Sanket");
        return 0;
    }
};

let obj2 = {
    id: "102",
    email: "Viraj@gmail.com",
    password: 1234,
    isLogged: true,
    greeting: function(){
        console.log("Hello Viraj");
        return 0;
    }
}

let obj3 = [obj1,obj2];
console.log(obj3);


