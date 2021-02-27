import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/*//education & experiece*/}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educação</h5>
          <div>
            <h5 className="my-2 font-bold text-x1">Computer Scicne enginner</h5>
            <p className="font-semibold">Academy of tecnologi</p>
            <p className="my-3">
              I am crruentrlu pursindo b tech in comopuite ciented of thencjksd
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experiencia</h5>
          <div>
            <h5 className="my-2 font-bold text-x1">Web developer</h5>
            <p className="font-semibold">Autonomo</p>
            <p className="my-3">Criação de land pages, web sites, web apps</p>
          </div>
        </div>
      </div>
      {/*//language & tools*/}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Sofwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
