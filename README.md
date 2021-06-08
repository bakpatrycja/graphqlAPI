# GraphQL example api 
#### Technical stack
NodeJs, GraphQL, Apollo Server, Sequelize 
### Scripts

Please remove example from example.env (filename)

- npm install
- npm start

Run application. Please edit .env file (remove example)

### Docker
- npm install 
- docker build -t todo-api .
- docker run todo-api

If container doesn't runs by command please go to Docker application and run container manually.

Query and mutation example
Go to http://localhost:4000/


### Record structure

```
 type Task {
    id: Int!
    title: String!
    parent: Int!
    task: Task
  }
```

  id = primary key - required
  title: string - required
  parent - number - required, it's a foreign which points to the same table. 
  task - reference to parent record, not required 


### Query task
```
query {
  tasks {
    title
  }
}
```
should return list of all tasks

Data example :
```
{
  "data": {
    "tasks": [
      {
        "title": "My first task"
      },
      {
        "title": "My second task"
      },
      {
        "title": "My third task"
      },
      {
        "title": "5 task"
      },
      {
        "title": "6 task"
      }
    ]
  }
}
```

### Query tasks 
```
query {
  task(id: 3) {
    title 
    parent
    task {
      title
    }
  }
}
```
Where parameter id is primary key. 

Should return first nested record.
```
{
  "data": {
    "task": {
      "title": "My third task",
      "parent": 1,
      "task": {
        "title": "My first task"
      }
    }
  }
}
```

### Mutation createTask
```
mutation {
  createTask(id: 10, title: "Lazy bee", parent: 1) {
    id
  }
}
```

Where id is a primary key, title is a string and parent is a number.

Should return new created record with data of your choice:
```
{
  "data": {
    "createTask": {
      "id": 10
    }
  }
}
```