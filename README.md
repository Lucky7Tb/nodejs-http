# About Project

Is a simple rest api todolist using pure Node Js Http server.

## Routes

| Path                 | Method   | Name           |Data                      |
|----------------------|:--------:|:--------------:|--------------------------|
|http://localhost:3000/|GET       |Get all todolist|													|
|http://localhost:3000/|POST      |Create todolist |{todo: string}            |
|http://localhost:3000/|PUT       |Update todolist |{id: number, todo: string}|
|http://localhost:3000/|DELETE    |Delete todolist |{id: number}              |