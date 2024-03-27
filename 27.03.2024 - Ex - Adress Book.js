function addressBook(input) {
    let addressObj = {};

    input.forEach(info => {
        let [name, address] = info.split(':');
        if (addressObj.hasOwnProperty(name)) {
            
            addressObj[name] = address.trim();
        } else {
            addressObj[name] = address.trim();
        }
    });

    
    let sortedNames = Object.keys(addressObj).sort();


    sortedNames.forEach(name => {
        let address = addressObj[name];
        console.log(`${name} -> ${address}`);
    });
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);