# workshop_p5js_PCD2019
 
 P5JS est une librairie javaScript basée sur Processing qui a pour but de rendre le code et la programmation accessible aux artistes, designers, professeurs et débutants.
	P5 permet d'initier ce public "naïf" aux fondamentaux de la programmation grâce à toutes les fonctions de dessin apportées par la librairie.</br>
	En poussant plus loin, il est possible de faire de l’art numérique ou du design génératif, et cela sur le web ! Tout navigateur devient le terrain de jeu du programmeur ; et avec quelques librairies de plus liées à p5.js, il lui sera possible de jouer avec les objets HTML, la caméra, du son, de la typographie...

 
## Un peu d'inspiration :
[Board pinterest](https://www.pinterest.fr/simonrenaultper/processing-community-days/)

## Références utiles : 
* [https://p5js.org/reference/](https://p5js.org/reference/)
* [https://www.openprocessing.org/browse/?q=vortex&time=anytime&type=all#](https://www.openprocessing.org/browse/?q=vortex&time=anytime&type=all#)
* [https://codepen.io/search/pens?q=P5JS&page=1&order=popularity&depth=everything&show_forks=on](https://codepen.io/search/pens?q=P5JS&page=1&order=popularity&depth=everything&show_forks=on)
* [https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA](https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
* [https://github.com/b2renger/p5js_codecreatif](https://github.com/b2renger/p5js_codecreatif)


### Définir la base du sketch
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
## Les expressions conditionelles ( if, else )

Les expressions conditionelles servent à executer du code uniquement si certaines conditions sont remplies.  Par exemple le code si dessous permet de changer la couleur de stroke quand la souris est pressée.

```js
// si la souris est pressé executer ce code
if (mouseIsPressed){
  stroke(255);
}else{  // sinon
  stroke(O);
}


```

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
#### A noter : 
** push() et pop()** réinitialisent également les changements de couleur,contour et opacité

## Dessiner une forme de base

Signification des lettres récurrentes 

x = coorodonnée x en abscisse

y = coordonnée y en ordonnée

l = largeur de la forme

h = hauteur de la forme

### L'ellipse

S'ecrit sous la forme : **ellipse(x, y, l, h)**

```js
 ellipse(12, 40, 20, 40)
 ```
    
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

### L'arc
 
S'ecrit sous la forme : **arc(x, y, w, h, start, stop, [mode])**
    
start = angle de début de l'arc, spécifié en radian
    
stop = angle de fin de l'arc, spécifié en radian 
  
mode = Paramètre optionnel, permet de définir le chemin du dessin de l'arc : CHORD, OPEN, PIE 

[image](/cercle_trigonometrique.png)
    
```js
arc(100, 100, 50, 70, HALF_PI, PI)
```
 
### Le point
 
S'ecrit sous la forme : **point(x, y)**
     
```js
point(100, 30)
```
  
### La ligne
 
 S'ecrit sous la forme : **line(xA, yAB, xB, yB)**
 
xA = coordonnée du point A en abscisse
 
yA = coordonnée du point A en ordonnée
 
xB = coordonnée du point B en abscisse
 
yB = coordonnée du point B en ordonnée 

 ```js
 line(50, 70, 100, 150)
 ```
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

## Pour aller plus loin
* [ressource en français : b2renger recoules](https://github.com/b2renger/Introduction_p5js)
* [ressource anglais : Daniel Shiffman] (https://shiffman.net/)
* [ressource video de Shiffman](https://www.youtube.com/user/shiffman)
* [https://codepen.io/](https://codepen.io/)
* [https://www.openprocessing.org/](https://www.openprocessing.org/)
