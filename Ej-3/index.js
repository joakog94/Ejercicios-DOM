//3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const listaPaises = document.createElement('ul')
for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  listaPaises.append(li)
}

document.body.append(listaPaises)
//3.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminado = document.querySelector('.fn-remove-me')
eliminado.remove()

//3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const listaCars = document.createElement('ul')
const div = document.querySelector("[data-function='printHere']")
for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  listaCars.append(li)
}

div.append(listaCars)
//3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const paises = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const pais of paises) {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  h4.textContent = pais.title
  img.setAttribute('src', pais.imgUrl)
  div.append(h4)
  div.append(img)
  document.body.append(div)
}
//3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement('button')
button.textContent = 'Eliminar el elemento'

function Eliminar() {
  const divEliminar = document.querySelectorAll('div')
  divEliminar[divEliminar.length - 1].remove()
}

button.addEventListener('click', Eliminar)
document.body.append(button)
//3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const divEliminar2 = document.querySelectorAll('div')

for (const div of divEliminar2) {
  const button = document.createElement('button')
  button.textContent = 'Eliminar'
  button.addEventListener('click', (e) => e.target.parentElement.remove())
  div.appendChild(button)
}
