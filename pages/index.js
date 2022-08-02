import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import studiopic from "../public/studio.jpeg";
import ableton2 from "../public/ableton-2.jpg";
import ableton3 from "../public/ableton-3.jpg";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src={"/ableton.png"}
            alt="Man creating music in studio"
            width={1000}
            height={500}
          />
        </div>
        <section>
          <p className={styles.bold}>
            We make <span className={styles.blue}>Live, Push,</span> and{" "}
            <span className={styles.blue}>Link</span> - unique software and
            hardware for music creation and performance. With these products,
            our community of users creates amazing things.
          </p>
          <p className={styles.small}>
            Ableton was founded in 1999 and released the first version of live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artist from across the world.
          </p>
        </section>
        <div className={styles.firstImgLayout}>
          <div className={styles.secondImageContainer}>
            <Image src={ableton2} alt="Woman working with a musical machine" />
          </div>
          <div className={styles.thirdImageContainer}>
            <Image
              src={ableton3}
              alt="Woman passing through a green book shelf"
            />
          </div>
        </div>
        <section>
          <p className={styles.bold}>
            Making music isn't easy. It takes time, effort, and learning. But
            when you're in the flow, it's incredibly rewarding.
          </p>
          <p className={styles.small}>
            We feel same way about making Ableton products. The driving force
            behind Ableton is our passion for what we make, and the people we
            make it for.
          </p>
        </section>
        <YoutubeEmbed embedId="9SbnhgjeyXA" />

        <section>
          <p className={styles.bold}>
            We are more then 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </p>
          <p className={styles.small}>
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of use have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        </section>
        <div className={styles.secondImgLayout}>
          <div className={styles.fourthImageContainer}></div>
          <div className={styles.fifthImageContainer}></div>
        </div>
        <section>
          <p className={styles.bold}>
            We believe it takes focus to create truly outstanding instruments.
            We only work on a few products and we strive to make them great.
          </p>
          <p className={styles.small}>
            Rather than having a one-size-fits-all process, we try to give our
            people what they need to work their magic and grow. We've learned
            that achieving the best result comes from building teams that are
            richly diverse, and thus able to explore problems from a wider set
            of perspectives. We don't always agree with each other, but opinion
            and debate are valued and openly encouraged.
          </p>
        </section>
        <div className={styles.imageContainer}>
          <Image src={studiopic} alt="Man creating music in studio" />
        </div>
        <section>
          <p className={styles.bold}>
            We're passionate about what we do, but we're equally passionate
            about improving who we are.
          </p>
          <p className={styles.small}>
            We work hard to foster an environment people can grow both
            personally and professionaly, and we strive to create a wealth of
            opportunities to learn from and with each oter.
          </p>
          <p className={styles.small}>
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily wokrk. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practises.
          </p>
        </section>
        <div className={styles.thirdImgLayout}>
          <div className={styles.sixthImageContainer}></div>
          <div className={styles.seventhImageContainer}></div>
        </div>
        <section>
          <p className={styles.bold}>
            We want our employees to love it here. Since we're looking for
            exceptional talent fro around the world, we will do everything we
            can to make your transition as easy as possible.
          </p>
          <p className={styles.small}>
            If your are joining us in Berlin, we'll help with relocation and
            paperwork. We'll event provide you with free German and English
            lessons. Plus, working in Germany means you can expect comprehensive
            health insurance for you and your family, as well as generous
            maternity and paternity leave. Office hours are flexible, but it's
            not all work; we have several company and team outings throughout
            the year as well as a variety of fun, internal small-group
            activities.
          </p>
        </section>
        <div className={styles.fourthImgLayout}>
          <div className={styles.eighthImageContainer}></div>
          <div className={styles.jobsContainer}>
            <h1 className={`${styles.bold} ${styles.jobsInfo}`}>
              We're really proud of the work we've done so far. But there's so
              much to come. If you'd like to be a part of it, please join us.
            </h1>
            <a
              className={`${styles.hasArrow} ${styles.blue} ${styles.joblink}`}
              href="https://www.ableton.com/en/jobs/"
            >
              See latest jobs
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
