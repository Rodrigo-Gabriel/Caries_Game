const STAGES = [
    {
        id: 0, name: "Diagnóstico", icon: '<div class="logo-big"><img src="./img/Carie-logo-removebg-preview.png" alt="Logo de um dente todo podre" style="width: 20%;"></div>', desc: "Detecção e classificação", questions: [
            { q: "Sobre a avaliação da atividade da lesão de cárie, assinale a alternativa correta:", opts: ["A cor escura indica obrigatoriamente inatividade", "A atividade da lesão depende da interação entre biofilme, superfície e localização", "A textura superficial é irrelevante para determinar atividade", "Lesões ativas são sempre cavitadas"], ans: 1, exp: "A avaliação da atividade considera biofilme, superfície e localização; cor isolada não determina atividade." },
            { q: "Em relação às lesões proximais, é correto afirmar:", opts: ["A inspeção visual isolada é suficiente para diagnóstico precoce", "A sondagem com pressão melhora a sensibilidade diagnóstica", "Lesões em esmalte podem não ser visíveis clinicamente", "A radiografia detecta todas as lesões iniciais"], ans: 2, exp: "Lesões iniciais em esmalte podem passar despercebidas na inspeção clínica e muitas vezes só são identificadas por radiografia." },
            { q: "Sobre sistemas de detecção como ICDAS, assinale a alternativa correta:", opts: ["Permitem avaliar severidade e atividade da lesão", "Substituem completamente a necessidade de exame clínico", "São úteis apenas em pesquisas, não na clínica", "Baseiam-se exclusivamente em achados radiográficos"], ans: 0, exp: "Sistemas como ICDAS avaliam a severidade e também orientam a avaliação da atividade clínica, não somente radiografia." },
            { q: "Uma lesão classificada como ICDAS 2 apresenta:", opts: ["Mancha branca visível apenas após secagem", "Alteração visual distinta no esmalte sem cavitação", "Cavidade visível com dentina exposta", "Sombra de dentina subjacente"], ans: 1, exp: "ICDAS 2 descreve uma alteração visual distinta no esmalte, ainda sem cavitação evidente." },
            { q: "Em relação ao diagnóstico de lesões radiculares:", opts: ["Radiografias são sempre conclusivas", "Superfícies amolecidas e opacas sugerem atividade", "A textura é irrelevante para determinar atividade", "São mais comuns em pacientes jovens com esmalte íntegro"], ans: 1, exp: "Lesões radiculares ativas costumam apresentar textura amolecida e aspecto opaco; textura é relevante para atividade." },
            { q: "Sobre a relação entre biofilme e atividade de cárie:", opts: ["Biofilme maduro está associado a maior risco de atividade", "A presença de biofilme não influencia a atividade", "Apenas a quantidade de biofilme importa, não sua localização", "Lesões ativas ocorrem independentemente do biofilme"], ans: 0, exp: "Biofilme maduro é mais cariogênico e está associado a maior risco de progressão e atividade." },
            { q: "Em relação à radiografia bite-wing, é correto afirmar:", opts: ["Subestima a extensão da lesão em dentina", "Permite avaliar com precisão a profundidade real da lesão", "Detecta lesões iniciais de esmalte com alta sensibilidade", "É indicada apenas em casos sintomáticos"], ans: 0, exp: "Bite-wing tende a subestimar a extensão real em dentina, pois a imagem é bidimensional e não mostra toda a profundidade." },
            { q: "Sobre lesões de mancha branca, assinale a alternativa correta:", opts: ["Mancha branca inativa apresenta superfície lisa e brilhante", "Toda mancha branca é ativa", "Mancha branca ativa é sempre cavitada", "A pigmentação clara indica atividade"], ans: 0, exp: "Lesões de mancha branca inativas tipicamente têm superfície lisa e brilhante, ao contrário das ativas." },
            { q: "No diagnóstico diferencial de lesões não cariosas, é correto afirmar:", opts: ["Lesões cervicais não cariosas geralmente apresentam superfície lisa e dura", "Erosão apresenta superfície rugosa semelhante à cárie ativa", "Atrição ocorre apenas em presença de biofilme", "Abfração ocorre principalmente por ação química"], ans: 0, exp: "Lesões cervicais não cariosas costumam ser lisas e duras, enquanto cáries apresentam textura mais macia ou opaca." },
            { q: "Sobre a decisão clínica baseada no diagnóstico de cárie:", opts: ["Lesões não cavitadas podem ser manejadas com controle de biofilme", "Toda lesão detectada deve ser restaurada", "Radiografia define completamente o plano de tratamento", "A presença de dentina envolvida sempre indica intervenção invasiva"], ans: 0, exp: "Lesões não cavitadas podem ser tratadas conservadoramente com controle de biofilme e medidas preventivas." },
            { q: "Em relação à detecção visual com secagem:", opts: ["Lesões iniciais tornam-se mais evidentes após secagem", "A secagem não altera a visibilidade da lesão", "A secagem pode mascarar lesões ativas", "É desnecessária em esmalte"], ans: 0, exp: "A secagem melhora a visibilidade de lesões iniciais de esmalte, tornando-as mais evidentes." },
            { q: "Sobre a progressão da cárie em esmalte e dentina:", opts: ["A dentina oferece menor resistência à progressão da lesão", "No esmalte, a progressão é mais rápida que na dentina", "Na dentina, a progressão tende a ser mais lenta devido à estrutura tubular", "A progressão independe da estrutura do tecido"], ans: 0, exp: "A dentina é menos mineralizada e oferece menor resistência, por isso a progressão tende a ser mais rápida do que no esmalte." }
        ]
    },
    {
        id: 1, name: "Prevenção", icon: '<div class="logo-big"><img src="./img/prevencao.png" alt="Logo de um dente todo podre" style="width: 20%;"></div>', desc: "Fluoreto e controle", questions: [
            { q: "Qual é o principal fator na prevenção da cárie dentária?", opts: ["Clareamento dental", "Controle do biofilme dental (placa)", "Uso de antibióticos", "Extração dentária"], ans: 1, exp: "O controle do biofilme é o principal pilar na prevenção da cárie dentária." },
            { q: "A escovação dental deve ser realizada:", opts: ["Apenas após o almoço", "Somente à noite", "Pelo menos duas a três vezes ao dia", "Apenas uma vez ao dia"], ans: 2, exp: "Escovar os dentes pelo menos duas a três vezes ao dia ajuda a remover o biofilme e reduzir o risco de cárie." },
            { q: "O uso do fio dental é importante porque:", opts: ["Substitui a escovação", "Remove biofilme entre os dentes onde a escova não alcança", "Evita o uso de flúor", "Clareia os dentes"], ans: 1, exp: "O fio dental remove o biofilme interdental, onde a escova não atinge adequadamente." },
            { q: "O flúor atua na prevenção da cárie por:", opts: ["Substituir o fio dental", "Apenas matar bactérias", "Fortalecer o esmalte e promover remineralização", "Deixar os dentes mais brancos"], ans: 2, exp: "O flúor fortalece o esmalte e promove a remineralização, tornando o dente mais resistente à cárie." },
            { q: "A dieta influencia na prevenção da cárie porque:", opts: ["Açúcares frequentes favorecem o desenvolvimento da cárie", "Não tem relação com cárie", "Comer à noite evita cárie", "Apenas alimentos duros causam cárie"], ans: 0, exp: "O consumo frequente de açúcares aumenta o risco de cárie ao proporcionar ácido à microbiota cariogênica." },
            { q: "Os selantes dentários são indicados para:", opts: ["Prevenir cáries em sulcos e fissuras dos dentes", "Substituir restaurações", "Tratar cáries profundas", "Clarear dentes"], ans: 0, exp: "Selantes são usados para prevenir cáries em sulcos e fissuras, especialmente em dentes posteriores." },
            { q: "A frequência do consumo de açúcar é importante porque:", opts: ["Só importa a quantidade", "Aumenta o tempo de exposição ácida no dente", "Não interfere na cárie", "Apenas doces sólidos causam cárie"], ans: 1, exp: "Frequência alta mantém o dente em ambiente ácido por mais tempo, favorecendo a desmineralização." },
            { q: "Visitas regulares ao dentista ajudam na prevenção porque:", opts: ["Substituem a escovação", "Evitam o uso de flúor", "Permitem diagnóstico precoce e controle da doença", "Apenas melhoram a estética"], ans: 2, exp: "Consulta regular permite diagnóstico precoce, orientação e intervenções preventivas." },
            { q: "O uso de enxaguantes com flúor é indicado para:", opts: ["Clarear os dentes", "Substituir a escovação", "Auxiliar na prevenção da cárie, especialmente em pacientes de risco", "Apenas refrescar o hálito"], ans: 2, exp: "Enxaguantes com flúor auxiliam na prevenção da cárie, principalmente em pacientes de maior risco." },
            { q: "A educação em saúde bucal é importante porque:", opts: ["Só serve para crianças", "Ajuda na adoção de hábitos saudáveis e prevenção da cárie", "Não muda hábitos", "Substitui o tratamento odontológico"], ans: 1, exp: "Educação em saúde bucal promove hábitos saudáveis e contribui diretamente para a prevenção da cárie." }
        ]
    },
    {
        id: 2, name: "Tratamento", icon: '<div class="logo-big"><img src="./img/tratamento.png" alt="Logo de um dente todo podre" style="width: 20%;"></div>', desc: "Fatores causadores", questions: [
            { q: "Qual é o principal objetivo do tratamento da cárie dentária?", opts: ["Remover o tecido cariado e restaurar a função do dente", "Apenas melhorar a estética", "Clarear os dentes", "Evitar o uso de anestesia"], ans: 0, exp: "O tratamento visa remover o tecido cariado e restaurar a forma e função do dente." },
            { q: "Em lesões iniciais de cárie (mancha branca), o tratamento mais indicado é:", opts: ["Uso de antibióticos", "Raspagem periodontal", "Remineralização com flúor", "Extração do dente"], ans: 2, exp: "Lesões iniciais devem ser manejadas com medidas de remineralização e controle de biofilme." },
            { q: "Quando a cárie atinge a dentina, o tratamento mais comum é:", opts: ["Cirurgia gengival", "Restauração com remoção do tecido cariado", "Aplicação de flúor apenas", "Uso de enxerto ósseo"], ans: 1, exp: "Cárie em dentina geralmente requer remoção do tecido cariado e restauração adequada." },
            { q: "Qual material é mais utilizado em restaurações estéticas de dentes anteriores?", opts: ["Cimento de ionômero de vidro apenas", "Resina composta", "Amálgama", "Ouro"], ans: 1, exp: "Resina composta é o material de escolha para restaurações estéticas em dentes anteriores." },
            { q: "Em casos de cárie profunda com comprometimento pulpar, o tratamento indicado é:", opts: ["Tratamento endodôntico (canal)", "Profilaxia", "Clareamento", "Aplicação de selante"], ans: 0, exp: "Quando a polpa está comprometida, o tratamento endodôntico é o procedimento de escolha." },
            { q: "O cimento de ionômero de vidro é indicado porque:", opts: ["Libera flúor e ajuda na prevenção de novas cáries", "Não adere ao dente", "É apenas estético", "Não possui resistência alguma"], ans: 0, exp: "CIV libera flúor e contribui para a prevenção de recidivas em restaurações." },
            { q: "A remoção seletiva da dentina cariada tem como objetivo:", opts: ["Aumentar o tempo de consulta", "Preservar a estrutura dental e evitar exposição pulpar", "Remover toda a dentina, inclusive a saudável", "Substituir o uso de anestesia"], ans: 1, exp: "A remoção seletiva preserva estrutura dental e reduz risco de exposição pulpar em lesões profundas." },
            { q: "Qual é a principal indicação dos selantes dentários?", opts: ["Prevenir cáries em superfícies oclusais", "Clarear dentes", "Tratar cáries profundas", "Substituir restaurações"], ans: 0, exp: "Selantes são indicados para prevenção de cáries em sulcos e fissuras oclusais." },
            { q: "A técnica ART (Tratamento Restaurador Atraumático) é caracterizada por:", opts: ["Remoção mínima de tecido cariado com instrumentos manuais", "Uso exclusivo de alta rotação", "Uso de laser apenas", "Necessidade de anestesia geral"], ans: 0, exp: "ART utiliza instrumentos manuais para remoção mínima do tecido cariado, sem equipamento rotatório." },
            { q: "Em casos onde o dente está muito destruído pela cárie, pode ser necessário:", opts: ["Coroa protética ou extração", "Aplicação de flúor", "Uso de enxaguante bucal apenas", "Apenas escovação"], ans: 0, exp: "Dentes muito destruídos podem requerer coroa protética ou, em casos irreversíveis, extração." }
        ]
    },
    {
        id: 3, name: "Manejo", icon: '<div class="logo-big"><img src="./img/manejo.png" alt="Logo de um dente todo podre" style="width: 20%;"></div>', desc: "Tratamento e manejo", questions: [
            { q: "O manejo de lesões cariosas deve ser baseado principalmente em:", opts: ["Preferência do dentista", "Avaliação do risco de cárie e atividade da lesão", "Cor do dente", "Idade do paciente apenas"], ans: 1, exp: "O manejo deve considerar o risco de cárie e a atividade da lesão, não apenas fatores isolados." },
            { q: "Lesões de mancha branca ativa devem ser manejadas com:", opts: ["Clareamento dental", "Controle de biofilme e aplicação de flúor", "Extração", "Restauração imediata"], ans: 1, exp: "Manchas brancas ativas respondem bem ao controle de biofilme e à aplicação de flúor para remineralização." },
            { q: "Uma lesão cariosa inativa é caracterizada por:", opts: ["Cor sempre escura", "Superfície lisa, brilhante e dura ao toque", "Presença de dor intensa", "Superfície brilhante e dura"], ans: 1, exp: "Lesões inativas tipicamente apresentam superfície lisa, brilhante e dura, indicando cessação da progressão." },
            { q: "O controle do biofilme dental é fundamental porque:", opts: ["Interrompe a progressão da cárie", "Apenas melhora o hálito", "Clareia os dentes", "Substitui a restauração"], ans: 0, exp: "Remover o biofilme interrompe o processo cariogênico e reduz a progressão da lesão." },
            { q: "Em cavidades profundas, o manejo mais conservador indicado é:", opts: ["Uso de antibiótico", "Remoção total da dentina", "Remoção seletiva da dentina cariada", "Extração imediata"], ans: 2, exp: "Remoção seletiva preserva a estrutura dental e evita exposição pulpar desnecessária." },
            { q: "O uso de flúor no manejo da cárie tem como principal função:", opts: ["Promover remineralização e aumentar resistência do esmalte", "Substituir escovação", "Matar bactérias instantaneamente", "Clarear o esmalte"], ans: 0, exp: "O flúor promove remineralização e aumenta a resistência do esmalte, fortalecendo o dente." },
            { q: "Em pacientes com alto risco de cárie, o manejo inclui:", opts: ["Acompanhamento frequente, flúor e educação em saúde", "Uso de prótese", "Apenas restaurações", "Extração de dentes"], ans: 0, exp: "Pacientes de alto risco precisam de acompanhamento frequente, uso de flúor e educação em saúde bucal." },
            { q: "O selamento de cavidades sem remoção total da cárie pode ser indicado porque:", opts: ["Interrompe o suprimento de nutrientes às bactérias", "Substitui o flúor", "Aumenta a dor", "Elimina o dente"], ans: 0, exp: "Selar cavidades efetivamente limita a nutrição bacteriana e interrompe a progressão da cárie." },
            { q: "A abordagem minimamente invasiva visa:", opts: ["Preservar o máximo de tecido saudável possível", "Remover o máximo de estrutura dental", "Usar apenas anestesia", "Evitar qualquer tratamento"], ans: 0, exp: "A MI busca conservar ao máximo o tecido dental saudável enquanto trata a doença." },
            { q: "A decisão de restaurar uma lesão cariosa depende de:", opts: ["Profundidade, atividade da lesão e risco do paciente", "Apenas da estética", "Apenas da idade", "Cor do dente"], ans: 0, exp: "A restauração deve ser baseada em profundidade, atividade e risco, não apenas em fatores estéticos ou isolados." }
        ]
    }
];

let state = { currentStage: 0, qIdx: 0, score: 0, lives: 4, answered: false, stageScores: [null, null, null, null] };

function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}
function showStages() { renderStageGrid(); show('stageSelect') }

function renderStageGrid() {
    const g = document.getElementById('stageGrid');
    g.innerHTML = '';
    STAGES.forEach((s, i) => {
        const unlocked = i === 0 || state.stageScores[i - 1] >= 60;
        const done = state.stageScores[i] !== null;
        const d = document.createElement('div');
        d.className = 'stage-card' + (unlocked ? '' : ' locked') + (done ? ' done' : '');
        d.innerHTML = `<div class="sc-icon">${s.icon}</div>
      <div class="sc-name">${s.name}${done ? ' ✓' : ''}</div>
      <div class="sc-desc">${s.desc}</div>
      ${done ? `<div class="sc-score">${state.stageScores[i]} pts</div>` : ''}`;
        if (unlocked) d.onclick = () => startStage(i);
        g.appendChild(d);
    });
}

function startStage(i) {
    state.currentStage = i; state.qIdx = 0; state.answered = false; state.lives = 5;
    document.getElementById('stageLabel').textContent = STAGES[i].icon + ' ' + STAGES[i].name;
    renderQ(); show('gameplay');
}

function confirmBack() {
    if (confirm('Voltar ao menu? O progresso desta fase será perdido.')) { show('home') }
}

function renderQ() {
    const st = STAGES[state.currentStage];
    const q = st.questions[state.qIdx];
    const total = st.questions.length;
    document.getElementById('scoreDisp').textContent = state.score;
    document.getElementById('qNumDisp').textContent = (state.qIdx + 1) + '/' + total;
    document.getElementById('progBar').style.width = Math.round(state.qIdx / total * 100) + '%';
    renderLives();
    document.getElementById('qtext').textContent = q.q;
    const opts = document.getElementById('opts');
    opts.innerHTML = '';
    q.opts.forEach((o, idx) => {
        const b = document.createElement('button');
        b.className = 'opt';
        b.textContent = String.fromCharCode(65 + idx) + ') ' + o;
        b.onclick = () => selectOpt(idx);
        opts.appendChild(b);
    });
    const fb = document.getElementById('feedback');
    fb.className = 'feedback'; fb.textContent = '';
    document.getElementById('statusMsg').textContent = '';
    document.getElementById('statusMsg').className = 'status-msg';
    const nb = document.getElementById('nextBtn');
    nb.style.display = 'none'; nb.textContent = 'Próxima →'; nb.onclick = nextQuestion;
    state.answered = false;
}

function selectOpt(idx) {
    if (state.answered) return;
    state.answered = true;
    const q = STAGES[state.currentStage].questions[state.qIdx];
    document.querySelectorAll('.opt').forEach(o => o.classList.add('locked'));
    document.querySelectorAll('.opt')[q.ans].classList.add('correct');
    const fb = document.getElementById('feedback');
    const sm = document.getElementById('statusMsg');
    if (idx === q.ans) {
        state.score += 20;
        fb.className = 'feedback show ok'; fb.textContent = '✓ Correto! ' + q.exp;
        sm.textContent = '+20 pontos'; sm.className = 'status-msg ok';
    } else {
        document.querySelectorAll('.opt')[idx].classList.add('wrong');
        state.lives = Math.max(0, state.lives - 1);
        fb.className = 'feedback show err'; fb.textContent = '✗ Incorreto. ' + q.exp;
        sm.textContent = '-1 vida'; sm.className = 'status-msg err';
    }
    document.getElementById('scoreDisp').textContent = state.score;
    renderLives();
    const nb = document.getElementById('nextBtn');
    nb.style.display = 'inline-block';
    if (state.lives === 0) { nb.textContent = 'Ver resultado →'; nb.onclick = () => endStage(true) }
}

function renderLives() {
    document.getElementById('livesDisp').innerHTML =
        [0, 1, 2, 3, 4].map(i => `<span style="opacity:${i < state.lives ? 1 : .4}">❤</span>`).join('');
}

function nextQuestion() {
    if (state.lives === 0) { endStage(true); return }
    state.qIdx++;
    if (state.qIdx >= STAGES[state.currentStage].questions.length) endStage(false);
    else renderQ();
}

function endStage(fail) {
    state.stageScores[state.currentStage] = state.score;
    const total = STAGES[state.currentStage].questions.length * 20;
    const pct = Math.round(state.score / total * 100);
    let medal, msg;
    if (fail) { medal = '💔'; msg = 'Você ficou sem vidas. Revise o conteúdo e tente novamente!' }
    else if (pct >= 90) { medal = '🏆'; msg = 'Domínio completo! Você está pronto para a clínica.' }
    else if (pct >= 60) { medal = '🥈'; msg = 'Bom desempenho! Revise os pontos que errou para consolidar.' }
    else { medal = '📚'; msg = 'Reforce este tema antes de avançar.' }
    document.getElementById('medal').textContent = medal;
    document.getElementById('finalScore').textContent = state.score;
    document.getElementById('resultMsg').textContent = msg;
    show('endScreen');
}

function ResetStages() {
    if (confirm('Tem certeza que deseja reiniciar? Todo o progesso será perdido.')) {
        state = { currentStage: 0, qIdx: 0, score: 0, lives: 4, answered: false, stageScores: [null, null, null, null] };
        show('home');
    }
}