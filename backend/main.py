from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permite o HTML acessar a API (muito importante)
app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)

# Dados do portfolio (simulando banco de dados)
perfil = {

"nome":"Gustavo Saugo",

"cargo":"Programador de Letrinha Coloridas",

"sobre":"Estudante de Engenharia da Computação.",

"skills":[

"Python",

"HTML",

"CSS",

"JavaScript",

"FastAPI"

],

"experiencia":[

{

"empresa":"Ceeb Vision",

"cargo":"Suporte técnico em sistemas de rastreamento veicular",

"ano":"2024 - 2026"

},

{

"empresa":"T.I",

"cargo":"Montagem de computadores e Notebooks",

"ano":"2020 - 2024"

}

],

"projetos":[

"Aero Modelo em Impressora 3D",

"Portiforio Web",

"Bot Discord"

]

}

# Rota da API
@app.get("/api/perfil")

def get_perfil():

    return perfil