/*
Solution of assignment 4:

Expected output:

Hello Aarti
Good Bye John
Hello tripti
Good Bye Jyoti
Hello shreeya
Good Bye jagrti
Good Bye jasmin
Hello Anurag
Good Bye jya
Hello Aayushi
*/
(function() {
    var names = ["Aarti", "john", "tripti", "jyoti", "shreeya", "jagrti", "jasmin", "Anurag", "jya", "Aayushi"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
