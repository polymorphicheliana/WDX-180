let answer = prompt(`Question: Who created JavaScript?

  A) Brendan Eich
  B) Bill Gates
  C) Mark Zuckerberg

  Please select the correct option (A, B, or C).`);

answer = answer.trim().toLowerCase();

if (answer === 'a') {
    alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
}
else if (answer === 'b') {
    alert("Nope. He lead the development of the Windows Operating System.");
}
else if (answer ==='c') {
    alert("Nope. He just came up with the idea for a social network idea.");
}
else{
    alert("invalid answer silly");
}
