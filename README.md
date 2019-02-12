# workshop_p5js_PCD2019
 



## Useful liks : 



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


## Inspiration :

[Board pinterest](https://www.pinterest.fr/simonrenaultper/processing-community-days/)
