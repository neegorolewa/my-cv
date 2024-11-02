import styles from "./page.module.css";

export default function Page() 
{
  return (
    <div className={styles.container}>
    <h1>Габдрахманов Евгений</h1>
    <h2> Android-разработчик</h2>
    <h3>+7(917)716-39-36</h3>
    <div>
      <h2>Навыки</h2>
      <ul>
        <li>Andriod-разработка(Kotlin)</li>
        <li>ООП(C++, C#)</li>
        <li>C#(опыт)</li>
        <li>SQL(работа с БД)</li>
        <li>React, JS, TS (опыт)</li>
      </ul>
    </div>
    <div>
      <h2>Опыт работы</h2>
      <div>
        <h3>Omega-R, Йошкар-Ола</h3>
        <p>Android-разработчик</p>
        <p>июль 2023 - сентябрь 2023</p>
        <p>Практика и последующая стажировка в компании.
          Работал на базе Android Studio на Kotlin. Задача: разработать экран логинации пользователя. 
          Создал локальную базу данных для сохранения логина и пароля пользователя. 
          Выполнил работу, необходимую для дальнейшей стажировки
        </p>
      </div>
    </div>
    <div>
      <h2>Образование</h2>
      <div>
        <p>ПГТУ(Волгатех), Йошкар-Ола</p>
        <p>3 курс, Бакалавр</p>
        <p>Сентябрь 2022 - н.в.</p>
        <p>ФИиВТ, Разработчик программных систем</p>
      </div>
    </div>
    <div>
      <h2>Языки</h2>
      <p>Русский(идеальный), Английский(A2)</p>
    </div>
  </div>
  );
}