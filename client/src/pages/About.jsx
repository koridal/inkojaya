import Greeting from '../components/Greeting';
import Outline from '../components/Outline';
import Vision from '../components/Vision';

export default function About() {
  return (
    <div className='justify-center min-h-screen px-4 mx-auto mt-10 max-w-7xl '>
      <Greeting />
      <Outline />
      <Vision />
    </div>
  );
}