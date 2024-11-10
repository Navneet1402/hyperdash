import React from 'react';
import styles from './StoriesSection.module.css';

function StoriesSection() {
  const stories = [
    { image: 'https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/4c015aa02e133431e344a942073fd6e588fec6f2539f21dc0d2d2e9d6294296a?apiKey=272450c229394503ba79a2c462fecf0f&', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/556e47d400ad67044ce46a479dfc55047db7185768bfe4b6118f323bb77a8bab?apiKey=272450c229394503ba79a2c462fecf0f&', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/12dfd910a74ed7f6f5766095074747c6e5d5caff6f6f266961c5028dde129394?apiKey=272450c229394503ba79a2c462fecf0f&', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
   
  ];

  return (
    <section className={styles.storiesSection}>
      <div className={styles.storiesHeader}>
        <h2 className={styles.storiesTitle}>Our Stories</h2>
        <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/f34080ac3dcc4c96ae2a30ece15fd3f525069c79eeb727f166af776413fa430d?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Submit" />
        
        
        {/* <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/50c3fc6a95477aa0721f27ee970aa66bf8e37dd046037d8412b5a08ce929e04f?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Stories decoration" className={styles.storiesDecoration} /> */}
      </div>
      <div className={styles.storiesGrid}>
      
      
        {stories.map((story, index) => (
          <article key={index} className={styles.storyCard}>
            <img src={story.image} alt={story.title} className={styles.storyImage} />
            <h3 className={styles.storyTitle}>{story.title}</h3>
            <p className={styles.storyDescription}>{story.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StoriesSection;