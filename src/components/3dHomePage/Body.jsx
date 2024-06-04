import style from "../../styles/body.module.css";
import { Canvas } from "@react-three/fiber";
import { ModelStrat } from "./3d/Strat/ModelStrat";
import { Suspense } from "react";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <div className={style.body}>
        <div className={style.first}>
          <div className={style.first__info}>
            <h1>Акустичні гітари</h1>
            <p>
              Акустична гітара - чудовий вибір для музикантів завдяки своїй
              універсальності та портативності, дозволяючи грати будь-де без
              потреби в додатковому обладнанні
            </p>
            <Link
              to={`${ROUTES.GUITARS}?type=acoustic`}
              className={style.first__btn}
            >
              Переглянути всі
            </Link>
          </div>
        </div>

        <div className={style.second}>
          <Canvas
            className={style.electric__model}
            camera={{
              fov: 42,
              position: [0, 0, 1],
            }}
          >
            <ambientLight intensity={0.1} />
            <directionalLight position={[1, 1, 1]} intensity={10.8} />
            <Suspense fallback={null}>
              <ModelStrat />
            </Suspense>
          </Canvas>
          <div className={style.second__info}>
            <h1>Електричні гітари</h1>
            <p>
              Електрична гітара - чудовий вибір для музикантів завдяки своїй
              здатності створювати широкий спектр звуків за допомогою ефектів і
              підсилювачів, що дозволяє експериментувати з різними стилями
              музики
            </p>
            <Link
              to={`${ROUTES.GUITARS}?type=electric`}
              className={style.second__btn}
            >
              Переглянути всі
            </Link>
          </div>
        </div>

        <div className={style.third}>
          <div className={style.third__info}>
            <h1>Бас гітари</h1>
            <p>
              Гра на бас-гітарі розвиває почуття ритму та гармонії, що робить
              вас більш універсальним музикантом. Цей інструмент часто
              затребуваний у музичних колективах.
            </p>
            <Link
              to={`${ROUTES.GUITARS}?type=bass`}
              className={style.third__btn}
            >
              Переглянути всі
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
