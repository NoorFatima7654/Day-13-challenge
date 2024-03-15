//Question no 37
function make_shirt(size: string = "large", message:string = "I love typescript"){
    console.log(`Making a ${size} t-shirt with the message " ${message} printed on it`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");

//Question no 38
function describe_city(city:string ,country:string = "pakistan") {
    console.log(`${city} is in  ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo","Japan");

//Quetion no 39
function city_country(city:string, country:string):
string {
     return  `${city}, ${country}`;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Paris","France"));

