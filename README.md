# Site atual da CJR (2024 - presente)

## _desenvolvido na stack da empresa: React, NextJs, TailwindCSS , Typescript_

### Algumas informações úteis:

- Cada seção do site está separado dentro de seções, presentes na pasta _./app/sections_;

- O arquivo .env do aplicativo contém informações para o uso de um bot no slack, mas está atualmente desativado devido ao nosso uso do make.com;

  - A pasta API contém a lógica para o desenvolvimento dessa bot do slack
    que está em desuso;

- Todas as animações foram feitas usando o React-transition-group e keyframes CSS e as imagens do site são vetores do site phosphoricons.com e se apresentam nos arquivos _./app/global.css_ e ._/components/SVGicons.tsx_, respectivamente;

- O arquivo _./app/components/botaoOrcamento.tsx_ é o arquivo que contém toda a lógica do funil de vendas conectado ao make.com;

  - O arquivo _./app/components/whatsappButton.tsx_ contém a lógica para mandar mensagem pelo whatsapp;

- Todas as cores usadas no site estão configuradas dentro do arquivo _./tailwind.config.ts_ e podem ser usadas com seu próprio nome dentro do código;

- A pasta portfolio se refere a uma página de portfólio que está atualmente desativada e precisa ser desenvolvida para finalizar o site;

- Dúvidas no código podem ser tratadas atualmente pelos desenvolvedores atuais do site (2024): @rafaelghiorzi @Luccambc @viniciusrsm;

`Código feito com amor`
