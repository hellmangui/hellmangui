[English](README.md) · [Português](README.pt-BR.md) · **Español**

# Guilherme — `hellmangui`

Trece años haciendo cosas para que la gente mire. Tres haciendo cosas para que la gente use.

La mayor parte de mi carrera fue diseño gráfico — motion, branding y campaña política, trabajando entre Brasil, Paraguay, España y Portugal. Hace tres años empecé a programar, sobre todo porque la IA me dio ganas de construir la cosa en vez de entregar el layout y cruzar los dedos.

Sigo aprendiendo. Esa parte no se termina.

---

## Lo que estoy construyendo

### 🎮 HEL — extraction-survival melee, Unreal Engine 5
Sobre **ACF** (Ascent Combat Framework), con locomoción **AGLS**, personajes **MetaHuman** y terreno en **Gaea**. Módulo del héroe, desplazamiento con vuelo y salto, ajuste de combate. 253 GB de proyecto, con su propia base de conocimiento documentada.

### 🍽️ Alvor Reservas — SaaS de reservas con IA
Para **dos restaurantes en Alvor, Portugal**, con treinta años de historia, que todavía reciben reservas por teléfono y Messenger.

Una restricción lo definió todo: *los restaurantes no pueden parar*. Así que nada se reemplaza. Teléfono y Messenger siguen funcionando, y cada canal llega a un panel único por un campo `canal`. El equipo lo adopta por etapas, y todo se puede deshacer.

`Next.js` · `Supabase` con row-level security · una capa de IA agnóstica de proveedor, para probar sin costo y correr el mejor modelo en producción cambiando una variable.

### 🐎 Pantanal — servidor RedM con una economía que funciona
Granjas, genética y cría animal, cooperativas, casa de la moneda, talleres, industrias, exportación. Decenas de recursos en Lua y una **app complementaria en Next.js**, con paneles y guías para el jugador.

### 💳 Panel SMM — pagos e integración con proveedor
Checkout **MercadoPago**, autenticación Discord. El webhook verifica el estado en la fuente en vez de confiar en el callback, se niega a acreditar dos veces, y mueve estado y saldo juntos o no mueve nada.

---

## De dónde vengo

Trece años de diseño me enseñaron cosas que el código no: que la primera idea rara vez es la buena, que alguien va a mirar esto ocho segundos y decidir, y que entregar tarde también es un bug.

**Photoshop · Illustrator · After Effects · DaVinci Resolve · Blender · Cinema 4D**

La campaña política fue buen entrenamiento para el software. Plazo que no se mueve, consecuencias reales, y un equipo que necesita el archivo ahora — no cuando exista la versión perfecta.

---

## Cómo trabajo

**La decisión que se toma, se escribe.** Cada proyecto tiene un `DECISIONS.md` — contexto, decisión, motivo. Seis meses después sé *por qué*, no solo *qué*. Menos disciplina que desconfianza de mi propia memoria.

**La restricción antes que la funcionalidad.** Alvor partió de "el restaurante no puede parar", no de una lista de características. La restricción escribió buena parte de la arquitectura sola.

**El costo es un problema de arquitectura.** Modelos gratuitos mientras se construye, el mejor en producción, a una variable de entorno de distancia.

---

## Stack

| | |
|---|---|
| **Juego** | Unreal Engine 5 · C++ · Blueprints · ACF · MetaHuman · Gaea |
| **Web** | TypeScript · Next.js · React · Tailwind · Prisma |
| **Datos** | PostgreSQL · Supabase · SQLite |
| **Servidores de juego** | Lua · RedM / FiveM · VORP |
| **Pagos y auth** | MercadoPago · NextAuth · Discord OAuth |
| **Diseño** | Photoshop · Illustrator · After Effects · DaVinci · Blender · C4D |

---

La mayor parte de mi trabajo vive en repositorios privados — proyectos de juego y software de cliente.

Portugués, español e inglés, de años trabajando entre cuatro países. Podemos hablar en cualquiera.

---

*Me interesan los sistemas de juego, las economías simuladas, la IA que hace trabajo de verdad, y el software para negocios que no pueden parar.*
