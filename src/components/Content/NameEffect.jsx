import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <h1 className='text-white text-3xl font-extrabold '>
        <TypeAnimation
      sequence={[
        "Hi, I'm ",
        1000,
        "Hi, I'm Shreeram Haridas",
        1000,
        "Hi, I'm a <Frontend Developer/>",
        1000
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
      deletionSpeed={30}
    />
    </h1>
    
  );
};

export default ExampleComponent;