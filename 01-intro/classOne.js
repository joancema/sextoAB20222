let test="555";

const person = {
    firstName: 'John',
    lastName: 'Cevallos',
    isStudent: true,
    test: test,
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    geolocation: {
        lat:14.123,
        lng:11.234,
    }
}


function showData({ firstName, geolocation: { lat, lng } })
{
    console.log(firstName)
    console.log(lat)
    console.log(lng)
}

showData(person)
