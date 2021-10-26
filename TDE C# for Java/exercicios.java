import java.util.Scanner;

public class exercicios
{
  public static void main(String[] args) {
    // exercicio 04
    int  qtr;
    Scanner ler = new Scanner(System.in);
    System.out.print("Digite a quantidade de numeros para conversão: ");
    qtr = ler.nextInt();
    Double[] listaA= new Double[qtr];
    Double[] listaB= new Double[qtr];


    for (int i = 0; i < qtr; i++){
      System.out.print(i + 1 +"º: ");
      listaA[i] = ler.nextDouble();
    }
    System.out.println();
    System.out.println("O resultado é:");
    for (int i = 0; i < qtr; i++){
      listaB[i] = listaA[i] - (listaA[i] * 2);
      System.out.print(i + 1 +"º: ");
      System.out.println(listaB[i]);
    }
    



    // // //exercicio 03
    // // Scanner ler = new Scanner(System.in);
    // // Double valores; 
    // // System.out.println("Digite 10 valores para somar:");
    // // valores = (double) 0;


    // // for (int i = 0; i < 10; i++){
    // //   System.out.print(i + 1 +"º: ");
    // //   valores += ler.nextDouble();
    // // }
    // // System.out.print("A soma dos valores é: " + valores);




    // // // exercicio 02
    // // Scanner ler = new Scanner(System.in);
    // // Double codigo, qtrGramas, resultado;
    // // String minerio;
    // // System.out.print("Digite o código do minério: ");
    // // codigo = ler.nextDouble();
    // // System.out.print("Digite a quantidade em gramas: ");
    // // qtrGramas = ler.nextDouble();

    // // if (codigo <= 4){
    // //   if (codigo == 1){
    // //     minerio = "Fosfato";
    // //     resultado = (qtrGramas * 100) / 2;
    // //   }
    // //   else if (codigo == 2){
    // //     minerio = "Nióbio";
    // //     resultado = (qtrGramas + 100) / 3;
    // //   }
    // //   else if (codigo == 3){
    // //     minerio = "Titânio";
    // //     resultado = (qtrGramas * 1.5) / 5;
    // //   }
    // //   else if (codigo == 4){
    // //     minerio = "Ouro";
    // //     resultado = Math.pow(qtrGramas, 5) * 1.5;
    // //   }
    // //   else{
    // //     System.out.print("Código errado, por gentileza contate um administrador!");
    // //     return;
    // //   }
    // //   System.out.print("O calculo para " + qtrGramas + " gramas de " + minerio + " é: " + resultado);
    // // }
    // // else{
    // //   System.out.print("Código errado, por gentileza contate um administrador!");
    // // }



    // // // exercicio 01
    // // Scanner ler = new Scanner(System.in);
    // // Double A, B, C, resultado;
    // // System.out.println("Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão");
    // // System.out.print("Digite o valor de A: ");
    // // A = ler.nextDouble();
    // // System.out.print("Digite o valor de B: ");
    // // B = ler.nextDouble();
    // // System.out.print("Digite o valor de C: ");
    // // C = ler.nextDouble();

    // // resultado = (Math.pow((A + B),2) + Math.pow((B + C),2)) / 2;
    // // System.out.print("O resultado dá operação é " + resultado);





    // .next para string 
    // .nextInt para inteiro 
    // ln para pular linha
    // assim vai
  }
}