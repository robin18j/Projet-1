let mail_box = [];
let conteur = -1;


function ADD_Email_to_mailbox() {
    let New_Email = {
        fristname: document.getElementById("firstname").value,
        sujet: document.getElementById("sujet").value,
        adress: document.getElementById("email").value,
        text: document.getElementById("message").value
    };
    console.log(New_Email)

    conteur = mail_box.length;
    mail_box.push(New_Email);
    localStorage.setItem("mail_box", JSON.stringify(mail_box));
    console.log(localStorage);
    print_email()

}

function select_Email () {
let text = "<ul>";
for (let i = 0; i < mail_box.length; i++) {
    text += "<li>" + mail_box[i] + "</li>";
}
text += "</ul>";
}// va etre relier avec l'endroit'

//ceci devrait permettre devoyer les nouvelle element et de les imprimer sur une liste
function print_text() {
    let node = document.createElement("ul");
    let list = JSON.parse(localStorage.getItem("mail_box"));
    let text = '';
    for (let i = 0; i < list.length; i++) {
        text += "<li>" + list[i] + "</li>";
    }
    let textnode = document.createTextNode(list[conteur].fristname);
    node.appendChild(textnode);
    document.getElementById("contact").appendChild(node);
    console.log(textnode);
}

function print_email() {
    let list = JSON.parse(localStorage.getItem("mail_box"));
    let text = '<caption>boite de message</caption>\n<tr> <th>nom</th><th>sujet</th><th> email</th> <th>option</th> </tr>\n';
    for (let i = 0; i < list.length; i++) {
        text += "<tr><td>" + list[i].fristname + "</td><td>" + list[i].sujet + "</td><td>" + list[i].adress + "</td><td>" + "<button  onclick='suprimer("+i+")' >Delete</button>" + "<button>lire</button>"/* function pour suprimer*/ + "</td></tr>\n";
    }
    document.getElementById("contenu").innerHTML = text;
    console.log(text);
}
function suprimer(e) {
    let list = JSON.parse(localStorage.getItem("mail_box"));
    list.splice(e, 1);
    let text = '<caption>boite de message</caption>\n<tr> <th>nom</th><th>sujet</th> <th> email</th> <th>option</th> </tr>\n';
    for (let i = 0; i < list.length; i++) {
        text += "<tr><td>" + list[i].fristname + "</td><td>" + list[i].sujet + "</td>" + "<td>" + list[i].adress + "</td><td>" + "<button onclick='suprimer(" + i + ")' >Delete</button>" + "<button>lire</button>"/* function pour suprimer*/ + "</td></tr>\n";
    }
localStorage.setItem("mail_box", JSON.stringify(list));
    document.getElementById("contenu").innerHTML = text;
}