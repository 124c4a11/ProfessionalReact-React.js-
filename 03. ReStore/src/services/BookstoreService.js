export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Porduction-Ready Microservices',
      author: 'Susan J. Fower',
      price: 32,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygan',
      price: 45,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 800);
    });
  };
};
