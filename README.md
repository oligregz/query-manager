# Query Manager API

## 💡 Description

This project consists of a strongly typed application focused on good programming practices.
<br>

## 📜 Recommendations

Here we have all of this application's dependencies managed by npm.

- Typescript
- Node.js
- Serverless framework
- Jest
- Aws-lambda
- Eslint

<br>

## ✍️ Application and Intent

The application consists of some CRUD *Endpoints* (*Create and Read*), which have the following entity:

> Doctors(Medicos in pt-br)

Doctors are contacted with easy information so they can make an appointment.

> Apponitments(Agendamentos in pt-br)

Appointments are recorded if they do not exist and if the doctor has the appointment schedule available.

<br>

## 👀 Attention 👀
- Make sure to run the installation and execution commands correctly for the application to work properly.
- The api runs on port 3000.
- Avoid running tests while the API is running.
- This is an application without using a database, the data is stored in JSON files within each entity's module, they are accessed and updated in a controlled manner throughout the API interaction flow.
- If you notice any strange behavior in the data, kill the api process, reset the data and start it again.

<br>

## 🌐 Flow application

- https://youtu.be/gM1aOtipfNQ

<br>


## 📖 Presentation route

- http://localhost:3000/hello

<br>

## 🔍 ESLint

Run lint:
```
npm run lint
```

<br>

## ✅ Tests ❌

Unit tests:
```
npm run test
```

<br>

## 💈 Running API

Clone and access repository:

```
git clone git@github.com:oligregz/query-manager.git
```

```
cd query-manager
```

Install dependencies:

```
npm install
```

* If the installation hangs, use 'Ctr + C' and run the command again:
```
npm install
```

Run api:
```
npm run dev
```
<br><br>

## 🏁 Routes:

### List doctors:
- [GET] - http://localhost:3000/agendas

##### Resposnse:
```
> statusCode: 200(OK)

{
  "medicos": [
  {
      "id": 1,
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologista",
      "horarios_disponiveis": [
        "2024-10-05 09:00",
        "2024-10-05 10:00",
        "2024-10-05 11:00"
      ]
    }
  ]
}
```

<br>

### Create appointment:
- [POST] - http://localhost:3000/agendamentos

##### Body Example:

```
{
  "medico_id": 1,
  "paciente_nome": "example",
  "data_horario": "2024-10-05 10:00"
}
```

##### Resposnse:

* Case in which the doctor has available time in his schedule or the same appointment does not exist.

```
> statusCode: 201(CREATED)

{
  "menssagem": "Agendamento realizado com sucesso",
  "agendamento": {
    "id": 6,
    "medico_id": 1,
    "paciente_nome": "teste2",
    "data_horario": "2024-10-05 10:00"
  }
}
```

* Case in which the doctor does not have an available time in his schedule or the same schedule already exists and shows available times.

```
> statusCode: 400(Bad Request)

{
  "menssagem": "Horário não disponível",
  "horarios_disponiveis": [
    "2024-10-05 09:00",
    "2024-10-05 11:00"
  ]
}
```

<br>

## 🌀 Reset all data

The data is reset every time the API is started or when tests are run automatically, but if you want to reset it manually, run:

```
npm run data:reset
```

<br>

## 🎉 EXTRAS:

The api has more routes implemented at the development level for table testing and performing some validations.

- [GET] - http://localhost:3000/agendamentos
- [DELET] - http://localhost:3000/agendas/5
