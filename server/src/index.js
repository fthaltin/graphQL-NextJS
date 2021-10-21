const { ApolloServer } = require('apollo-server');
const faker = require('faker');
const typeDefs = require('./schema');

const nameList = [
  'Apple iPhone 13 128 GB Siyah Cep Telefonu (Apple Türkiye Garantili)',
  'Apple iPhone 13 Cep Telefonu',
  'Apple iPhone 13 256 GB Mavi Cep Telefonu (Apple Türkiye Garantili)',
  'Apple iPhone 13 256 GB Kırmızı Cep Telefonu (Apple Türkiye Garantili)',
  'İphone 13 Kılıf Şeffaf Silikon + Nano Cam Ekran Koruyucu (rtkjdbv)',
];
const priceList = ['1400TL', '500TL', '700TL', '1200TL', '1800TL'];
const cargoText = ['Ücretsiz Kargo', 'Ücretsiz – Aynı Gün Kargo'];
const cargoBoolean = [true, false];

const mocks = {
  Query: () => ({ products: () => [...new Array(6)] }),
  Product: () => ({
    productId: (id) => id,
    image: () => ({
      url: 'https://mcdn01.gittigidiyor.net/73723/tn30/737235981_tn30_1.jpg',
      alt: faker.random.arrayElement(nameList),
    }),
    name: () => faker.random.arrayElement(nameList),
    price: () => faker.random.arrayElement(priceList),
    cargo: () => {
      const booleanValue = faker.random.arrayElement(cargoBoolean);
      return {
        isFree: booleanValue,
        text: booleanValue ? faker.random.arrayElement(cargoText) : '',
      };
    },
  }),
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
