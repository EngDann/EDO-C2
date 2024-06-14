document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".opcoes button");
    const title = document.getElementById("titulo");
    const intro = document.querySelector(".intro");
    const form = document.getElementById("Infect-Forms");
    const resultadoDiv = document.getElementById("resultado");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent.includes("doenças infecciosas")) {
                title.textContent = "Modelagem de Doenças Infecciosas";
                intro.innerHTML = `
                    <div class="question">
                        <p id="edo" class="answer">
                            Equações Diferenciais Ordinárias (EDOs) são equações
                            que descrevem a relação entre uma função e suas
                            derivadas. Elas são amplamente utilizadas em
                            diversas áreas da ciência e engenharia para modelar
                            fenômenos que envolvem mudanças contínuas.
                        </p>
                    </div>
                    <div class="question">
                        <h2>O que é o modelo SIR?</h2>
                        <p id="sir" class="answer">
                            O modelo SIR é um modelo epidemiológico que divide a
                            população em três categorias: Susceptíveis (S),
                            Infectados (I) e Recuperados (R). Ele utiliza EDOs
                            para descrever a transição entre esses estados ao
                            longo do tempo.
                        </p>
                    </div>
                    <div class="question">
                        <h2>O que é o modelo SEIR?</h2>
                        <p id="seir" class="answer">
                            O modelo SEIR é uma extensão do modelo SIR que inclui
                            uma categoria adicional: Expostos (E), que são
                            indivíduos que foram infectados mas ainda não são
                            infecciosos. Este modelo descreve a transição entre
                            os estados Susceptíveis, Expostos, Infectados e
                            Recuperados.
                        </p>
                    </div>
                    <div class="question">
                        <h2>Como é feito o cálculo?</h2>
                        <p id="calculo" class="answer">
                            Para prever a propagação de uma doença, utilizamos
                            EDOs para modelar as taxas de transmissão e
                            recuperação. Por exemplo, no modelo SIR:<br />
                            dS/dt = -βSI dI/dt = βSI - γI dR/dt = γI Onde:<br />
                            - <strong>S</strong> é o número de pessoas
                            susceptíveis (que podem pegar a doença).<br />
                            - <strong>I</strong> é o número de pessoas
                            infectadas (que têm a doença).<br />
                            - <strong>R</strong> é o número de pessoas
                            recuperadas (que se curaram da doença).<br />
                            - <strong>β</strong> é a taxa de transmissão (a
                            probabilidade de um susceptível se infectar ao
                            entrar em contato com um infectado).<br />
                            - <strong>γ</strong> é a taxa de recuperação (a
                            probabilidade de um infectado se recuperar a cada
                            dia).<br /><br />
                            Essas equações mostram como a doença se espalha e
                            como as pessoas mudam de estado (de susceptível para
                            infectado e de infectado para recuperado) ao longo
                            do tempo.
                        </p>
                    </div>
                `;
                form.innerHTML = `
                    <label for="susceptiveis">Susceptíveis (S):</label>
                    <input type="number" id="susceptiveis" name="susceptiveis" required /><br />
                    <label for="infectados">Infectados (I):</label>
                    <input type="number" id="infectados" name="infectados" required /><br />
                    <label for="recuperados">Recuperados (R):</label>
                    <input type="number" id="recuperados" name="recuperados" required /><br />
                    <label for="beta">Taxa de Transmissão (β):</label>
                    <input type="number" step="0.01" id="beta" name="beta" required /><br />
                    <label for="gama">Taxa de Recuperação (γ):</label>
                    <input type="number" step="0.01" id="gama" name="gama" required /><br />
                    <button type="button" onclick="calcularDoenca()">Calcular</button>
                `;
            } else if (button.textContent.includes("populacional")) {
                title.textContent = "Crescimento Populacional";
                intro.innerHTML = `
                    <div class="question">
                        <h2>O que é Crescimento Populacional?</h2>
                        <p id="pop" class="answer">
                            O crescimento populacional descreve como a população de um grupo de organismos
                            muda ao longo do tempo. Modelos de EDO podem ser usados para prever a
                            dinâmica populacional, levando em consideração fatores como taxa de natalidade,
                            taxa de mortalidade e capacidade de suporte do ambiente.<br /><br />
                            Para calcular o crescimento populacional, utilizamos a seguinte equação:<br />
                            dP/dt = P * (natalidade - mortalidade) * (1 - P / capacidade)
                            Onde:<br />
                            - <strong>P</strong> é a população atual.<br />
                            - <strong>natalidade</strong> é a taxa de natalidade.<br />
                            - <strong>mortalidade</strong> é a taxa de mortalidade.<br />
                            - <strong>capacidade</strong> é a capacidade de suporte do ambiente.<br /><br />
                            Essa equação descreve como a população cresce de acordo com as taxas de natalidade e mortalidade,
                            ajustando-se pela capacidade de suporte do ambiente.
                        </p>
                    </div>
                `;
                form.innerHTML = `
                    <label for="populacao">População Atual (P):</label>
                    <input type="number" id="populacao" name="populacao" required /><br />
                    <label for="natalidade">Taxa de Natalidade:</label>
                    <input type="number" step="0.01" id="natalidade" name="natalidade" required /><br />
                    <label for="mortalidade">Taxa de Mortalidade:</label>
                    <input type="number" step="0.01" id="mortalidade" name="mortalidade" required /><br />
                    <label for="capacidade">Capacidade de Suporte:</label>
                    <input type="number" id="capacidade" name="capacidade" required /><br />
                    <button type="button" onclick="calcularPopulacao()">Calcular</button>
                `;
            } else if (button.textContent.includes("econômico")) {
                title.textContent = "Modelos de Crescimento Econômico";
                intro.innerHTML = `
                    <div class="question">
                        <h2>O que é Crescimento Econômico?</h2>
                        <p id="eco" class="answer">
                            Crescimento econômico refere-se ao aumento da produção de bens e serviços de
                            uma economia ao longo do tempo. Modelos de EDO são usados para analisar o crescimento
                            econômico considerando fatores como investimento, consumo, tecnologia e políticas governamentais.<br /><br />
                            Para calcular o crescimento econômico, utilizamos a seguinte equação:<br />
                            dK/dt = investimento * K - depreciacao * K + crescimento * K
                            Onde:<br />
                            - <strong>K</strong> é o capital atual.<br />
                            - <strong>investimento</strong> é a taxa de investimento.<br />
                            - <strong>depreciacao</strong> é a taxa de depreciação.<br />
                            - <strong>crescimento</strong> é a taxa de crescimento tecnológico.<br /><br />
                            Essa equação descreve como o capital da economia cresce ao longo do tempo,
                            considerando o investimento, a depreciação e o crescimento tecnológico.
                        </p>
                    </div>
                `;
                form.innerHTML = `
                    <label for="capital">Capital Atual (K):</label>
                    <input type="number" id="capital" name="capital" required /><br />
                    <label for="investimento">Taxa de Investimento:</label>
                    <input type="number" step="0.01" id="investimento" name="investimento" required /><br />
                    <label for="depreciacao">Taxa de Depreciação:</label>
                    <input type="number" step="0.01" id="depreciacao" name="depreciacao" required /><br />
                    <label for="crescimento">Taxa de Crescimento:</label>
                    <input type="number" step="0.01" id="crescimento" name="crescimento" required /><br />
                    <button type="button" onclick="calcularEconomia()">Calcular</button>
                `;
            }
        });
    });

    function calcularDoenca() {
        const S = parseFloat(document.getElementById("susceptiveis").value);
        const I = parseFloat(document.getElementById("infectados").value);
        const R = parseFloat(document.getElementById("recuperados").value);
        const beta = parseFloat(document.getElementById("beta").value);
        const gama = parseFloat(document.getElementById("gama").value);

        const dSdt = -beta * S * I;
        const dIdt = beta * S * I - gama * I;
        const dRdt = gama * I;

        resultadoDiv.innerHTML = `
            <p><strong>Resultado:</strong></p>
            <p>dS/dt = ${dSdt.toFixed(2)}</p>
            <p>dI/dt = ${dIdt.toFixed(2)}</p>
            <p>dR/dt = ${dRdt.toFixed(2)}</p>
            <p>Os valores calculados mostram a taxa de variação do número de susceptíveis, infectados e recuperados ao longo do tempo.</p>
        `;
    }

    function calcularPopulacao() {
        const P = parseFloat(document.getElementById("populacao").value);
        const natalidade = parseFloat(
            document.getElementById("natalidade").value
        );
        const mortalidade = parseFloat(
            document.getElementById("mortalidade").value
        );
        const capacidade = parseFloat(
            document.getElementById("capacidade").value
        );

        const dPdt = P * (natalidade - mortalidade) * (1 - P / capacidade);

        resultadoDiv.innerHTML = `
            <p><strong>Resultado:</strong></p>
            <p>dP/dt = ${dPdt.toFixed(2)}</p>
            <p>Os valores calculados mostram a taxa de variação da população ao longo do tempo.</p>
        `;
    }

    function calcularEconomia() {
        const K = parseFloat(document.getElementById("capital").value);
        const investimento = parseFloat(
            document.getElementById("investimento").value
        );
        const depreciacao = parseFloat(
            document.getElementById("depreciacao").value
        );
        const crescimento = parseFloat(
            document.getElementById("crescimento").value
        );

        const dKdt = investimento * K - depreciacao * K + crescimento * K;

        resultadoDiv.innerHTML = `
            <p><strong>Resultado:</strong></p>
            <p>dK/dt = ${dKdt.toFixed(2)}</p>
            <p>Os valores calculados mostram a taxa de variação do capital econômico ao longo do tempo.</p>
        `;
    }
});
