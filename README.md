# Pip Stops Queue Project

---

## About the project:

The project show for the the snapchat of the pit stop queue:

- Who car was in and ending
- Which cars left
- Who car is the next
- Send a redio message for the next car
- Find a car by number car

---

## How to run this app:

```bash
node main.js / npm start
```

---

## folders:

```text
pit-stop/
|__main.js -> runApp()
|__config.js -> משתנים קבועים
|__README.md -> About the project
|__package.json
|
|__/servieces/
|____file.service.js -> readData() & saveData()
|____fetchApi.service.js -> readAPI()
|____raceCrud.service.js -> showBordPits() & carsWaiting() & getNextCar() & searchByNumCar()
|
|__/data/
|____raceData.json -> Data from API
```

---

## What will we see when we run this:

1. Start Race...
2. Lodaing data
3. Borad of pip stop
4. Radio message for the next car
5. Search car by number
6. Endding process
