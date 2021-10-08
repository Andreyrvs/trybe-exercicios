const nota = 80;

if (nota >= 80) {
  console.log("Parabens, você foi aprovada");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (nota < 60) {
  console.log("Você foi reprovada(o)");
}