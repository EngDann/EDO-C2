document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".opcoes button");
    const edoIntro = document.getElementById("edoIntro");
    const topicIntro = document.getElementById("topicIntro");
    const formSection = document.querySelector(".form-section");
    const form = document.getElementById("Infect-Forms");
    const resultadoDiv = document.getElementById("resultado");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const topic = button.getAttribute("data-topic");

            edoIntro.style.display = "none";
            topicIntro.style.display = "block";
            formSection.style.display = "block";
            resultadoDiv.style.display = "none";

            switch (topic) {
                case "doencas":
                    topicIntro.innerHTML = `
                        <div class="question">
                            <h2>O que é o modelo SIR?</h2>
                            <p id="sir" class="answer">
                                O modelo SIR é um modelo epidemiológico que divide a população em três categorias:
                                Susceptíveis (S), Infectados (I) e Recuperados (R). Ele utiliza EDOs para descrever
                                a transição entre esses estados ao longo do tempo.
                            </p>
                        </div>

                        <div class="question">
                            <h2>Como é feito o cálculo?</h2>
                            <p id="calculo" class="answer">
                                Para prever a propagação de uma doença, utilizamos EDOs para modelar as taxas de transmissão
                                e recuperação. Por exemplo, no modelo SIR:<br />
                                <em>dS/dt = -βSI</em><br />
                                <em>dI/dt = βSI - γI</em><br />
                                <em>dR/dt = γI</em><br />
                                Onde:<br />
                                - <strong>S</strong> é o número de pessoas susceptíveis (que podem pegar a doença).<br />
                                - <strong>I</strong> é o número de pessoas infectadas (que têm a doença).<br />
                                - <strong>R</strong> é o número de pessoas recuperadas (que se curaram da doença).<br />
                                - <strong>β</strong> é a taxa de transmissão (a probabilidade de um susceptível se infectar ao
                                entrar em contato com um infectado).<br />
                                - <strong>γ</strong> é a taxa de recuperação (a probabilidade de um infectado se recuperar a
                                cada dia).<br /><br />
                                Para calcular as mudanças ao longo do tempo, usamos um método numérico como o método de Euler.
                                Por exemplo, para um intervalo de tempo pequeno Δt, temos:<br />
                                <em>S(t + Δt) = S(t) + dS/dt * Δt</em><br />
                                <em>I(t + Δt) = I(t) + dI/dt * Δt</em><br />
                                <em>R(t + Δt) = R(t) + dR/dt * Δt</em>
                            </p>
                        </div>
                    `;
                    form.innerHTML = `
                       <label for="susceptiveis">Susceptíveis (S):</label>
                        <input type="number" id="susceptiveis" name="susceptiveis" required step="1" placeholder="Insira um número inteiro" /><br />
                        <label for="infectados">Infectados (I):</label>
                        <input type="number" id="infectados" name="infectados" required step="0.01" placeholder="Insira um número decimal com 2 casas decimais" /><br />
                        <label for="recuperados">Recuperados (R):</label>
                        <input type="number" id="recuperados" name="recuperados" required step="1" placeholder="Insira um número inteiro" /><br />
                        <label for="beta">Taxa de Transmissão (β):</label>
                        <input type="number" step="0.01" id="beta" name="beta" required placeholder="Insira um número decimal com 2 casas decimais" /><br />
                        <label for="gama">Taxa de Recuperação (γ):</label>
                        <input type="number" step="0.01" id="gama" name="gama" required placeholder="Insira um número decimal com 2 casas decimais" /><br />
                        <label for="tempo">Intervalo de Tempo (Δt):</label>
                        <input type="number" step="0.1" id="tempo" name="tempo" required placeholder="Insira um número decimal" /><br />
                        <button type="button" id="calcularDoencaBtn">Calcular</button>

                    `;
                    document
                        .getElementById("calcularDoencaBtn")
                        .addEventListener("click", calcularDoenca);
                    break;
                case "populacao":
                    topicIntro.innerHTML = `
                        <div class="question">
                            <h2>O que é Crescimento Populacional?</h2>
                            <p id="pop" class="answer">
                                O crescimento populacional descreve como a população de um grupo de organismos
                                muda ao longo do tempo. Modelos de EDO podem ser usados para prever a
                                dinâmica populacional, levando em consideração fatores como taxa de natalidade,
                                taxa de mortalidade e capacidade de suporte do ambiente.<br /><br />
                                <h2>Como é feito o cálculo?</h2>                                
                                <em>dP/dt = P * (natalidade - mortalidade) * (1 - P / capacidade)</em><br />
                                Onde:<br />
                                - <strong>P</strong> é a população atual.<br />
                                - <strong>natalidade</strong> é a taxa de natalidade.<br />
                                - <strong>mortalidade</strong> é a taxa de mortalidade.<br />
                                - <strong>capacidade</strong> é a capacidade de suporte do ambiente.<br /><br />
                                Para calcular as mudanças ao longo do tempo, usamos um método numérico como o método de Euler.
                                Por exemplo, para um intervalo de tempo pequeno Δt, temos:<br />
                                <em>P(t + Δt) = P(t) + dP/dt * Δt</em>
                            </p>
                        </div>
                    `;
                    form.innerHTML = `
                        <label for="populacao">População Atual (P):</label>
                        <input type="number" id="populacao" name="populacao" required placeholder="Insira um número inteiro" /><br />
                        <label for="natalidade">Taxa de Natalidade:</label>
                        <input type="number" step="0.01" id="natalidade" name="natalidade" required placeholder="Insira um número decimal com 2 casas decimais" /><br />
                        <label for="mortalidade">Taxa de Mortalidade:</label>
                        <input type="number" step="0.01" id="mortalidade" name="mortalidade" required placeholder="Insira um número decimal com 2 casas decimais" /><br />
                        <label for="capacidade">Capacidade de Suporte:</label>
                        <input type="number" id="capacidade" name="capacidade" required placeholder="Insira um número inteiro" /><br />
                        <label for="tempo">Intervalo de Tempo (Δt):</label>
                        <input type="number" step="0.1" id="tempo" name="tempo" required placeholder="Insira um número decimal" /><br />
                        <button type="button" id="calcularPopulacaoBtn">Calcular</button><br /><br />

                    `;
                    document
                        .getElementById("calcularPopulacaoBtn")
                        .addEventListener("click", calcularPopulacao);
                    break;
                case "economia":
                    topicIntro.innerHTML = `
                        <div class="question">
                            <h2>O que é Crescimento Econômico?</h2>
                            <p id="eco" class="answer">
                                Crescimento econômico refere-se ao aumento da produção de bens e serviços de
                                uma economia ao longo do tempo. Modelos de EDO são usados para analisar o crescimento
                                econômico considerando fatores como investimento, consumo, tecnologia e políticas governamentais.<br /><br />
                                <h2>Como é feito o cálculo?</h2>                                
                                <em>dK/dt = investimento * K - depreciacao * K + crescimento * K</em><br />
                                Onde:<br />
                                - <strong>K</strong> é o capital atual.<br />
                                - <strong>investimento</strong> é a taxa de investimento.<br />
                                - <strong>depreciacao</strong> é a taxa de depreciação.<br />
                                - <strong>crescimento</strong> é a taxa de crescimento tecnológico.<br /><br />
                                Para calcular as mudanças ao longo do tempo, usamos um método numérico como o método de Euler.
                                Por exemplo, para um intervalo de tempo pequeno Δt, temos:<br />
                                <em>K(t + Δt) = K(t) + dK/dt * Δt</em>
                            </p>
                        </div>
                    `;
                    form.innerHTML = `
                    <label for="capital">Capital Atual (K):</label>
                    <input type="number" id="capital" name="capital" required placeholder="Insira um número inteiro" /><br />
                    <label for="investimento">Taxa de Investimento:</label>
                    <input type="number" step="0.01" id="investimento" name="investimento" required placeholder="Insira um número decimal com 2 casas decimais" /><br />
                    <label for="depreciacao">Taxa de Depreciação:</label>
                    <input type="number" step="0.01" id="depreciacao" name="depreciacao" required placeholder="Insira um número decimal com 2 casas decimais" /><br />
                    <label for="crescimento">Taxa de Crescimento:</label>
                    <input type="number" step="0.01" id="crescimento" name="crescimento" required placeholder="Insira um número decimal com 2 casas decimais" /><br />
                    <label for="tempo">Intervalo de Tempo (Δt):</label>
                    <input type="number" step="0.1" id="tempo" name="tempo" required placeholder="Insira um número decimal" /><br />
                    <button type="button" id="calcularEconomiaBtn">Calcular</button>
                    `;
                    document
                        .getElementById("calcularEconomiaBtn")
                        .addEventListener("click", calcularEconomia);
                    break;
            }
        });
    });

    function calcularDoenca() {
        const S = parseFloat(document.getElementById("susceptiveis").value);
        const I = parseFloat(document.getElementById("infectados").value);
        const R = parseFloat(document.getElementById("recuperados").value);
        const beta = parseFloat(document.getElementById("beta").value);
        const gama = parseFloat(document.getElementById("gama").value);
        const dt = parseFloat(document.getElementById("tempo").value);

        if (
            isNaN(S) ||
            isNaN(I) ||
            isNaN(R) ||
            isNaN(beta) ||
            isNaN(gama) ||
            isNaN(dt)
        ) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Verificação para evitar valores irreais
        if (beta <= 0 || gama <= 0 || dt <= 0 || beta > 10 || gama > 10) {
            alert(
                "As taxas de transmissão e recuperação devem estar entre 0 e 10, e o intervalo de tempo deve ser maior que zero."
            );
            return;
        }

        // Realizando as iterações do método de Euler
        let S_current = S;
        let I_current = I;
        let R_current = R;
        const totalPop = S + I + R;

        const iterations = 1000; // número de iterações para melhorar a precisão
        const dSdt_initial = (-beta * S_current * I_current) / totalPop;
        const dIdt_initial =
            (beta * S_current * I_current) / totalPop - gama * I_current;
        const dRdt_initial = gama * I_current;

        for (let i = 0; i < iterations; i++) {
            const dSdt = (-beta * S_current * I_current) / totalPop;
            const dIdt =
                (beta * S_current * I_current) / totalPop - gama * I_current;
            const dRdt = gama * I_current;

            S_current += dSdt * (dt / iterations);
            I_current += dIdt * (dt / iterations);
            R_current += dRdt * (dt / iterations);

            // Evitar valores negativos
            if (S_current < 0) S_current = 0;
            if (I_current < 0) I_current = 0;
            if (R_current < 0) R_current = 0;
        }

        resultadoDiv.innerHTML = `
            <p><strong>Resultado:</strong></p>
            <p>A taxa de variação dos susceptíveis é ${dSdt_initial.toFixed(
                2
            )} (equivalente a ${((dSdt_initial / totalPop) * 100).toFixed(
            2
        )}% da população).</p>
            <p>A taxa de variação dos infectados é ${dIdt_initial.toFixed(
                2
            )} (equivalente a ${((dIdt_initial / totalPop) * 100).toFixed(
            2
        )}% da população).</p>
            <p>A taxa de variação dos recuperados é ${dRdt_initial.toFixed(
                2
            )} (equivalente a ${((dRdt_initial / totalPop) * 100).toFixed(
            2
        )}% da população).</p>
            <p>Após um intervalo de tempo Δt = ${dt}, os valores são:</p>
            <p>Susceptíveis (S): ${S_current.toFixed(2)}</p>
            <p>Infectados (I): ${I_current.toFixed(2)}</p>
            <p>Recuperados (R): ${R_current.toFixed(2)}</p>
        `;
        resultadoDiv.style.display = "block";
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
        const dt = parseFloat(document.getElementById("tempo").value);

        if (
            isNaN(P) ||
            isNaN(natalidade) ||
            isNaN(mortalidade) ||
            isNaN(capacidade) ||
            isNaN(dt)
        ) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Verificação para evitar valores irreais
        if (
            capacidade <= 0 ||
            natalidade <= 0 ||
            mortalidade <= 0 ||
            dt <= 0 ||
            natalidade > 10 ||
            mortalidade > 10
        ) {
            alert(
                "Capacidade de suporte deve ser maior que zero. Taxas de natalidade e mortalidade devem estar entre 0 e 10, e o intervalo de tempo deve ser maior que zero."
            );
            return;
        }

        // Realizando as iterações do método de Euler
        let P_current = P;
        const iterations = 1000; // número de iterações para melhorar a precisão

        const dPdt_initial =
            P_current *
            (natalidade - mortalidade) *
            (1 - P_current / capacidade);

        for (let i = 0; i < iterations; i++) {
            const dPdt =
                P_current *
                (natalidade - mortalidade) *
                (1 - P_current / capacidade);
            P_current += dPdt * (dt / iterations);

            // Evitar valores negativos e crescimento descontrolado
            if (P_current < 0) P_current = 0;
            if (P_current > capacidade) P_current = capacidade;
        }

        const percentualVariacao = ((P_current - P) / P) * 100;

        resultadoDiv.innerHTML = `
            <p><strong>Resultado:</strong></p>
            <p>A taxa de variação da população é ${dPdt_initial.toFixed(
                2
            )}, o que representa uma variação de ${percentualVariacao.toFixed(
            2
        )}% da população atual.</p>
            <p>Após um intervalo de tempo Δt = ${dt}, a população será ${P_current.toFixed(
            2
        )}.</p>
        `;
        resultadoDiv.style.display = "block";
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
        const dt = parseFloat(document.getElementById("tempo").value);

        if (
            isNaN(K) ||
            isNaN(investimento) ||
            isNaN(depreciacao) ||
            isNaN(crescimento) ||
            isNaN(dt)
        ) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Verificação para evitar valores irreais
        if (
            investimento <= 0 ||
            depreciacao <= 0 ||
            crescimento <= 0 ||
            dt <= 0 ||
            investimento > 10 ||
            depreciacao > 10 ||
            crescimento > 10
        ) {
            alert(
                "Taxas de investimento, depreciação e crescimento devem estar entre 0 e 10, e o intervalo de tempo deve ser maior que zero."
            );
            return;
        }

        // Realizando as iterações do método de Euler
        let K_current = K;
        const iterations = 1000; // número de iterações para melhorar a precisão

        const dKdt_initial =
            investimento * K_current -
            depreciacao * K_current +
            crescimento * K_current;

        for (let i = 0; i < iterations; i++) {
            const dKdt =
                investimento * K_current -
                depreciacao * K_current +
                crescimento * K_current;
            K_current += dKdt * (dt / iterations);

            // Evitar valores negativos e crescimento descontrolado
            if (K_current < 0) K_current = 0;
            K_current = Math.round(K_current * 100) / 100; // Arredondar para duas casas decimais
        }

        const percentualVariacao = ((K_current - K) / K) * 100;

        resultadoDiv.innerHTML = `
            <p><strong>Resultado:</strong></p>
            <p>A taxa de variação do capital econômico é ${dKdt_initial.toFixed(
                2
            )}, o que representa uma variação de ${percentualVariacao.toFixed(
            2
        )}% do capital atual.</p>
            <p>Após um intervalo de tempo Δt = ${dt}, o capital será ${K_current.toFixed(
            2
        )}.</p>
        `;
        resultadoDiv.style.display = "block";
    }
});
