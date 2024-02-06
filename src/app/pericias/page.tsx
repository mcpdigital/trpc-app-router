import React from "react";
import FeatureCards from "@/components/appui/FeatureCards";
import PFooter from "@/components/PFooter";
import Image from "next/image";
const pericias = () => {
  return (
    <div className="pericias-bg">
      <div className="bg-slate-950">
        <Image
          className="p-8"
          src="/Pericia-Logo-72.png"
          alt="forense"
          width={300}
          height={250}
        ></Image>
      </div>

      <div
        id="features"
        className="py-10 px-4  grad-pericias1 gap-2 flex  justify-center "
      >
        <div className="  grid lg:gap-2 gap-2 text-center lg:max-w-5xl lg:mb-0 lg:grid-cols-3">
          {/* BLOCO 1 */}
          <FeatureCards
            href="#ProdSection1"
            h2="Forense Computacional"
            p="Sistemas ERP e de gestão, violações de direitos de uso,
        licenciamento de software, acessos não autorizados, clonagem
        forense…"
          />

          {/* BLOCO 2 */}
          <FeatureCards
            href="#ProdSection2"
            h2="Propriedade Industrial"
            p="Direitos autorais, propriedade industrial, concorrências
        desleais…"
          />

          {/* BLOCO 3 */}
          <FeatureCards
            href="#Links"
            h2="Documentos"
            p="Downloads, links externos, informações…"
          />
        </div>
      </div>
      <div className="grad-pericias2 ">
        <div
          id="ProdSection1"
          className="flex flex-col mx-2 p-4 lg:flex-row lg:justify-evenly items-center "
        >
          <div className=" p-5 lg:p-10 ">
            <Image
              src="/pexels-photo-94654-300.jpg"
              alt="forense"
              width={320}
              height={228}
            />
          </div>
          <div className="max-w-[72ch] col-start-2 back-hover-18 p-3 lg:p-8 text-md break-inside-avoid break-before-right">
            <h2 className="text-2xl p-2">Forense Computacional</h2>

            <p className="p-2">
              Nossos serviços de Forense Computacional adotam&nbsp;procedimentos
              padrões, reconhecidos e aceitos no meio jurídico. O tratamento da
              mídia digital garante integridade das evidências bem como a
              manutenção de suas características originais em todas as fases da
              perícia: Identificação, Coleta, Preservação e Análise.
            </p>
            <p className="p-2">
              Os serviços de Forense Computacional realizados pela empresa
              incluem:
            </p>
            <ul className="list-disc text-md ml-6 p-2 break-inside-avoid break-before-right">
              <li>Perícia Judicial</li>
              <li>Assistência Técnica Judicial</li>
              <li>Pareceres Técnicos</li>
            </ul>
            <p className="p-2">
              Os trabalhos nestas áreas abordam os seguintes temas:
            </p>
            <ul className="list-disc p-2 ml-6">
              <li>Constatar uso de software não licenciado</li>
              <li>Constatar problemas na implementação de programas ERP</li>
              <li>Constatar envio e origem de mensagens eletrônicas</li>
              <li>
                Constatar violação de direitos de autor de programas de
                computador
              </li>
              <li>Constatar duplicação indevida de dados e programas</li>
              <li>Constatar acesso não autorizado a sistema de computador</li>
              <li>
                Constatar vícios de fabricação em equipamentos de informática
              </li>
              <li>Clonagem forense de discos rígidos e mídias digitais</li>
            </ul>
          </div>
        </div>
        <div
          id="ProdSection2"
          className="flex mx-2 p-4 flex-col lg:flex-row lg:justify-evenly items-center "
        >
          <div className="max-w-[72ch] back-hover-18 p-3 lg:p-8 text-md break-inside-avoid break-before-right">
            <h2 className="text-2xl p-2">Forense Computacional</h2>

            <p className="p-2">
              Nossos serviços de Forense Computacional adotam&nbsp;procedimentos
              padrões, reconhecidos e aceitos no meio jurídico. O tratamento da
              mídia digital garante integridade das evidências bem como a
              manutenção de suas características originais em todas as fases da
              perícia: Identificação, Coleta, Preservação e Análise.
            </p>
            <p className="p-2">
              Os serviços de Forense Computacional realizados pela empresa
              incluem:
            </p>
            <ul className="list-disc text-md ml-6 p-2 break-inside-avoid break-before-right">
              <li>Perícia Judicial</li>
              <li>Assistência Técnica Judicial</li>
              <li>Pareceres Técnicos</li>
            </ul>
            <p className="p-2">
              Os trabalhos nestas áreas abordam os seguintes temas:
            </p>
            <ul className="list-disc p-2 ml-6">
              <li>Constatar uso de software não licenciado</li>
              <li>Constatar problemas na implementação de programas ERP</li>
              <li>Constatar envio e origem de mensagens eletrônicas</li>
              <li>
                Constatar violação de direitos de autor de programas de
                computador
              </li>
              <li>Constatar duplicação indevida de dados e programas</li>
              <li>Constatar acesso não autorizado a sistema de computador</li>
              <li>
                Constatar vícios de fabricação em equipamentos de informática
              </li>
              <li>Clonagem forense de discos rígidos e mídias digitais</li>
            </ul>
          </div>
          <div className=" p-0 lg:p-10 invisible lg:visible max-h-0 lg:max-h-fit">
            <Image
              src="/pexels-photo-94654-300.jpg "
              alt="forense"
              width={320}
              height={228}
            />
          </div>
        </div>
        <div
          id="ProdSection3"
          className="flex flex-col mx-2 p-4 lg:flex-row lg:justify-evenly items-center "
        >
          <div className=" p-0 lg:p-10 max-h-0 lg:max-h-fit  invisible lg:visible">
            <Image
              className=""
              src="/pexels-photo-94654-300.jpg"
              alt="forense"
              width={320}
              height={228}
            />
          </div>
          <div className="max-w-[72ch] back-hover-18 p-3 lg:p-8 text-md break-inside-avoid break-before-right">
            <h2 className="text-2xl p-2">Propriedade Industrial</h2>

            <div>
              <p>
                Os serviços forenses em Propriedade Industrial realizados pela
                empresa incluem:ksajdlksajdlksajdlksajdslkajdsalkjdskal
              </p>
              <ul className="list-disc ml-6">
                <li>Perícia Judicial</li>
                <li>Assistência Técnica Judicial</li>
                <li>Pareceres Técnicos</li>
              </ul>
              <p>Os trabalhos nestas áreas abordam os seguintes temas:</p>
              <ul className="list-disc ml-6">
                <li>Marca Registrada</li>
                <li>Direito Autoral</li>
                <li>Concorrência Desleal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="Links">
        <PFooter />
      </div>
    </div>
  );
};

export default pericias;
