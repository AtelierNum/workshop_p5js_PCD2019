# workshop_p5js_PCD2019
 
## Explication
Processing est un logiciel de code créatif.
C’est un langage de programmation inspiré du java qui est totalement dédié à l’art numérique.
Son but est de rendre le code accessible aux artistes, designers et aux personnes qui s’y intéressent en général.
Cela permet de faire de l'électronique art, “visual design”, dans le but d’initier les personnes qui ne “codent” pas, aux fondamentaux de la programmation.
Dans la même lignée que processing, P5JS est un langage de code créatif, mais cette fois-ci inspiré de Javascript.
Dans les deux logiciels il y a beaucoup de fonctions de dessin, sur leurs sites respectifs on peut trouver des pages avec références, des librairies et quelques tutos…


## Références utiles : 
https://p5js.org/reference/
https://www.openprocessing.org/browse/?q=vortex&time=anytime&type=all#
https://codepen.io/search/pens?q=P5JS&page=1&order=popularity&depth=everything&show_forks=on
https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
https://github.com/b2renger/p5js_codecreatif




### Définir la base du sketch
P5 utilise une fonction **setup** qui s'exécute une seule fois au lancement du sketch, puis la fonction **draw** prend le relais et est exécutée en boucle jusqu'à l'arrêt du programme.
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
## Les expressions conditionels ( if, else )

Les expressions conditionelles servent à executer du code uniquement si certaines conditions sont remplies.  Par exemple le code si dessous permet de changer la couleur de stroke quand la souris est pressé.

```js
// si la souris est pressé executer ce code
if (mouseIsPressed){
  stroke(255);
}else{  // sinon
  stroke(O);
}


```

## Comprendre le repère d'une page

## Dessiner une forme de base


### L'ellipse

S'ecrit sous la forme : ellipse(x, y, l, h)

x = Coordonnée x du centre de l'ellipse (axe horizontale)

y = Coordonnée y du centre de l'ellipse (axe verticale)

l = largeur de l'ellipse

h = hauteur de l'ellipse

```js
 ellipse(12, 40, 20, 40)
 ```
    
### Le rectangle 

S'écrit sous la form : rect(x, y, l, h)

x = Coordonnée x du rectangle (axe horizontale)
    
y = Coordonnée y du rectangle (axe verticale)
    
l = largeur du rectangle
    
h = hauteur du rectangle 
    
```js
rect(20, 50, 70, 20)
```
    
  Possibilité de rajouter des valeurs = rect(x, y, w, h, [hg], [hd], [bd], [bg])
  
[hg] = forme de l'angle en haut à gauche soit "haut gauche = hg"
    
[hd] = forme angle en haut à droite "haut droit = hd"
    
[bd] = "bas droit = bd"
   
[bg] = "bas gauche = bg"
    
 ```js
 rect(20, 50, 70, 20, 5, 0, 10, 0)
 ```
 
### L'arc
 
 S'ecrit sous la forme : arc(x, y, w, h, start, stop, [mode], [detail])
 
x = Abscisse de l'elipse de l'arc
    
y = Ordonnée de l'ellipse de l'arc
    
w = Largeur de l'ellipse de l'arc par défaut
    
x = Hauteur de l'ellipse de l'arc par défaut
    
start = angle de début de l'arc, spécifié en radian
    
stop = angle de fin de l'arc, spécifié en radian 
  
mode = Paramètre optionnel, permet de définir le chemin du dessin de l'arc : CHORD, OPEN, PIE 
    
```js
arc(100, 100, 50, 70, HALF_PI, PI)
```
 
### Le point
 
 S'ecrit sous la forme : point(x, y)
 
x = coordonné en abscisse
   
y = coordonnée en ordonnée
     
```js
point(100, 30)
```
  
### La ligne
 
 S'ecrit sous la forme : line(xA, yAB, xB, yB)
 
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

``` js
function setup(){
createCanvas(windowWidth, windowHeight)
}

function draw(){
 ellipse(windowWidth, windowHeight, 100, 100); //création de notre ellipse
 fill(204, 255, 204); //couleur rgb pour faire du vert
}
``` 

## 
## Inspiration :

[Board pinterest](https://www.pinterest.fr/simonrenaultper/processing-community-days/)
