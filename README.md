
## Uso/Test
### Crea un nuevo chatbot
#### POST
#### url: http://localhost:3000/api/chatbots
```
Ejemplo de la creación del json

{
    "nombre":"insertar nombre",
    "respuestas":[
        {
            "pregunta":"insertar pregunta",
            "respuesta":"insertar respuesta"
        }
    ]
}
```
```
Ejemplo del json creado

{
    "success": true,
    "message": "Chatbot creado correctamente",
    "data": {
        "nombre": "insertar nombre",
        "respuestas": [
            {
                "pregunta": "insertar pregunta",
                "respuesta": "insertar respuesta",
                "_id": "66042cc2591ffd8b625ac029"
            }
        ],
        "_id": "66042cc2591ffd8b625ac028",
        "__v": 0
    }
}
```

### Listar chatbots
#### GET
#### url: http://localhost:3000/api/chatbots


 ### Elimina un chatbot específico
 #### DELETE
 #### url: http://localhost:3000/api/chatbots/:id
```
Ejemplo del json eliminado
 {
    "success": true,
    "message": "Chatbot eliminado correctamente"
}
```
 ### Envía una pregunta a un chatbot, recibe una respuesta estática
 #### POST
 #### url: http://localhost:3000/api/chatbots/:id/ask

```
Ejemplo del json para mandar pregunta

{
   
    "respuestas":[
        {
            "pregunta":"insertar pregunta"
        }
    ]
}
```

```
Ejemplo del json al devolver respuesta

{
    "success": true,
    "message": "Respuesta encontrada ",
    "data": "insertar respuesta"
}
