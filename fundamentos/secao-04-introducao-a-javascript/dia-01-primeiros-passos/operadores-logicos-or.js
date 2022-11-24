let weekDay = "segunda-feira";

if (weekDay === "segunda-feira" || weekDay === "terca-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "sabado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
} else {
    console.log("ERRO, " + weekDay + " não é uma palavra válida.");
}