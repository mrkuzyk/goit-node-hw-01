# ДЗ: Модуль 1. Основи Node.js

### Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
Команда:
```
node index.js --action="list"
```
Результат виконання:

![result1](https://raw.githubusercontent.com/mrkuzyk/goit-node-hw-01/main/img/result1.png) 
___

### Отримуємо контакт по id:
Команда:
```
node index.js --action="get" --id=Xjw8I
```
Результат виконання:

![result1](https://raw.githubusercontent.com/mrkuzyk/goit-node-hw-01/main/img/result2.png) 
___

### Добавляємо контакт:
Команда:
```
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
```
Результат виконання:

![result1](https://raw.githubusercontent.com/mrkuzyk/goit-node-hw-01/main/img/results3.png) 

Список всіх контактів після додавання:
![result1](https://raw.githubusercontent.com/mrkuzyk/goit-node-hw-01/main/img/result3-list.png) 
___

### Видаляємо контакт:
Команда:
```
node index.js --action="remove" --id="Xjw8I"
```
Результат виконання:

![result1](https://raw.githubusercontent.com/mrkuzyk/goit-node-hw-01/main/img/result4.png) 

Список всіх контактів після видалення:
![result1](https://raw.githubusercontent.com/mrkuzyk/goit-node-hw-01/main/img/result4-list.png)