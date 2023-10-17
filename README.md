### Giggl

[Click here!](https://giggl-delta.vercel.app/)

## Description
Discover laughs with giggl's comedy search engine, showcasing renowned comedians, their latest podcasts, and upcoming tour dates.


- Technologies used: Django, Python, Vite/Vue

- [Backend](https://giggl-backend-d1dba8cb813e.herokuapp.com/)

- [Trello Board](https://trello.com/invite/b/xYyOnwr0/ATTI8f7dcb8c3ad62cb3b70f0af151eec366A63335A2/giggl)

## Models 
### Bits
- Name of Comedian
- Description

### Comedians
- Name

### Podcasts
- Name
- Comedians

### Tour Dates
- Comedian
- Name of Tour
- Dates
- Link to Dates

| Plan                                              | Task                        |
|---------------------------------------------------|-----------------------------|
| Create model for comedian, podcast, and tour dates | Backend in Django/Heroku          |
| Set up UI                                         | Frontend in Vue/Vercel




## Screenshots
_Index_
_Create_
_Show_        

## UI Mock Up
_Index_
![Index](/giggl/readmepngs/index.png)
 
_Create/Update_
![Create](/giggl/readmepngs/create.png)

# Endpoints
## Bits
| Method | Route                 | Description                 |
|--------|-----------------------|-----------------------------|
| GET    | /api/bits             | Retrieve all bits           |
| POST   | /api/bits             | Add a new bit               |
| GET    | /api/bits/:id         | Retrieve a bit by ID        |
| PUT    | /api/bits/:id         | Update a bit by ID          |
| DELETE | /api/bits/:id         | Delete a bit by ID          |
| GET    | /api/bits/comedian/:id| Retrieve bits by comedian ID|

## Comedians
| Method | Route                 | Description                |
|--------|-----------------------|----------------------------|
| GET    | /api/comedians        | Retrieve all comedians     |
| POST   | /api/comedians        | Add a new comedian         |
| GET    | /api/comedians/:id    | Retrieve a comedian by ID  |

## Podcasts
| Method | Route                 | Description                |
|--------|-----------------------|----------------------------|
| GET    | /api/podcasts         | Retrieve all podcasts      |
| POST   | /api/podcasts         | Add a new podcast          |
| GET    | /api/podcasts/:id     | Retrieve a podcast by ID   |

## Tour Dates
| Method | Route                 | Description                |
|--------|-----------------------|----------------------------|
| GET    | /api/tour-dates       | Retrieve all tour dates    |
| POST   | /api/tour-dates       | Add a new tour date        |
| GET    | /api/tour-dates/:id   | Retrieve a tour date by ID |

## Understanding Vue
![Vite/Vue](/giggl/readmepngs/filestructure.png)
    
![React/Vue](/giggl/readmepngs/vdiagram.png)

| Feature               | Options API                         | Composition API                        |
|-----------------------|------------------------------------|---------------------------------------|
| **Reactivity**        | `data()`, `computed`, `watch`      | `ref()`, `reactive()`, `computed()`, `watch()` |
| **Lifecycle Hooks**   | `created()`, `mounted()` etc.      | `onMounted()`, `onCreated()` etc.     |
| **Methods**           | Inside the `methods` object        | Just functions inside `setup()`       |
| **Props**             | `props: []` or `props: {}`         | `props` in `setup(props)`             |
| **Template Binding**  | Use direct option names            | Return from `setup()` to make available in template |
| **Code Organization** | Split by option type               | Organize by feature inside `setup()`  |

## Vue: Options API vs Composition API

### **Reactivity**
- **Options API**:
  - Reactive properties: `data()`
  - Computed and Watchers: `computed`, `watch`
  
- **Composition API**:
  - Reactive references: `ref()`
  - Reactive objects: `reactive()`
  - Computed and Watchers: Used within `setup()`

### **Lifecycle Hooks**
- **Options API**:
  - Example hooks: `created()`, `mounted()`
  
- **Composition API**:
  - Example hooks: `onCreated()`, `onMounted()`

### **Methods**
- **Options API**:
  - Defined within: `methods` object
  
- **Composition API**:
  - Defined within: `setup()` function

### **Props**
- **Options API**:
  - Declaration: `props: []` or `props: {}`
  
- **Composition API**:
  - Used within: `setup(props)`

### **Template Binding**
- **Options API**:
  - Directly use option names
  
- **Composition API**:
  - Must return from `setup()` for template access

### **Code Organization**
- **Options API**:
  - Organized by option type
## ERD 
```mermaid
erDiagram
    BITS ||--|| COMEDIANS : performed_by
    BITS ||--|{ PODCASTS : features_in
    BITS ||--|{ TOUR-DATES : part_of
    BITS {
        int id
        string description
        int comedianId FK
    }
    COMEDIANS {
        int id
        string name
    }
    PODCASTS {
        int id
        string comedians
        string name_of_podcast
    }
    TOUR-DATES {
        int id
        string name_of_tour
        date dates
        string link_to_dates
    }



