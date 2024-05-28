import style from "./body.module.css";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Sphere from "./3d/Sphere";
import Guitar from "./3d/guitar/Guitar";
import { ModelStrat } from "./3d/Strat/ModelStrat";
import { Bass } from "./3d/bass/Bass";
import { Suspense } from "react";

function Body() {
  return (
    <>
      <div className={style.body}>
        <div className={style.first}>
          <div className={style.first__info}>
            <h1>Акустичні гітари</h1>
            <p>
            Акустична гітара - чудовий вибір для музикантів завдяки своїй універсальності та портативності, дозволяючи грати будь-де без потреби в додатковому обладнанні
            </p>
            <button className={style.first__btn}>Переглянути всі</button>
          </div>

          <Canvas
            className={style.acoustic__model}
            camera={{
              fov: 40,
              position: [-10, 30, 0],
            }}
          >
            <ambientLight intensity={0.1} />
            <directionalLight position={[1, 1, 1]} intensity={10.8} />
            <Suspense fallback={null}>
              <Guitar />
            </Suspense>
          </Canvas>
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
            Електрична гітара - чудовий вибір для музикантів завдяки своїй здатності створювати широкий спектр звуків за допомогою ефектів і підсилювачів, що дозволяє експериментувати з різними стилями музики
            </p>
            <button className={style.second__btn}>Переглянути всі</button>
          </div>
        </div>

        <div className={style.third}>
          <div className={style.third__info}>
            <h1>Бас гітари</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum, optio, sequi facilis reprehenderit.
            </p>
            <button className={style.third__btn}>Переглянути всі</button>
          </div>

          <Canvas
            className={style.bass__model}
            camera={{
              fov: 100,
              position: [0, 0, 1],
            }}
          >
            <ambientLight intensity={0.1} />
            <directionalLight position={[1, 1, 1]} intensity={10.8} />
            <Suspense fallback={null}>
              <Bass />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Body;
