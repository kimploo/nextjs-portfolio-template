const Intro = () => {
  const menu = 'mx-5';

  return (
    <section className='flex flex-row items-center justify-between py-4'>
      <h2 className='text-4xl flex-none tracking-tighter leading-tight'>Hyodee Kim</h2>
      <span className='text-1xl shrink-1 my-5 flex flex-row'>
        <h4 className={menu}>About</h4>
        <h4 className={menu}>Work</h4>
        <h4 className={menu}>illustration</h4>
      </span>
    </section>
  );
};

export default Intro;
