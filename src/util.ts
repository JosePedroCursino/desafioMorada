export function calculo(valor: number) {
    let c100, c50, c20, c10, c5, c2: number;
    if (valor % 2 === 1) {
        if (valor >= 5) {
            c5 = 1;
            valor = valor - 5;
        } else {
            throw new Error("Esse valor não é possivel de sacar");
        }
    } else {
        c5 = 0;
    }

    c100 = Math.floor(valor / 100);
    valor = valor % 100;
    c50 = Math.floor(valor / 50);
    valor = valor % 50;
    c20 = Math.floor(valor / 20);
    valor = valor % 20;
    c10 = Math.floor(valor / 10);
    valor = valor % 10;
    c2 = Math.floor(valor / 2);
    valor = valor % 2;

    return {
        "100": c100,
        "50": c50,
        "20": c20,
        "10": c10,
        "5": c5,
        "2": c2,
    };
}