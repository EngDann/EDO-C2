document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("Infect-Forms");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const susceptiveis = document.getElementById("susceptíveis").value;
        const infectados = document.getElementById("infectados").value;
        const recuperados = document.getElementById("recuperados").value;
        const taxaTransmissao =
            document.getElementById("transmission-rate").value;
        const taxaRecuperacao = document.getElementById("recovery-rate").value;

        const resultDiv = document.getElementById("result");
        const resultText = `S: ${susceptiveis}, I: ${infectados}, R: ${recuperados}, β: ${taxaTransmissao}, γ: ${taxaRecuperacao}`;
        resultDiv.textContent = resultText;
    });
});
