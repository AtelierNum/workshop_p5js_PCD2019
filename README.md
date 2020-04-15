# workshop_p5js_PCD2019
 
 Vous pouvez retrouver l'ensemble du code et de ces explications sur ce dépot [github](https://github.com/AtelierNum/workshop_p5js_PCD2019)

 P5JS est une librairie javaScript basée sur Processing qui a pour but de rendre le code et la programmation accessible aux artistes, designers, professeurs et débutants.
	P5 permet d'initier ce public "naïf" aux fondamentaux de la programmation grâce à toutes les fonctions de dessin apportées par la librairie.</br>
	En poussant plus loin, il est possible de faire de l’art numérique ou du design génératif, et cela sur le web ! Tout navigateur devient le terrain de jeu du programmeur ; et avec quelques librairies de plus liées à p5.js, il lui sera possible de jouer avec les objets HTML, la caméra, du son, de la typographie...

## Contenu
* [Un peu d'inspiration](#Un-peu-d'inspiration)
* [Réferences utiles](#References-utiles)
* [Definir la base du sketch](#Definir-la-base-du-sketch)
* [Les expressions conditionelles](#Les-expressions-conditionelles)
* [Comprendre la notion de canvas](#Comprendre-la-notion-de-canvas)
* [Dessiner une forme de base](#Dessiner-une-forme-de-base)
  * [L'ellipse](#L'ellipse)
  * [Le rectangle](#Le-rectangle)
  * [L'arc](#L'arc)
  * [Le point](#Le-point)
  * [La ligne](#La-ligne)
* [Couleurs](#Couleurs)
* [Un peu d'interaction](#Un-peu-d'interaction)
* [Exercice](#Exercice) - [**DEMO1**](https://ateliernum.github.io/workshop_p5js_PCD2019/exemples/birds1/) - [**DEMO2**](https://ateliernum.github.io/workshop_p5js_PCD2019/exemples/birds2/) 
* [Pour aller plus loin](#Pour-aller-plus-loin)



 
## Un peu d'inspiration
[Board pinterest](https://www.pinterest.fr/simonrenaultper/processing-community-days/)

[**home**](#Contenu)

## References utiles 
* [https://p5js.org/reference/](https://p5js.org/reference/)
* [https://www.openprocessing.org/browse/?q=vortex&time=anytime&type=all#](https://www.openprocessing.org/browse/?q=vortex&time=anytime&type=all#)
* [https://codepen.io/search/pens?q=P5JS&page=1&order=popularity&depth=everything&show_forks=on](https://codepen.io/search/pens?q=P5JS&page=1&order=popularity&depth=everything&show_forks=on)
* [https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA](https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
* [https://github.com/b2renger/p5js_codecreatif](https://github.com/b2renger/p5js_codecreatif)

[**home**](#Contenu)


## Definir la base du sketch
P5 utilise une fonction **setup()** qui s'exécute une seule fois au lancement du sketch, puis la fonction **draw()** prend le relais et est exécutée en boucle jusqu'à l'arrêt du programme.
Il existe aussi des fonctions évènementielles qui s'exécutent de manière momentannée lorsqu'une action est effectuée par l'utilisateur, comme un clic de souris ou une pression d'une touche de clavier.

```js


function setup(){
  size(800,800); // taille de la fenetre de dessin
  background(0); //couleur du fond
}

function draw(){
// le code à executer en boucle

  // si la souris est pressé executer ce code
  if (mouseIsPressed){
    stroke(255);
  }
}
```

[**home**](#Contenu)

## Les expressions conditionelles

Les expressions conditionelles servent à executer du code uniquement si certaines conditions sont remplies.  Par exemple le code si dessous permet de changer la couleur de stroke quand la souris est pressée.

```js
// si la souris est pressé executer ce code
if (mouseIsPressed){
  stroke(255);
}else{  // sinon
  stroke(O);
}


```
[**home**](#Contenu)

## Comprendre la notion de canvas

Pour dessiner, on peut utiliser une feuille avec p5.js. On peut alors définir sa taille grâce à la fonction **createCanvas()**. Pour avoir un canvas qui prend toute la taille de la fenêtre, on utilise comme paramètres **windowWidth,windowHeight**

Lorsqu'on place une forme dans le canvas, on la positionne par rapport à l'origine de celui-ci, qui est par défault orthonormée et située dans le coin en haut à gauche.
Mais il possible d'effectuer des modifications sur l'origine : 
* déplacer l'origine avec **translate()**
* faire une rotation autour de l'origine avec **rotate()**
Cependant, ces modifications sont valables pour tout le sketch ; ainsi tous les éléments dessinés à la suite de celles-ci seront affectées. Pour contenir ces modifications seulement sur une portion de code, on encadre cette dernière par les fonctions **push()** et **pop()**. 
```javascript
push() 
translate(200,100) // déplace l'origine de 200px vers la droite, et 100 vers le bas
rotate(PI/4) //exerce une rotation de 45° ( = Pi / 2) autour de l'origine qui a été déplacée
rect(0,0,50,50) //place un carré sur l'origine qui a été déplacée temporairement ; il sera incliné à 45°
pop() // l'origine du canvas a été réinitialisée à sa position d'origine (en haut à gauche de la fenêtre)
```

**A noter :**

**push()** et **pop()** réinitialisent également les changements de couleur,contour et opacité

[**home**](#Contenu)


## Dessiner une forme de base

Signification des lettres récurrentes 

x = coorodonnée x en abscisse

y = coordonnée y en ordonnée

l = largeur de la forme

h = hauteur de la forme

[**home**](#Contenu)

### L'ellipse

S'ecrit sous la forme : **ellipse(x, y, l, h)**

```js
 ellipse(12, 40, 20, 40)
 ```

[**home**](#Contenu)

### Le rectangle 

S'écrit sous la forme : **rect(x, y, l, h)**
    
```js
rect(20, 50, 70, 20)
```
    
  Possibilité de rajouter des valeurs = **rect(x, y, w, h, [hg], [hd], [bd], [bg])**
  
[hg] = forme de l'angle en haut à gauche soit "haut gauche = hg"
    
[hd] = forme angle en haut à droite "haut droit = hd"
    
[bd] = "bas droit = bd"
   
[bg] = "bas gauche = bg"
    
 ```js
 rect(20, 50, 70, 20, 5, 0, 10, 0)
 ```
Par défaut, le rectangle est définit à partir du coin superieur gauche. Il est possible de changer cette définition grâce à la commande **rectMode()** . Elle peut prendre comme valeur : **CORNER** soit le coin superieur gauche; **CENTER** dessiné par le centre.


[**home**](#Contenu)


### L'arc
 
S'ecrit sous la forme : **arc(x, y, w, h, start, stop, [mode])**
    
start = angle de début de l'arc, spécifié en radian
    
stop = angle de fin de l'arc, spécifié en radian 
  
mode = Paramètre optionnel, permet de définir le chemin du dessin de l'arc : CHORD, OPEN, PIE 

[image](/cercle_trigonometrique.png)
    
```js
arc(100, 100, 50, 70, HALF_PI, PI)
```

[**home**](#Contenu)

### Le point
 
S'ecrit sous la forme : **point(x, y)**
     
```js
point(100, 30)
```

[**home**](#Contenu)

  
### La ligne
 
 S'ecrit sous la forme : **line(xA, yAB, xB, yB)**
 
xA = coordonnée du point A en abscisse
 
yA = coordonnée du point A en ordonnée
 
xB = coordonnée du point B en abscisse
 
yB = coordonnée du point B en ordonnée 

 ```js
 line(50, 70, 100, 150)
 ```

[**home**](#Contenu)

## Couleurs

L'affichage de la couleur se fait grâce à un mélange de trois sources de lumière : rouge, vert et bleu (soit en anglais red, green, blue : RGB). Ces sources s'écrivent sous forme de nombres compris entre 0 et 255, le 0 correspondant au noir et 255 au blanc. Pour retrouver ou trouver une teinte, il est possible de s'aider de sites tel que https://www.w3schools.com/colors/colors_picker.asp. 

Lorsqu'on dessine une forme exemple une ellipse on peut mettre de la couleur qui s'écrit sous la forme : **fill()**
Il est aussi possible de changer la couleur du contour avec la fonction **stroke()**

``` js
function setup(){
createCanvas(windowWidth, windowHeight)
}

function draw(){
 ellipse(windowWidth/2, windowHeight/2, 100, 100); //création de notre ellipse centrée au milieu de la page
 fill(204, 255, 204); //couleur rgb de remplissage pour faire du vert
 stroke(0) // couleur correspondant au noir
}
``` 

[**home**](#Contenu)


## Un peu d'interaction 

Il est possible de faire interagire une forme avec la souris, le clavier, etc... Pour cela nous utiliserons les commandes **mouseX** et **mouseY**. Dans l'exemple si-joint nous allons animer un rond.

```js
function setup(){
    createCanvas(windowWidth, windowHeight) //création de la taille de la fenetre
}

function draw(){
    background (23, 123, 223) //amener un fond bleu 
    fill(0) //couleut de la forme noire
    ellipse(mouseX, mouseY, 50, 50) // création de l'ellipse
    //la valeur de x = mouseX : l'ellipse suivra la souris sur toutes les valeurs de x soit sur l'axe des abscisses
    //la valeur de y = mousseY : l'ellipse suivra la souris sur toutes les valeurs de y soit sur l'axe des ordonnées
}
```
Maintenant nous allons créer une interaction dans une zone définit grâce à la fonction **map()** qui permet de rentrer un intervalle de valeurs de départ et un intervalle valeur de fin. Soit l'exemple ci-contre fait interagire une ellipse dans un rectangle. Dans un premier temps, on peut creer le rectangle dans lequel on animera l'ellipse.

```js
function setup() {
 createCanvas(windowWidth, windowHeight) //création de notre fenetre
 noStroke() //enlever les bords
}

function draw() {
  background(204); //fond légèrement gris
  fill(13, 123,213) //rectangle de couleur bleu
  rect(300, 0, 200, 100) //Nous avons créer un rectangle dont le coin superieur se situe à 300px de l'axe des abscisses et 0px de l'axe des ordonnées
}
```
Puis nous allons creer l'ellipse qui suivra la souris sur l'axe des abscisses dans un cadre précis :

```js
function setup() {
 createCanvas(windowWidth, windowHeight)
 noStroke()
}

function draw() {
  background(204); 
  fill(13, 123,213) 
  rect(300, 0, 200, 100) 
  
  fill(255) //couleur pour l'ellipse
  ellipse(0, 0, 25, 25) //ellipse se situant à l'orgine du repère, et de diamètre 25px
}
```
Mainteant nous allons utiliser la fonction map qui va permettre l'animation. Elle s'écrit **map(valeur, début1, fin1, début2, fin2, [dans les limites]**)
Dans notre exemple, la valeur correspond à la souris et les valeurs de "début1, fin1" correspondront aux valeurs liées à la souris. Les valeurs de "début2, fin2" correspondront au rendu final.

```js
function setup() {
 createCanvas(windowWidth, windowHeight)
 noStroke()
}

function draw() {
  background(204);
  fill(13, 123,213)
  rect(300, 0, 200, 100)
    
 fill(255)
 map(mouseX, 90, windowWidth/2, 0, 200, true); 
 	//mousse x = L'ellipse bouge en fonction de la souris 
	// 90 = lorsque le souris se trouve à 90px du canvas, cela correspond au point d'origine
	// windowWidth/2 = lorsque la souris se situe à la moitié du canvas, cela correspond au point de fin 
	// le 0, le 200 et le true seront expliqués juste après
 ellipse(0, 0, 25, 25); 
}
```

Nous devons changer l'origine du repère de l'ellipse et le mettre au niveau du début du rectangle, soit à 300px, de même nous allons changer son ordonnée à 75px :

```js
function setup() {
 createCanvas(windowWidth, windowHeight)
 noStroke()
}

function draw() {
  background(204);
  fill(13, 123,213)
  rect(300, 0, 200, 100)
    
 fill(255)
 map(mouseX, 90, windowWidth/2, 0, 200, true); 
 	//0 = l'origine du repère de l'ellipse, l'ellipse se situe à 300px du canvas mais bien à 0px de ce nouveau repère
	//200 = la fin du nouveau repère de l'ellipse, soit 200px plus loin
	// true va permettre de pauser une limite. Ainsi si la souris sort de l'encadrement [90px; windowWidth/2] alors le point ne sotira pas
	
 ellipse(300, 75, 25, 25); 
}
```
Enfin pour finir, il faut lier cette fonction à l'ellipse :

```js

function setup() {
 createCanvas(windowWidth, windowHeight)
 noStroke()
}

function draw() {
  background(204);
  fill(13, 123,213)
  rect(300, 0, 200, 100)
    
 fill(255)
 let x1 = map(mouseX, 90, windowWidth/2, 0, 200, true); // Cette fonction s'appelle let x1
 ellipse(300+x1, 0, 25, 25); // Nous voulons que cette fonction joue sur la valeur x de l'ellipse, c'est pour cela qu'elle va s'additionner au x de l'ellipse 
}
```

[**home**](#Contenu)
`
## Exercice

Créer son propre animal, oiseau par exemple et si vous avez le temps, rendre une partie de son corps interactif avec la souris, par exemple son oeil.


[**home**](#Contenu)


## Pour aller plus loin
* [ressource en français : b2renger recoules](https://github.com/b2renger/Introduction_p5js)
* [ressource anglais : Daniel Shiffman](https://shiffman.net/)
* [ressource video de Shiffman](https://www.youtube.com/user/shiffman)
* [https://codepen.io/](https://codepen.io/)
* [https://www.openprocessing.org/](https://www.openprocessing.org/)


[**home**](#Contenu)

