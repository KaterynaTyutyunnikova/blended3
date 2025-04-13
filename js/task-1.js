/*const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
  ];
  
  const allValues = data.flatMap(item => item.values);
  
  console.log(allValues); // [1, 2, 3, 4, 5, 6, 7, 8, 9]*/


 /*const numbers = [1, 2, 3, 4, 5]
const result = numbers.map(num => num * num);
    console.log(result);*/



   /* const people = [
          { name: 'John', age: 27 },
         { name: 'Jane', age: 31 },
          { name: 'Bob', age: 19 },
         ];

         const validAge = people.some(person => person.age < 20);
         console.log(validAge); // true*/






/*const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); */






// Знайдіть перше непарне число

 /*const numbers = [2, 1, 6, 8, 9, 10, 12];
 const firstOdd = numbers.find(num => num % 2 !== 0);
 console.log(firstOdd); */


 // Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

/*const numbersArray = [4, 2, 5, 1, 3];
const sortedArray=numbersArray.toSorted((a,b) => a-b);
console.log(sortedArray);*/

/*const numbers=[101,20,25,200,40,50,5,500];
const sortedNumbers=numbers.toSorted();
console.log(sortedNumbers);*/



// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

 /*const stringArray = ['banana', 'orange', 'apple', 'pear'];
 const sortedArray=stringArray.toSorted((a,b)=>a.localeCompare(b));
    console.log(sortedArray);*/




    /*const words = [
        "сонце",
        "їжак",
        "яблуко",
        "іграшка",
        "єнот",
        "гора",
        "світло",
        "ґудзик",
        "олень",
        "зірка"
      ];
      const sortedWords =words.toSorted((a,b)=>a.localeCompare(b));
        console.log(sortedWords);
*/


/*const user = [
  { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
 ];
 const userAge=user.filter(user=>user.age>20);
 console.log(userAge);*/

 // Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

 /*const numbers = [1, 2, 3, 4, 5];
 const sum=numbers.reduce((acc,number)=>acc+number,0);
    console.log(sum);*/


    // маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
/*const products = [
    { name: 'Milk', price: 20 },
    { name: 'Bread', price: 10 },
    { name: 'Eggs', price: 15 },
  ];
const totalPrice=products
.filter(products=>products.price>10)
.reduce((acc,product )=>acc+product.price,0);
console.log(totalPrice);  
*/

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
/*const courses = [
    {
      name: "Basic HTML+CSS",
      topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
    },
    {
      name: "Intermediate HTML+CSS",
      topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
    },
    {
      name: "Basic JavaScript",
      topics: [
        "VSCode",
        "Type system",
        "Loops",
        "Function",
        "Git",
        "Conditions",
        "Classes",
        "GitHub",
        "DOM",
      ],
    },
  {
      name: "Intermediate JavaScript",
      topics: [
        "VSCode",
        "NPM",
        "Bundlers",
        "Transpiling",
        "Git",
        "Promises",
        "AJAX",
        "GitHub",
      ],
    },
  ];

  const allTopics = courses
  .flatMap(courses=>courses.topics)
  .filter((topic,index,arr)=>arr.indexOf(topic)===index);
  console.log(allTopics);
*/

// Порахуй загальну кількість лайків в категорії  Fashion


/*const posts = [
    { title: 'Post 1', likes: 20, category: 'Tech' },
    { title: 'Post 2', likes: 45, category: 'Fashion' },
    { title: 'Post 3', likes: 12, category: 'Tech' },
    { title: 'Post 4', likes: 30, category: 'Fitness' },
    { title: 'Post 5', likes: 15, category: 'Fashion' },
    { title: 'Post 6', likes: 50, category: 'Tech' }
  ];
  const totalLikes=posts
  .filter(post=>post.category ==='Fashion')
  .reduce((acc,post)=>acc+post.likes ,0);
  console.log(totalLikes);*/


  // Маємо масив об'єктів, який представляє список замовлень:

/*Поверніть список товарів з усіх виконаних замовлень.*/

/*const orders = [
  { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
  { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
  { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
];
const completedOrders = orders
.filter(order=>order.status === 'completed')
.flatMap(order=>order.products );
console.log(completedOrders);*/


//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

/*class  Rectangle {
    constructor(height ,width){
        this.height=height;
        this.width=width;
    }
    calculateArea(){
        return this.height*this.width;
    }
}
const prett1= new Rectangle(10,20);
console.log(prett1.calculateArea());*/

// Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
/*class Client{
    #login;
    #email;
    constructor(login,email){
        this.#login=login;
        this.#email=email;
    }
    get login(){
        return this.#login;

    }
    set login(newLogin){
        this.#login=newLogin;
    }
    get email(){
        return this.#email;
    }
    set email(newEmail){
         this.#email=newEmail;
    }

}
const result = new Client("mango", "mango@1233");

console.log(result.login); 
console.log(result.email);

result.login = "Poly";
result.email = "poly@1233";

console.log(result.login); 
console.log(result.email); */

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону
class Phone{
    static MAX_PRICE=40000;
    #price;
    constructor(price){
        this.#price=price;

    }
    get price(){
        return this.#price;
    }
    set price(newPrice){
        if(newPrice>Phone.MAX_PRICE){
            return; 
        }
        this.#price = newPrice;
    }

}
const phone= new Phone(45000);
console.log(phone.price);
phone.price=35000;
console.log(phone.price);
phone.price=45000;
console.log(phone.price);
