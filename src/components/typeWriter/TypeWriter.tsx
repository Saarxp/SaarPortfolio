import Typewriter from "typewriter-effect";

function TypeWriter() {

  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "FullStack Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}/>
  );
}

export default TypeWriter;
