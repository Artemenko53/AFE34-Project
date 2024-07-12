import css from "./MyPage.module.css";
import me from "../../img/me.jpg";

function MyPage() {
  return (
    <>
      <h1 className={css.name}>Artem Zaitsev</h1>
      <div className={css.bio_wrapper}>
        <img width={"240px"} src={me} alt="Me" />

        <div className={css.bio}>
          <p>
            My name is Artem Zaitsev, and I am a frontend developer. I began my
            journey in 7th grade. Over the years, I have honed my skills in
            HTML, CSS, JavaScript, and advanced frameworks like React and React
            Router. I am proficient in building dynamic web applications that
            interact with REST APIs, ensuring efficient and responsive user
            experiences.
          </p>

          <p>
            I studied at Ampli, the top accelerator school for teens, in group
            AFE 34 . I acquired my knowledge and skills at this educational
            institution.
          </p>
          <p>
            My works are available on{" "}
            <a href="https://github.com/Artemenko53">GitHub</a>, and their
            organization and planning are managed on Trello ; you can access the
            board{" "}
            <a href="https://trello.com/b/sJ6ikzYa/artem-zaitsev-afe34-project">
              here
            </a>
            .
          </p>
          <p>
            Additionally, you can find more information and materials on Google
            Classroom at{" "}
            <a
              href="https://classroom.google.com/c/NjIxNzEzMDc0ODU2"
              rel="class"
            >
              AFE 34
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default MyPage;
