# note_challenge

This is the repository of note app. 

## DB 
PostgreSQL deployed in ElephantSql

## Backend Technologies
<div style="display: flex; justify-content: center;">
  <div style="display: flex;">
    <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="Java" height="50" style="margin: 10px;">
    <img src="https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png" alt="Spring Boot" height="50" style="margin: 10px;">
  </div>
</div>

## Frontend Technologies 
<div style="display: flex; justify-content: center;">
  <div style="display: flex;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SRG5Nqn9cVLdAmQLHCpgjaJBRc2NzQ9Brw&usqp=CAU" alt="JavaScript" height="50" style="margin: 10px;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2jf3gjLM0ePHpbXmAHrhK2-weYYKMaldBA&usqp=CAU" alt="React" height="50" style="margin: 10px;">
    <img src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" alt="Tailwind" height="50" style="margin: 10px;">
  </div>
</div>

### How to execute

First, in order to execute you'll need these versions: 
- **npm: v10.2.4**
- **node: v20.11.1**
- **Java: 17**

### For Linux Envs
To execute with runnable file follow the next instructions:

1. Give permissions to execution .sh 
```bash 
  chmod +x executable.sh
```

2. Then, run the executable.sh: 
```bash 
  ./executable.sh
```

### Windows
In case you're on Windows OS, open two terminals, one for backend and other to frontend. 

1. First run backend application: 

```bash 
  cd backend/target
  java -jar backend-0.0.1-SNAPSHOT.jar
```

2. In the other terminal, run frontend application: 
```bash 
  cd frontend 
  npm install 
  npm start
```

In case of problems, check for versions detailed in this mk file. 

Thanks!
