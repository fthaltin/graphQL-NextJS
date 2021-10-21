import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import ProductsContainer from '../components/showcase-container';
import ProductCard from '../components/product-card';
import LikeCount from '../components/like-count';
import FavoritesToggle from '../components/favorites-toggle';
import { useContext, useState } from 'react';
import { Context } from '../context/state';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Query {
        products {
          productId
          name
          image {
            alt
            url
          }
          price
          cargo {
            isFree
            text
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products,
    },
  };
}

export default function Home({ products }) {
  const [isActiveFavorites, setFavorites] = useState(false);
  const { state } = useContext(Context);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.productActions}>
          <LikeCount length={state.liked.length} />
          <FavoritesToggle
            isActive={isActiveFavorites}
            onToggle={() => setFavorites(!isActiveFavorites)}
          />
        </div>
        <ProductsContainer
          title={
            isActiveFavorites
              ? 'Beğendiğim Ürünler'
              : 'İlginizi Çekebilecek Ürünler'
          }
        >
          {(isActiveFavorites ? state.liked : products).map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </ProductsContainer>
      </main>
    </div>
  );
}
