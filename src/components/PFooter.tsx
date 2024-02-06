import React from "react";
import Image from "next/image";
const PFooter = () => {
  return (
    <div className="grad-pericias1 min-h-68 max-h-68">
      <div className="flex flex-col lg:flex-row justify-around p-6 lg:p-2 text-blue-500 ">
        <div className="lg:inline-flex gap-2">
          <Image
            decoding="async"
            width="180"
            height="128"
            src="/cropped-pexels-photo-247676-400x512.png"
            alt=""
            title=""
            className="rounded-full flex-grow-0 max-h-0 lg:max-h-[220px] flex-shrink-0 invisible lg:visible"
          />
          <div className="pl-2 py-1">
            <h2 className="text-lg text-gray-300">Downloads de documentos</h2>

            <ul className="list-disc ml-6 text-sm underline">
              <li>
                <a
                  href="http://raspi.com.br/pdf/regulamento_de_honorarios.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Regulamento de Honorários para Perícias de Engenharia
                  -IBAPE/SP
                </a>
              </li>
              <li>
                <a
                  href="http://raspi.com.br/pdf/LEI_9279_PROPRIEDADE_INDUSTRIAL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lei no 9.279 – Propriedade Industrial
                </a>
              </li>
              <li>
                <a
                  href="http://raspi.com.br/pdf/LEI_9609_PROGRAMAS_DE_COMPUTADOR.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lei no 9.609 – Propriedade Intelectual de Programas de
                  Computador
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className="text-lg pl-2 py-1 text-gray-300">Links:</h2>
          <ul className="list-disc ml-8 text-sm underline">
            <li>
              <a href="http://www.raspi.com.br/propriedade-intelectual#">
                Método RASPI dos Elementos Primitivos &nbsp;
                <span className="ml-1 inline-block ">
                  <Image
                    decoding="async"
                    className=" "
                    src="/raspi-logo-small-1.png"
                    alt=""
                    width={40}
                    height={20}
                  ></Image>
                </span>
              </a>
            </li>
            <li>
              <a
                href="http://www.planalto.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portal do Planalto
              </a>
            </li>
            <li>
              <a
                href="http://www.planalto.gov.br/ccivil_03/leis/L5869.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código do Processo Civil
              </a>
            </li>
            <li>
              <a
                href="http://www.tjsp.jus.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tribunal de Justiça do Estado de São Paulo
              </a>
            </li>
            <li>
              <a
                href="http://www.dje.tjsp.jus.br/cdje/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diário Oficial da Justiça do Estado de São Paulo
              </a>
            </li>
            <li>
              <a
                href="http://www.inpi.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INPI – Instituto Nacional de Propriedade Industrial
              </a>
            </li>
            <li>
              <a
                href="http://www.abpi.org.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ABPI – Associação Brasileira da Propriedade Intelectual
              </a>
            </li>
            <li>
              <a
                href="http://www.aspi.org.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ASPI – Associação Paulista da Propriedade Intelectual
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-4 text-slate-500 bg-slate-950 text-xs">
        <p id="footer-info">
          Copyright © 2017 - 2024 <a href="">Perícias Forenses</a> |
          Desenvolvimento por Marcelo C. Plaza{" "}
          <a href="https://www.mcpdigital.com/" target="_blank" rel="noopener">
            MCP Digital
          </a>
        </p>
      </div>
    </div>
  );
};

export default PFooter;
