import Link from 'next/link';

const Header = () => {
  const menu = 'mx-5';

  return (
    <section className='flex flex-row items-center justify-between py-4'>
      <Link href='/'>
        <h2 className='text-4xl flex-none ml-5 tracking-tighter leading-tight'>Hyodee Kim</h2>
      </Link>
      <span className='text-1xl shrink-1 my-5 flex flex-row'>
        <Link href='/'>
          <h4 className={menu}>About</h4>
        </Link>
        <Link href='/work'>
          <h4 className={menu}>Work</h4>
        </Link>
        <Link href='/illustration'>
          <h4 className={menu}>illustration</h4>
        </Link>
      </span>
    </section>
  );
};

export default Header;
