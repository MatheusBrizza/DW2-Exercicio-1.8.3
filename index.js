// run `node index.js` in the terminal
/*
function url(prot, dom, pat1, pat2, pat3) {
  const protocolo = prot + '://';

  const dominio = dom;

  const path1 = '/' + pat1;

  const path2 = '/' + pat2;

  const path3 = '/' + pat3;

  const query(var1 , bar2) = {
    quartos: undefined,
    semFiadorGarantia: undefined,
  };
  const formatacaoQuery = '?' + JSON.stringify(query);
  return protocolo + dominio + path1 + path2 + path3 + formatacaoQuery;
}
console.log(
  url(
    'https',
    'auxiliadorapredial',
    'alugar',
    'residencial',
    'rs+porto-alegre+cidade-baixa'
  )
);
*/

function gerarURL(protocolo, dominio, options) {
  const { paths, queries } = options;
  const pathString = paths.join('/').replace(/\s/g, '+');
  const queriesString = new URLSearchParams(queries).toString();
  return `${protocolo}//${dominio}/${pathString}?${queriesString}`;
}

const url = gerarURL('https', 'www.auxiliadorapredial.com.br', {
  paths: ['alugar', 'residencial', 'rs porto-alegre cidade-baixa'],
  queries: {
    quartos: 2,
    'sem-fiador-ou-garantias': true,
  },
});

console.log(url);
