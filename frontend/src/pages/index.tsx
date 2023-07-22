import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useQuery } from "@apollo/client";
import { GET_DRINKS, GET_CALCULATE_PRICE } from "../apollo/queries";
import { getImageFromName } from "../utils/helpers";
import { DrinkName, Drink, CalculatePrice } from "../types";

export default function Home() {
  const { data: dataDrinks } = useQuery<{ drinks: Drink[] }>(GET_DRINKS);
  const [itemsInBag, setItemsInBag] = useState<Drink[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [calculatePrice, setCalculatePrice] = useState<CalculatePrice | null>(
    null
  );
  const [bounce, setBounce] = useState<boolean>(false);

  const { data: dataPrice } = useQuery<
    { calculatePrice: CalculatePrice },
    { drinks: DrinkName[] }
  >(GET_CALCULATE_PRICE, {
    variables: { drinks: itemsInBag.map((item) => item.name) },
    skip: !itemsInBag.length,
  });

  useEffect(() => {
    if (dataPrice && dataPrice.calculatePrice) {
      setCalculatePrice(dataPrice.calculatePrice);
    }
  }, [dataPrice]);

  useEffect(() => {
    if (bounce) {
      const timer = setTimeout(() => {
        setBounce(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [bounce]);

  const handleItemClick = (item: Drink) => {
    setItemsInBag((prevItems) => [...prevItems, item]);
    setBounce(true);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleRemoveBundle = (bundle: DrinkName[]) => {
    setItemsInBag((prevItems) => {
      const newItems = [...prevItems];
      bundle.forEach((drink) => {
        const index = newItems.findIndex((item) => item.name === drink);
        if (index !== -1) {
          newItems.splice(index, 1);
        }
      });
      if (newItems.length === 0) {
        setCalculatePrice(null);
      }
      return newItems;
    });
  };

  return (
    <>
      <Head>
        <title>THE DRINK SHOP</title>
        <meta name="description" content="THE DRINK SHOP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.headerText}>THE DRINK SHOP</h1>
          <div
            className={`${styles.shoppingBag} ${
              bounce ? styles.shoppingBagBounce : ""
            }`}
            onClick={togglePopup}
          >
            <span className={styles.bagCount}>{itemsInBag.length}</span>
          </div>
        </header>
        <section className={styles.centerContainer}>
          <div className={styles.gridContainer}>
            {dataDrinks?.drinks?.map((item, index) => (
              <div
                key={index}
                className={styles.gridItem}
                onClick={() => handleItemClick(item)}
              >
                <img
                  className={styles.itemImage}
                  src={item.img}
                  alt="item image"
                />
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemPrice}>
                  £{Number(item.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {isPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupHeader}>MY BAG</div>
            {!calculatePrice && (
              <div className={styles.popupEmpty}>Your bag is empty</div>
            )}
            {calculatePrice &&
              calculatePrice.details.map((detail, index) => (
                <div key={index} className={styles.bundle}>
                  <div className={styles.bundleDrinks}>
                    {detail.bundle.map((drink, i) => (
                      <div key={i} className={styles.drink}>
                        <img src={getImageFromName(drink)} alt={drink} />
                      </div>
                    ))}
                  </div>
                  <p>
                    £{Number(detail.price).toFixed(2)}
                    {detail.bundle.length > 1 && (
                      <span className={styles.popupDiscount}>
                        {" "}
                        Bundle Offer!!
                      </span>
                    )}
                  </p>
                  <div
                    className={styles.closeButton}
                    onClick={() => handleRemoveBundle(detail.bundle)}
                  >
                    X
                  </div>
                </div>
              ))}
            {calculatePrice && (
              <div className={styles.total}>
                Total: £{Number(calculatePrice.total).toFixed(2)}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}
