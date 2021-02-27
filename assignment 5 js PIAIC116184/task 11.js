// JavaScript source code
function isVowel(str) {
    if (str.length === 1) {
        switch (str) {
            case 'a':
                console.log(true);
                break;
            case 'e':
                console.log(true);
                break;
            case 'i':
                console.log(true);
                break;
            case 'o':
                console.log(true);
                break;
            case 'u':
                console.log(true);
                break;
            default:
                console.log(false);
        }
    } else {
        alert("Enter only character");
    }
}
isVowel(String(prompt("Enter character please: ")));