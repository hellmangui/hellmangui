[English](README.md) · **Português** · [Español](README.es.md)

# Guilherme — `hellmangui`

Treze anos fazendo coisas para as pessoas olharem. Três fazendo coisas para elas usarem.

A maior parte da minha carreira foi design gráfico — motion, branding e campanha política, trabalhando entre Brasil, Paraguai, Espanha e Portugal. Há três anos comecei a programar, muito porque a IA me deu vontade de construir a coisa em vez de entregar o layout e torcer.

Ainda estou aprendendo. Essa parte não acaba.

---

## O que estou construindo

### 🎮 HEL — extraction-survival melee, Unreal Engine 5
Sobre o **ACF** (Ascent Combat Framework), com locomoção **AGLS**, personagens **MetaHuman** e terreno em **Gaea**. Módulo do herói, travessia com voo e salto, ajuste de combate. 253 GB de projeto, com base de conhecimento própria e documentada.

### 🍽️ Alvor Reservas — SaaS de reservas com IA
Para **dois restaurantes em Alvor, Portugal**, com trinta anos de casa, ainda recebendo reservas por telefone e Messenger.

Uma restrição definiu tudo: *os restaurantes não podem parar*. Então nada é substituído. Telefone e Messenger continuam, e todo canal chega a um painel único por um campo `canal`. A equipe adota em etapas, e qualquer coisa pode ser desfeita.

`Next.js` · `Supabase` com row-level security · camada de IA agnóstica de provedor, para testar sem custo e rodar o melhor modelo em produção trocando uma variável.

### 🐎 Pantanal — servidor RedM com economia que funciona
Fazendas, genética e procriação animal, cooperativas, casa da moeda, oficinas, indústrias, exportação. Dezenas de recursos em Lua e um **app companheiro em Next.js**, com dashboards e guias para o jogador.

### 💳 Painel SMM — pagamentos e integração com provedor
Checkout **MercadoPago**, autenticação Discord. O webhook confere o status na fonte em vez de confiar no callback, se recusa a creditar duas vezes, e move status e saldo juntos ou não move nada.

---

## De onde eu venho

Treze anos de design me ensinaram coisas que o código não ensinou: que a primeira ideia raramente é a boa, que alguém vai olhar aquilo por oito segundos e decidir, e que entregar atrasado também é um bug.

**Photoshop · Illustrator · After Effects · DaVinci Resolve · Blender · Cinema 4D**

Campanha política foi bom treino para software. Prazo que não move, consequência real, e uma equipe que precisa do arquivo agora — não quando a versão perfeita existir.

---

## Como trabalho

**Decisão que se toma, se escreve.** Todo projeto tem um `DECISIONS.md` — contexto, decisão, motivo. Seis meses depois eu sei *por quê*, não só *o quê*. Menos disciplina do que desconfiança da própria memória.

**Restrição antes de funcionalidade.** O Alvor partiu de "o restaurante não pode parar", não de uma lista de features. A restrição escreveu boa parte da arquitetura sozinha.

**Custo é problema de arquitetura.** Modelos gratuitos enquanto se constrói, o melhor em produção, a uma variável de ambiente de distância.

---

## Stack

| | |
|---|---|
| **Jogo** | Unreal Engine 5 · C++ · Blueprints · ACF · MetaHuman · Gaea |
| **Web** | TypeScript · Next.js · React · Tailwind · Prisma |
| **Dados** | PostgreSQL · Supabase · SQLite |
| **Servidores de jogo** | Lua · RedM / FiveM · VORP |
| **Pagamentos e auth** | MercadoPago · NextAuth · Discord OAuth |
| **Design** | Photoshop · Illustrator · After Effects · DaVinci · Blender · C4D |

---

## Dronner

<a href="https://github.com/hellmangui/dronner"><img src="dronner.svg" alt="Dronner — um dragão vermelho correndo e cuspindo fogo" width="100%"></a>

Um dragãozinho vermelho e uma corrida sem fim. Pedra você pula, carcaça você queima — o salto é curto de propósito, baixo demais para passar por cima de uma carcaça, então nenhum dos dois botões é opcional.

Um arquivo HTML, sem dependência nenhuma, tudo desenhado em canvas. **[Código e como rodar](https://github.com/hellmangui/dronner)**

---

A maior parte do meu trabalho vive em repositórios privados — projetos de jogo e software de cliente.

Português, espanhol e inglês, de anos trabalhando entre quatro países. Pode falar em qualquer um.

---

*Interessado em sistemas de jogo, economias simuladas, IA que faz trabalho de verdade, e software para negócios que não podem parar.*
