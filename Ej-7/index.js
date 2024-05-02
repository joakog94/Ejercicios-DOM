const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const lista = document.createElement('ul')
for (const place of places) {
  const li = document.createElement('li')
  li.append(place)
  lista.append(li)
}

const div = document.querySelector("[data-function='printHere']")
div.append(lista)
