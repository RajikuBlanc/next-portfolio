import { Link as Scroll } from 'react-scroll';
// --------------- Function ---------------
export default function Navigation({ name }: { name: string }) {
  return (
    <Scroll to={name} smooth={true} duration={500} offset={0} className='navLink'>
      {name}
    </Scroll>
  );
}
