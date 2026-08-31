[English](README.md) · **Português** · [Español](README.es.md)

# Guilherme — `hellmangui`

Construo sistemas que precisam continuar rodando: um mundo de jogo, a economia de um servidor, e software do qual um negócio real depende toda noite.

Quatro domínios, quatro modos de falha diferentes. Um sistema de combate que engasga, uma economia que infla, uma reserva que nunca chega à cozinha, um pagamento creditado duas vezes — tive que projetar contra os quatro.

---

## O que estou construindo

### 🎮 HEL — extraction-survival melee, Unreal Engine 5
Jogo completo sobre o **ACF** (Ascent Combat Framework), com locomoção **AGLS**, personagens **MetaHuman** e terreno em **Gaea**. Módulo do herói, travessia com voo e salto, ajuste de combate. 253 GB de projeto, versionado, com base de conhecimento própria sobre o framework de combate.

### 🍽️ Alvor Reservas — SaaS de reservas com IA
Feito para **dois restaurantes em Alvor, Portugal**, com 30 anos de operação, recebendo reservas por telefone e Messenger do Facebook.

A restrição difícil moldou tudo: *os restaurantes não podem parar*. Então o sistema é **aditivo, nunca disruptivo** — telefone e Messenger continuam funcionando, e todo canal cai num painel único através de um campo `canal`. A equipe adota em etapas, e cada mudança é reversível.

`Next.js 16` · `React 19` · `Supabase` com row-level security para isolamento por restaurante · camada de IA agnóstica de provedor, para que a prova de conceito não custe nada e a produção use o melhor modelo trocando uma variável.

### 🐎 Pantanal — servidor RedM com economia de verdade
Fazendas, genética e procriação animal, cooperativas, casa da moeda, oficinas, indústrias e exportação. Dezenas de recursos em Lua mais um **app companheiro em Next.js**, com dashboards por módulo e tutoriais para o jogador.

### 💳 Painel SMM — pagamentos e integração com provedor
Checkout **MercadoPago** com autenticação Discord. O webhook reconsulta o status do pagamento na fonte em vez de confiar no callback, protege contra crédito duplicado, e move status e saldo dentro de uma única transação.

---

## Como trabalho

**Decisão que se toma, se escreve.** Todo projeto carrega um `DECISIONS.md` — contexto, decisão, motivo — e uma constituição de princípios inegociáveis. Quando volto seis meses depois, eu sei *por quê*, não só *o quê*.

**Restrição vem antes de funcionalidade.** O sistema do Alvor parte de "o restaurante não pode parar", não de uma lista de features.

**Custo é problema de arquitetura.** A camada de IA é agnóstica de provedor de propósito: modelos gratuitos no desenvolvimento, o melhor modelo em produção, a uma variável de ambiente de distância.

---

## Stack

| | |
|---|---|
| **Jogo** | Unreal Engine 5 · C++ · Blueprints · ACF · MetaHuman · Gaea |
| **Web** | TypeScript · Next.js · React · Tailwind · Prisma |
| **Dados** | PostgreSQL · Supabase · SQLite |
| **Servidores de jogo** | Lua · RedM / FiveM · VORP |
| **Pagamentos e auth** | MercadoPago · NextAuth · Discord OAuth |

---

A maior parte do meu trabalho vive em repositórios privados — projetos de jogo e software de cliente.

---

*Aberto a conversas sobre sistemas de jogo, economias simuladas e software para negócios que não podem ficar fora do ar.*
