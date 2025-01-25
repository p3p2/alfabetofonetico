body {
  margin-top: 40px;
  padding: 6px;
}

nav {
  margin-bottom: 40px;
}

section {
  margin-bottom: 40px;
}

ul {
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #333; */
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  color: rgba(0, 0, 0, 0.6);
  text-decoration: underline;
  text-underline-offset: 6px;
}



.table-container {
  text-align: center;
  padding: 10px;
  overflow: hidden;
  border-top: 3px double gainsboro;
  border-bottom: 3px double gainsboro;
  border-radius: 20px;
}

.texto-table {
  text-decoration: underline;
  text-decoration-style: dotted; /* Estilo del subrayado */
  text-underline-offset: 6px; /* Distancia del subrayado */
}

.flex-table {
  padding-left: 10px;
  float: left;
  padding-bottom: 20px;
}

.cell {
  font-size: 16px;
  padding: 3px 10px 3px 10px;
  border: 1px solid #000;
  margin: 2px 4px 2px 0;
  text-align: center;
  float: left;
}

textarea {
  cursor: pointer;
  width: 306px;
  height: 35px;
  overflow: hidden;
  resize: none;
}

textarea::placeholder {
  font-size: 20px;
}

button {
  font-size: 16px;
  margin: 8px;
  cursor: pointer;
}

.output {
  padding: 12px 60px 12px 60px;
  border-top: 3px double gainsboro;
  border-bottom: 3px double gainsboro;
  border-radius: 20px;
}

.font-20px {
  font-size: 20px;
}
.block {
  display: block;
}

.inline {
  display: inline;
}

.none {
  display: none;
}

footer {
  margin-top: 40px;
  padding: 10px;
  overflow: hidden;
  border-top: 3px double gainsboro;
  border-bottom: 3px double gainsboro;
  border-radius: 20px;
}

.creado {
  text-align: center;
}

.pointer {
  cursor: pointer;
}

.enlace-resultado {
  text-decoration: none;
  outline: none;
}

.resultado {
  display: none;
}

.resultado:focus {
  outline: none;
}

.lo {
  color: rgba(189, 187, 187, 0.774);
}

.margin-botton {
  margin-bottom: 6px;
}

.cookies {
  text-align: center;
  background-color: rgba(189, 187, 187, 0.774);;
  position: absolute;
  top: 0;
  width: 100%;
  height: 64px;
  margin-left: -15px;
}

.cookies p {
  margin-top: 0;
  padding-left: 20px;
}

.cookies button {
  margin-left: 20px;
}

@media (max-width: 600px) {
  
}
