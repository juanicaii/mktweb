import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Home.module.css";

interface ITitle {
  text: string;
  size: string;
  letterSub: string;
  imagePostion: Array<String>;
  align: number;
}
interface IStep {
  align: number;
  letterSub: string;
  title: string;
  list: Array<String>;
  img: string;
  width: number;
}
const Title = ({ text, size, letterSub, imagePostion, align }: ITitle) => {
  return (
    <div>
      <h1
        style={{
          fontSize: size,
          textAlign: align == 0 ? "left" : align == 1 ? "center" : "right",
        }}
        className={styles.titleHowWork}
      >
        {text}
        <span
          style={{
            backgroundImage: "url(./linea.jpeg)",
            backgroundPosition: `${imagePostion[0]} ${imagePostion[1]}`,
          }}
          className={styles.line}
        >
          {letterSub}
        </span>
      </h1>
    </div>
  );
};

const StepWork = ({ align, title, letterSub, list, img, width }: IStep) => {
  return (
    <div className={styles.step}>
      {align == 0 ? <img src={img} alt="" /> : ""}

      <div className={styles.list}>
        <Title
          align={width > 768 ? (align == 0 ? 0 : 3) : 1}
          imagePostion={["0px", "27px"]}
          text={title}
          letterSub={`${letterSub}`}
          size={"2em"}
        />
        <ul
          style={{
            listStyleImage: "url(./linea.png)",
          }}
        >
          {list.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      {align == 1 ? <img src={img} alt="" /> : ""}
    </div>
  );
};

interface IHowWork {
  heigth: number;
}
const HowWork = () => {
  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    function resize() {
      setWidth(window.innerWidth);
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  const list = [
    {
      img: "./1.png",
      title: "Planificación ",
      subLetter: `Estratégica `,
      align: 0,
      ul: [
        ` Realizaremos preguntas claves mediante formularios para entender más
      a fondo el negocio y qué objetivos se quiere alcanzar.`,
        ` Realizaremos un estudio intensivo del mercado, de la competencia y
      haremos un FODA para analizar cuál es el panorama interno y externo
      del negocio.`,
        ` Realizaremos una reunión de Kick off para comenzar a desarrollar el
      plan de acción`,
      ],
    },
    {
      img: "./2.png",
      title: "",
      subLetter: `Diseño `,
      align: width > 768 ? 1 : 0,
      ul: [
        ` Diseñaremos un plan de acción partiendo de objetivos comerciales y haremos el set up de cuentas.`,
        ` En caso de requerirlo, comenzamos a correr campañas y crear los públicos. Se presentará de manera oficial el plan de acción.`,
      ],
    },
    {
      img: "./3.png",
      title: "",
      subLetter: `Implementación `,
      align: 0,
      ul: [
        ` Implementaremos el plan de acción.`,
        `Crearemos reportes de manera mensual para que tengan en tiempo real y mes a mes, los resultados.`,
      ],
    },
    {
      img: "./4.png",
      title: "",
      subLetter: `Optimización `,
      align: width > 768 ? 1 : 0,
      ul: [
        `   Una vez implementado todo el plan, iremos optimizando y revisando para poder generar un crecimiento mes a mes.`,
      ],
    },
  ];

  return (
    <>
      <div>
        <Title
          align={1}
          imagePostion={["0px", "40px"]}
          text="¿Como "
          letterSub="Trabajamos? &nbsp;"
          size={"3em"}
        />
        <p className={styles.subTitle}>
          Diseñamos un plan de acción para ejecutar nuestros servicios que
          consta de 4 etapas, queremos que conozcas nuestra forma de trabajar,
          somos metódicos
        </p>

        {list.map((element, index) => (
          <StepWork
            width={width}
            key={index}
            title={element.title}
            letterSub={element.subLetter}
            align={element.align}
            list={element.ul}
            img={element.img}
          />
        ))}
        {/* <StepWork align={1} /> */}
      </div>
    </>
  );
};

export default HowWork;
