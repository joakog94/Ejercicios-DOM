//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement('div')

document.body.append(divVacio)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement('div')
const p = document.createElement('p')

divP.append(p)
document.body.append(divP)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divLoop = document.createElement('div')

for (let i = 1; i <= 6; i++) {
  const pLoop = document.createElement('p')
  divLoop.append(pLoop)
}

document.body.append(divLoop)
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamico = document.createElement('p')

p.textContent = 'Soy dinámico!'

document.body.append(pDinamico)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const myH2 = document.querySelector('.fn-insert-here')
myH2.textContent = 'Wubba Lubba dub dub'
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const listaApps = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.append(app)
  listaApps.append(li)
}

document.body.append(listaApps)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let eliminados = document.querySelectorAll('.fn-remove-me')
for (const eliminado of eliminados) {
  eliminado.remove()
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const divPrimero = document.querySelector('div')
divPrimero.insertAdjacentHTML('afterend', '<p>Voy en medio!</p>')

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const allDivs = document.querySelectorAll('div.fn-insert-here')

for (const div of allDivs) {
  const pDentro = document.createElement('p')
  pDentro.textContent = 'Voy dentro!'
  div.append(pDentro)
}
