## src/File.js
Создайте класс File, который представляет собой абстракцию над файлом (обёртка над синхронными функциями модуля fs). Реализуйте в этом классе метод read(). Этот метод проверяет можно ли прочитать файл и если да, то читает его, если нет, то бросает исключения двух видов:

Если файла не существует – NotExistsError
Если файл нельзя прочитать, но он существует – NotReadableError
```js
const file = new File('/etc/fstab');
file.read(); // "какие-то данные"
const file = new File('/etc/nonexists');
file.read(); // NotExistsError

const file = new File('/etc/shadow');
file.read(); // NotReadableError
```

## src/errors/FileError.js
Реализуйте класс FileError, который наследуется от Error. Это базовое исключение для данной библиотеки.

## src/errors/NotReadableError.js, src/errors/NotExistsError.js
Реализуйте классы исключения. Они должны наследоваться от базового класса исключений для данной библиотеки.

## src/Utils.js
Реализуйте функцию readFiles, которая принимает на вход список файлов и возвращает их содержимое. Если в процессе обработки какого-то файла возникло исключение, то вместо данных этого файла возвращается null.
```js
const values = Utils.readFiles(['/etc/fstab', '/etc/unknown']);
console.log(values); // => ["какие-то данные", null]
```

