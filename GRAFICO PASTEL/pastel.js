document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("grafico");
    const ctx = canvas.getContext("2d");

    const porcentajes = [10, 20, 30, 40];
    const colores = ["#FF5733", "#FFC300", "#33FF57", "#339CFF"];
    

    let anguloInicial = -Math.PI / 2;

    for (let i = 0; i < porcentajes.length; i++) {
        const porcentaje = (porcentajes[i] / 100) * 2 * Math.PI;
        const anguloMedio = anguloInicial + porcentaje / 2;
        
        const x = canvas.width / 2 + Math.cos(anguloMedio) * (canvas.width / 4);
        const y = canvas.height / 2 + Math.sin(anguloMedio) * (canvas.height / 4);
        
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, anguloInicial, anguloInicial + porcentaje);
        ctx.fillStyle = colores[i];
        ctx.fill();

        ctx.fillStyle = "#000";
        ctx.font = "900 28px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${porcentajes[i]}%`, x, y);

        anguloInicial += porcentaje;
    }
});


