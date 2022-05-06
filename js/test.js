
const url = new URL(window.location.href);
const SendForm = function (product) {
    btnSubmit.addEventLister("click", function (e) {
        e.preventDefault();

        let cart = [];
        for (product of basket){
            cart.push(product.id);
        }

        let order ={
            contact: {
                Name: firstName.value,
                lastName: lastName.value,
                Address: address.value,
                City: city.value,
                Email: email.value,
            },
            products: cart,
        };

        console.log(order);

        fetch("http://localhost:3000/api/products/order", {
            // utilisation de la méthode POST (comme demander)
            method: "POST",
            body: JSON.stringify(order)
            headers: {
                
                "Content-Type": "app/json",
            },
        })

            .then((Response) => response.JSON())
            .catch((err)) => console.log(err))

        });

    };

        
    //OU => fetch("http://url-service-web.com/api/users", {
        //method: “POST”,
        //headers: { 
    //'Accept': 'application/json', 
    //'Content-Type': 'application/json' 
    //},
        //body: JSON.stringify(jsonBody)
    //});
        




