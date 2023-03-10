// JavaScript source code

let mail_box = [];

let pizza = [];

function ADD_Email_to_mailbox() {
    let New_Email = {
        fristname: document.getElementById("firstname").value,
        sujet: document.getElementById("sujet").value,
        adress: document.getElementById("email").value,
        text: document.getElementById("message").value,
    };
    mail_box.push(New_Email);
    let store = JSON.stringify(mail_box)
    localStorage.setItem("mail_box", store);
    print_email();
    let contact = {
        nom: document.getElementById("firstname").value,
        adresse: document.getElementById("email").value,
    }
    if (pizza.length != 0) {
        let carnet = localStorage.getItem("pizza");
        let dup = false;
        let update = JSON.parse(carnet);
        for (let i = 0; i < update.length; i++) {
            if (update[i].nom == contact.nom && update[i].adresse == contact.adresse) {
                dup = true;
                break;
            }
        } 
        if (dup == false) {
            pizza.push(contact);
        }
    } else {
        pizza.push(contact);
        console.log('0')
    }
    let test = JSON.stringify(pizza)
    localStorage.setItem("pizza", test);
    console.log(localStorage);
    contact_carnet();
};
function print_email() {
    let list = JSON.parse(localStorage.getItem("mail_box"));

    let text = '<caption>boite de message</caption>\n<tr> <th>nom</th><th>sujet</th> <th> email</th> <th>option</th> </tr>\n';
    for (let i = 0; i < list.length; i++) {
        text += "<tr><td>" + list[i].fristname + "</td><td>" + list[i].sujet + "</td>" + "<td>" + list[i].adress + "</td><td>" + "<button onclick='suprimer(" + i + ")' >Delete</button>" + "<button onclick='lire(" + i + ")'>lire</button>" + "</td></tr>\n";
    }
    document.getElementById("contenu").innerHTML = text;
    console.log('test');
}
function suprimer(e) {
    let list = JSON.parse(localStorage.getItem("mail_box"));
    list.splice(e, 1);
    localStorage.removeItem("mail_box");
   
    localStorage.setItem("mail_box", JSON.stringify(list));
    mail_box = list;
    print_email()
}
function search() {
    let list = JSON.parse(localStorage.getItem("mail_box"));
    let text = '<caption>boite de message</caption>\n<tr> <th>nom</th><th>sujet</th><th> email</th> <th>option</th> </tr>\n';
    let word = document.getElementById("search").value;
    for (let i = 0; i < list.length; i++) {
        if (list[i].fristname == word || list[i].sujet == word || list[i].adress == word) {
            text += "<tr><td>" + list[i].fristname + "</td><td>" + list[i].sujet + "</td>" + "<td>" + list[i].adress + "</td><td>" + "<button onclick='suprimer(" + i + ")' >Delete</button>" + "<button onclick='lire(" + i + ")'>lire</button>"/* function pour suprimer*/ + "</td></tr>\n";
            
        }
    }
    document.getElementById("contenu").innerHTML = text;
    let car = JSON.parse(localStorage.getItem("pizza"));
    
    let carnet = '<caption>carnet</caption>\n<tr> <th>nom</th><th> email</th> <th>option</th> </tr>\n';
    
    for (let v = 0; v < car.length; v++) {
        if (car[v].nom == word || car[v].adresse == word) {
            carnet += "<tr><td>" + car[v].nom + "</td><td>" + car[v].adresse + "</td><td>" + " <button onclick= 'fenetre(" + v + ")' > modify</button >" + "<button onclick='suprimerc(" + v + ")' >Delete</button> \n";
        }
    }
    document.getElementById("carnet").innerHTML = carnet;
}
function lire(e) {

    let list = JSON.parse(localStorage.getItem("mail_box"));
    console.log(list)
    let content = "<div>" + "<h2>" + list[e].sujet + "</h2>" + "<p>" + list[e].text + "</p>" + "<button onclick='reset()' >retour</button>" + "</div>";

    document.getElementById("boite_de_texte").innerHTML = content;

}
function contact_carnet() {
    let list = JSON.parse(localStorage.getItem("pizza"));
    console.log(list);
    let text = '<caption>carnet</caption>\n<tr> <th>nom</th><th> email</th> <th>option</th> </tr>\n';
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        text += "<tr><td>" + list[i].nom + "</td><td>" + list[i].adresse + "</td><td>" + " <button onclick= 'fenetre(" + i + ")' > modify</button >" + "<button onclick='suprimerc(" + i + ")' >Delete</button> \n";
    }
    document.getElementById("carnet").innerHTML = text;
}
function fenetre(i) {
    let list = JSON.parse(localStorage.getItem("pizza"));
    let text = '<div class="form-group">\n<label for="firstname"> mon:' + list[i].nom + '</label>\n <input type="text" id="new_name" value="' + list[i].nom + '" >\n </div>\n <div class="form-group" >\n <label for= "email" > email: ' + list[i].adresse + '</label >\n <input type = "email" id = "new_email" value="' + list[i].adresse + '" >\n</div >\n <div> <button onclick="modify(' + i + ')" > modify</button > \n</div >\n <div > <button onclick="reset()" > cancel</button > \n</div >\n';
   
    document.getElementById("boite_de_texte").innerHTML = text;
    }
function reset() {
    document.getElementById("boite_de_texte").innerHTML = ' <div class="container" id="boite_de_texte">\n<div class="form-group" >\n<label for= "firstname" > firstname</label >\n <input type = "text" id = "firstname" name = "firstname" >\n</div >\n<div class="form-group" >\n<label for= "sujet" > sujet</label >\n<input type = "text" id = "sujet" name = "sujet" >\n</div >\n<div class="form-group" >\n<label for= "email" > email</label >\n<input type = "email" id = "email" name = "email" >\n</div >\n<div class="form-group" >\n<label for= "message" > message</label >\n<textarea name = "message" id = "message" cols = "30" rows = "10" ></textarea >\n</div >\n<button onclick = "ADD_Email_to_mailbox()" > submit</button >\n</div >\n ';
}
function modify(e) {
    let test = localStorage.getItem("pizza")
    let list = JSON.parse(test);
    localStorage.removeItem("pizza");
 
    let email = document.getElementById("new_email").value
    let name = document.getElementById("new_name").value
            list[e].nom = name;
    list[e].adresse = email;
    if (pizza.length != 1) {
        
        let dup = false;
       
        for (let i = 0; i < list.length; i++) {
            if (list[i].nom == name && list[i].adresse == email && i !=e) {
                dup = true;
                list.splice(e, 1);
                break;
            }

        }
        if (dup == false) {
            list[e].nom = name;
            list[e].adresse = email;
        }
    } else {
        list[e].nom = name;
        list[e].adresse = email;
    }
    pizza = list;
    localStorage.setItem("pizza", JSON.stringify(list));

    reset();
    contact_carnet();
}
function suprimerc(e) {
    let list = JSON.parse(localStorage.getItem("pizza"));
    list.splice(e, 1);
    localStorage.removeItem("pizza");
    localStorage.setItem("pizza", JSON.stringify(list));
    pizza = list;
    contact_carnet();
}