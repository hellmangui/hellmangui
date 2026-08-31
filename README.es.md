[English](README.md) · [Português](README.pt-BR.md) · **Español**

# Guilherme — `hellmangui`

Construyo sistemas que tienen que seguir funcionando: un mundo de juego, la economía de un servidor, y software del que un negocio real depende cada noche.

Cuatro dominios, cuatro modos de fallo distintos. Un sistema de combate que se traba, una economía que se infla, una reserva que nunca llega a la cocina, un pago acreditado dos veces — he tenido que diseñar contra los cuatro.

---

## Lo que estoy construyendo

### 🎮 HEL — extraction-survival melee, Unreal Engine 5
Juego completo sobre **ACF** (Ascent Combat Framework), con locomoción **AGLS**, personajes **MetaHuman** y terreno en **Gaea**. Módulo del héroe, desplazamiento con vuelo y salto, ajuste de combate. 253 GB de proyecto, versionado, con su propia base de conocimiento sobre el framework de combate.

### 🍽️ Alvor Reservas — SaaS de reservas con IA
Hecho para **dos restaurantes en Alvor, Portugal**, con 30 años de operación, que reciben reservas por teléfono y Messenger de Facebook.

La restricción dura lo definió todo: *los restaurantes no pueden parar*. Por eso el sistema es **aditivo, nunca disruptivo** — teléfono y Messenger siguen funcionando, y cada canal llega a un panel único mediante un campo `canal`. El equipo lo adopta por etapas, y cada cambio es reversible.

`Next.js 16` · `React 19` · `Supabase` con row-level security para aislamiento por restaurante · capa de IA agnóstica de proveedor, para que la prueba de concepto no cueste nada y producción use el mejor modelo cambiando una variable.

### 🐎 Pantanal — servidor RedM con economía real
Granjas, genética y cría animal, cooperativas, casa de la moneda, talleres, industrias y exportación. Decenas de recursos en Lua más una **app complementaria en Next.js**, con paneles por módulo y tutoriales para el jugador.

### 💳 Panel SMM — pagos e integración con proveedor
Checkout con **MercadoPago** y autenticación Discord. El webhook vuelve a consultar el estado del pago en la fuente en lugar de confiar en el callback, protege contra doble acreditación, y mueve estado y saldo dentro de una única transacción.

---

## Cómo trabajo

**La decisión que se toma, se escribe.** Cada proyecto lleva un `DECISIONS.md` — contexto, decisión, motivo — y una constitución de principios innegociables. Cuando vuelvo seis meses después, sé *por qué*, no solo *qué*.

**La restricción va antes que la funcionalidad.** El sistema de Alvor parte de "el restaurante no puede parar", no de una lista de características.

**El costo es un problema de arquitectura.** La capa de IA es agnóstica de proveedor a propósito: modelos gratuitos en desarrollo, el mejor modelo en producción, a una variable de entorno de distancia.

---

## Stack

| | |
|---|---|
| **Juego** | Unreal Engine 5 · C++ · Blueprints · ACF · MetaHuman · Gaea |
| **Web** | TypeScript · Next.js · React · Tailwind · Prisma |
| **Datos** | PostgreSQL · Supabase · SQLite |
| **Servidores de juego** | Lua · RedM / FiveM · VORP |
| **Pagos y auth** | MercadoPago · NextAuth · Discord OAuth |

---

La mayor parte de mi trabajo vive en repositorios privados — proyectos de juego y software de cliente.

---

*Abierto a conversaciones sobre sistemas de juego, economías simuladas y software para negocios que no pueden permitirse estar caídos.*
