import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function FbSection() {
  return (
    <section className={styles.facebook}>
      <h2>JOIN OUR FACEBOOK GROUP</h2>
      <p className={styles.desc}>Wether you&apos;re a fishing enthusiast, a seasoned angler o a pro, our group has hundreds of photos, videos and anecdotes of fun times! Lots of members who just like you, share the love for fishing.</p>

      <div>
        <a
          href='https://www.facebook.com/groups/rafinbassfishing/'
          className={styles.join_us}
          target='_blank'
          rel='noreferrer'
        >
          <Image alt='facebook logo' src='/l_fb.png' width='26px' height='26px' />
          <label>
            JOIN US!
          </label>
        </a>
      </div>
      <div
        className="fb-like"
        data-href="http://rafinbassfishing.com.mx"
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-show-faces="false"
        data-share="true"
        style={{ display: "none" }}
      />
    </section>
  )
}