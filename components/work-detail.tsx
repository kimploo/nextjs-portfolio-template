type Props = {
  imgs: string[];
  content: string;
  title: string;
  src: string;
};

export default function WorkDetail({ imgs, content, title, src }: Props) {
  return (
    <section className='grid grid-cols-1 gap-2 place-items-stretch'>
      {imgs.map((img) => (
        <img className='object-cover' src={`${src}/${img}`} alt={title} key={img} />
      ))}
    </section>
  );
}
