Este desafío consiste en crear la simulación de una batalla entre un héroe y un villano, cada uno tendrá su respectivo turno, en este caso solo se podrá controlar al héroe, el cual tendrá la opción de atacar, usar una habilidad o comprar una habilidad en la tienda. El juego terminara cuando alguno de los dos personajes haya ganado.

Este desafío debe tener las clases que consideren adecuadas para su simulación, además de aplicar todos los conceptos de POO.

Notas:

Hay dos habilidades: Aumentar vida, que incrementa la salud del personaje en 50 puntos y la de duplicar Ataque que quedara permanentemente hasta el final.
También cada habilidad tiene un costo, la habilidad de Aumentar vida cuesta 40 créditos y la de duplicar ataque cuesta 20 créditos, al inicio solo se tiene un máximo de dos habilidades de cada una.
Cada acción del usuario cuesta como turno, es decir, atacar, usar habilidad (así tenga disponible o no) y la de comprar habilidad (así tenga los créditos suficientes o no), después de realizar cualquiera de estas, pasa el turno al villano.
Input Format

Primero se solicitará los datos del héroe (nombre, vida, ataque, créditos)
Después los datos del villano (nombre, vida, ataque)
Inicia el bucle principal del juego, cuando se ingrese 1 es para atacar, 2 para usar habilidad y 3 para comprar habilidad.
Si se escoge usar habilidad, se debe ingresar el nombre de la habilidad
Si se escoge comprar habilidad se pregunta el nombre de la habilidad
Constraints

Manejo de excepciones
Para acceder a la habilidad o para comprar en la tienda se recibe duplicar_ataque o aumentar_vida
Output Format

Se muestra el mensaje “Comienza la batalla”
Muestra el nivel de vida del héroe y el villano:

"Heroe: Vida= #vida" "Villano: Vida= #vida"

Después de cada ataque muestra cuando daño recibió y la vida restante:

Villano recibio # puntos de dano. Vida restante: # Héroe recibe # puntos de dano. Vida restante: #

Si se usa una habilidad se debe mostrar:

Heroe duplica su ataque. Ataque actual: # Heroe aumento su vida. Vida actual: #

Si ya no tiene mas habilidades disponibles debe mostrar:

No tienes mas habilidades disponibles, debes comprar. Perdiste el turno.

Si se compra una habilidad se debe mostrar Has comprado la habilidad #nombrehabilidad

Si no tiene los suficientes créditos: No tienes los suficientes creditos para comprar esta habilidad. Perdiste el turno.

Al final del juego se debe mostrar dependiendo el ganador:

El heroe ha sido derrotado. Has derrotado al villano.

Sample Input 0

Superman
200
20
60
Lex Luthor
180
20
1
1
2
aumentar_vida
1
2
duplicar_ataque
2
duplicar_ataque
2
duplicar_ataque
3
duplicar_ataque
1
2
duplicar_ataque
1
Sample Output 0

Comienza la batalla
Superman: Vida = 200
Lex Luthor: Vida = 180
Lex Luthor recibe 20 puntos de dano. Vida restante: 160
Superman recibe 20 puntos de dano. Vida restante: 180
Lex Luthor recibe 20 puntos de dano. Vida restante: 140
Superman recibe 20 puntos de dano. Vida restante: 160
Superman aumenta su vida. Vida actual: 210
Superman recibe 20 puntos de dano. Vida restante: 190
Lex Luthor recibe 20 puntos de dano. Vida restante: 120
Superman recibe 20 puntos de dano. Vida restante: 170
Superman duplica su ataque. Ataque actual: 40
Superman recibe 20 puntos de dano. Vida restante: 150
Superman duplica su ataque. Ataque actual: 80
Superman recibe 20 puntos de dano. Vida restante: 130
No tienes mas habilidades disponibles, debes comprar. Perdiste el turno.
Superman recibe 20 puntos de dano. Vida restante: 110
Has comprado la habilidad duplicar_ataque
Superman recibe 20 puntos de dano. Vida restante: 90
Lex Luthor recibe 80 puntos de dano. Vida restante: 40
Superman recibe 20 puntos de dano. Vida restante: 70
Superman duplica su ataque. Ataque actual: 160
Superman recibe 20 puntos de dano. Vida restante: 50
Lex Luthor recibe 160 puntos de dano. Vida restante: -120
Has derrotado al villano.
