# <span style="color: hsl(160, 100%, 50%);"> Web-Birds 🐦 🐦 🐦 </span>

[GitHub](https://github.com/WanderleeDev)--[Linkedin](https://www.linkedin.com/in/wanderlee-max/)

Está en una pequeña web creada con el fin de poner en práctica los conocimientos de **HTML y CSS** además de implementar el uso de la metodología **BEM** (_Bloque__Elemento--modificador_)

1. [Para empezar](#para-empezar-🚀)
1. [Metodología BEM](#metodología-🅱eⓜ️)
1. [Organización](#organización-📙 )
1. [Conclusiones](#conclusiones-🎏)

## Para empezar 🚀 

Se deja el nombre del equipo y tecnologías utilizadas para el desarrollo del proyecto.

| **Editor de texto** | **Equipo**| **SO** | **Tecnologias** |
| :--: | :--: | :--: | :--: |
| Visal Studio Code | Laptop Hp Pavilion dm 1 | GNU Linux (Parrot Home Edition) | HTML <br> CSS <br> Git |

## Metodología 🅱EⓂ️

Puedes leer más de BEM en el siguiente enlace: [conoce más](https://getbem.com).

**HTML**

En este ejemplo utilizado en la web reutilizamos el elemento: `<a class="bird-fly"></a>`para reutilizarlo en otra parte del documento con el objetivo de reutilizar código.

~~~html
<div class="main-header">
  <a href="index.html" class="main-header__logo bird-fly" rel="noopener"></a>
    <h1 class="main-header__title">
      <a href="index.html" rel="noopener">Birds</a>
    </h1>
</div>
~~~


**CSS**

~~~css
.bird-fly {
  display: block;
  width: 6.25rem;
  height: 5rem;
  background: url(https://www.dropbox.com/s/w5yalknpsrjsr2w/parrot-1.png?raw=1) no-repeat;
  animation: fly-bird 0.7s steps(9) infinite;
  transition: 0.4s ease-in-out;
}
~~~

Resultado seria la imagen mostrada animada en 9 steps.
![recorte 1](https://www.dropbox.com/s/w5yalknpsrjsr2w/parrot-1.png?raw=1)

---

Ahora veamos algunas partes donde se reutilizan:

.bird-fly: pondra los estilos base, reutilizando código y aligerando la hoja de estilos.

.bird-fly--bird-silver: esta clase indica el modificador <span style="color: hsl(160, 100%, 50%);">_--bird-silver_</span>

**HTML**
~~~html
<div class="project__container-bird">
  <div class="bird-fly bird-fly--bird-silver"></div>
</div>
~~~

**CSS**
~~~css
.bird-fly--bird-silver{
  background-image: url(https://www.dropbox.com/s/hmv3ooo6707krnl/loro-gray.png?raw=1);
}
~~~

el resultado es igual que el anterior con la diferencia de color del ave.
![recorte 3](https://www.dropbox.com/s/ndzzq40tfm85uj5/loro-silver.png?raw=1)

---

Ahora veamos un tercer ejemplo con 2 modificadores utilizado en web-birds.

Centrémonos bird-fly, ya que en este ejemplo vemos que su contenedor también tiene una clase con modificador.

.bird-fly--rotateY-180--bird-green: esta clase muestra 2 modificadores, cada (--) indica un modificador.

**HTML**
~~~html
<div class="project__container-bird project__container-bird--keyframe-reverse">
  <div class="bird-fly bird-fly--rotateY-180--bird-green"></div>
</div>
~~~

**CSS**
~~~css
.bird-fly--rotateY-180--bird-green{
  transform: rotateY(180deg);
  background-image: url(https://www.dropbox.com/s/ir4jf7q6i4dlief/loro-green.png?raw=1);
}
~~~

Los modificadores deben ser descriptivos, en este caso índica un **rotateY en 180 deg** el segundo modificador se podría mejorar cambiándolo por **(--bg-image-loro-green)** ahora está más descriptivo indicando la propiedad ** background-image** y hasta el nombre del archivo **loro-green**

![recorte 4](https://www.dropbox.com/s/ir4jf7q6i4dlief/loro-green.png?raw=1)

## Organización 📙 

Se llevó la siguiente estructura para organizar el proyecto:

* index.html en la carpeta raíz.
* carpeta de aseets:
  
  - Imágenes en formato .png, pasados por optimizador de imágenes para reducir su peso.

    Posterior almacenamiento en **Dropbox**.

  - Únicamente _"faviparrot.ico"_ será enviado al repositorio.

* carpeta fonts:

  - fuente OpenSans en formato .ttf

* carpeta css:

  - normalize.css para resetear estilos, se hicieron pequeñas adiciones a los estilos base.

  - hoja de estilos fonts.css (_incluye la fuente: -OpenSans_)

  - hoja de estilos keyframes.css, animaciones separadas de la hoja de estilos principal.

  - hoja de estilos main.css, se importarán las anteriores hojas de estilos.

* carpeta scripts:

  - main.js 

* .gitignore en la carpeta raíz.

## Conclusiones 🎏 

Para concluir indicar que se puede mejorar la implementación de BEM, si bien este es mi primer acercamiento a esta metodología me pareció muy divertida e intuitiva, aunque todavía hay un camino que debo recorrer para dominarla y hacerla una extensión mas de uno mismo. 

En un próximo proyecto me gustaría combinarlo con el preprocesador **SASS**, con base a lo estudiado hacen un complemento perfecto el uno del otro.

[GitHub](https://github.com/WanderleeDev)

[Linkedin](https://www.linkedin.com/in/wanderlee-max/)

---