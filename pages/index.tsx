//import { GetStaticProps } from 'next';
import { GetStaticProps } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Me chamo Clayton, estou no primeiro ano de Analise e desenvolvimento de
        sistema, Sou apaixonado por tecnologia, trabalho com desenvolimento Web
        a + de 2 anos procuro estudar sempre para aprimorar meus conhecimentos,
        estou em busca de uma oportunidade de trabalho.
      </h5>

      <div
        className="flex-grow p-4 my-5 bg-gray-400 dark:bg-dark-100"
        style={{
          marginLeft: '-1.5rem',
          marginRight: '-1.5rem',
          marginBottom: '-0.0rem',
        }}
      >
        <h6 className="my-3 font-bold tracking-wide text-x1">Hard Skills</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-300">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async (context: GetStaticProps) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
