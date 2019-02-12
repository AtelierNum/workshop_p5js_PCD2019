# workshop_p5js_PCD2019
 



## Références uttiles : 

https://p5js.org/reference/

## Premier sketch


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

ellipse(x, y, l, h)
x = Coordonnée x du centre de l'ellipse (axe horizontale)
y = Coordonnée y du centre de l'ellipse (axe verticale)
l = largeur de l'ellipse
h = hauteur de l'ellipse
``` ellipse(12, 40, 20, 40)```
    
Le rectangle => rect(x, y, l, h)
    x = Coordonnée x du rectangle (axe horizontale)
    y = Coordonnée y du rectangle (axe verticale)
    l = largeur du rectangle
    h = hauteur du rectangle    
```rect(20, 50, 70, 20)
 
    
  Possibilité de rajouter des valeurs => rect(x, y, w, h, [hg], [hd], [bd], [bg])
    [hg] = forme de l'angle en haut à gauche soit "haut gauche = hg"
    [hd] = forme angle en haut à droite "haut droit = hd"
    [bd] = "bas droit = bd"
    [bg] = "bas gauche = bg"
 ```
 
 L'arc => arc(x, y, w, h, start, stop, [mode], [detail])
 ```  x = Abscisse de l'elipse de l'arc
    y = Ordonnée de l'ellipse de l'arc
    w = Largeur de l'ellipse de l'arc par défaut
    x = Hauteur de l'ellipse de l'arc par défaut
    start = angle de début de l'arc, spécifié en radian
    stop = angle de fin de l'arc, spécifié en radian 
    mode = Paramètre optionnel, permet de définir le chemin du dessin de l'arc : CHORD, OPEN, PIE 
 ```
 Le point => point(x, y)
  ```x = coordonné en abscisse
     y = coordonnée en ordonnée
  ```
 La ligne => line(xA, yAB, xB, yB)
 ```xA = coordonnée du point A en abscisse
    yA = coordonnée du point A en ordonnée
    xB = coordonnée du point B en abscisse
    yB = coordonnée du point B en ordonnée   
 ```
## Inspiration :

[Board pinterest](https://www.pinterest.fr/simonrenaultper/processing-community-days/)
