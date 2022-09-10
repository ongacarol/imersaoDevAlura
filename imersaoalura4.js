//arquivos HTML e CSS no codepen

var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/0/00/Iron_Man_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/3/3a/Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/02ef2b75bf6c39dec48c636c8dc9d0e4252601800eec9e15c8a266fc46150b00._RI_V_TTW_.jpg"
  ];
  
  for (let i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  