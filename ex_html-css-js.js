//Escribe aquí tu código JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("Formulario_hamburguesa");
    const span = document.getElementById("totalpedido");
    const instrucciones = document.getElementById("instrucciones");
    const contador = document.getElementById("contador");

    instrucciones.oninput = () => {
        contador.textContent = `${instrucciones.value.length}/100 caracteres`;
    };

    const totalPedido = () => {
        let precio = Number(document.getElementById("tipo").value);
        let extras = document.querySelectorAll(".extras:checked").length;
        let cantidad = Number(document.getElementById("cantidad").value);
        let total = (precio+extras) * cantidad;
        span.textContent = `${total} €`;
        return total;
    };

    document.querySelectorAll("input, select").forEach(el => {
        el.onchange = totalPedido;
    });

    form.onsubmit = (e) => {
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();

        if(nombre === "" || apellidos === "" || direccion.length < 15 || !/^\d{9,}$/.test(telefono) || !email.includes("@")) {
            alert("Rellena los campos obligatorios");
            e.preventDefault();
        } else if(confirm("¿Enviar pedido?")) {
            alert(`Gracias por tu pedido.`);
        } else {
            e.preventDefault();
        }
    };
    totalPedido();
});