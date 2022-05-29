import React from 'react';
import styles from './Services.module.css';

const Features = () => {
  return (
    <>
    <section id='features' className={styles.feature}>
      <div className={styles['heading-box'] + ' ' + styles['mb-big']}>
        <h1 className={styles['heading-1']}>The Services</h1>
      </div>
      <div className={styles['grid-container']}>


        <>
        <div className={styles['feature-text']}>
          <span className={styles['feature-step']}>01</span>
          <h2 className={styles['feature-heading']}>
            Price prediction
          </h2>
          <p className={styles['feature-paragraph']}>
            You can predict the resale value of your vehicle. The value is predicted
            using a Machine Learning model which has a accuracy of 0.94 over the test dataset.
            You just have to fill a form and will get the predicted price. 
          </p>
        </div>
        <div className={styles['feature-logo']}>
          <img
            className={styles['feature-img']}
            src='https://media.istockphoto.com/photos/portrait-of-a-salesman-working-at-the-dealership-showing-cars-picture-id1316556095?b=1&k=20&m=1316556095&s=170667a&w=0&h=JewALeepynsdWQ2y0lBM-IXvdj_fymiIk8kbWN3wPfU='
            alt='feature-img'
          />
        </div>
        </>

        {/* END OF FEATURE 1 */}

        <>

        <div className={styles['feature-logo']}>
          <img
            className={styles['feature-img']}
            src='https://i.pinimg.com/564x/84/8f/f7/848ff7f0aaeeaee45b2c23b477869c35.jpg'
            alt='feature-img'
          />
        </div>
        <div
          className={styles['feature-text'] + ' ' + styles['feature-text--2']}
        >
          <span className={styles['feature-step']}>02</span>
          <h2 className={styles['feature-heading']}>
            LeaderBoard
          </h2>
          <p className={styles['feature-paragraph']}>
            The leaderboatrd is set according to the people's choice i.e. 
            the number of sales (in thousand). It will get updated automatically
            if we update the dataset provided. Here I have used car sales dataset.
          </p>
        </div>

        </>

        {/* END OF FEATURE 2 */}

        <>
        <div className={styles['feature-text']}>
          <span className={styles['feature-step']}>03</span>
          <h2 className={styles['feature-heading']}>
            Data Analytics
          </h2>
          <p className={styles['feature-paragraph']}>
            The feature is specially made for comparison, overview and to get 
            to give some real time knowledge about the automotive industry. It will help
            to predict right time launch a new vehicle, customer segments etc.
          </p>
        </div>
        <div className={styles['feature-logo']}>
          <img
            className={styles['feature-img']}
            src='https://images.unsplash.com/photo-1567789884554-0b844b597180?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b21vdGl2ZSUyMGluZHVzdHJ5fGVufDB8fDB8fA%3D%3D&w=1000'
            alt='feature-img'
          />
        </div>

        </>
        
        {/* END OF FEATURE 3 */}
      </div>
    </section>
    </>
  );
};

export default Features;