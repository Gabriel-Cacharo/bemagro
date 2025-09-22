# Projeto desafio BemAgro 💚

Dashboard para consultas de previsões meteorológicas para o desafio da vaga da BemAgro.

## ➡️ Iniciar projeto

Para iniciar o projeto, basta executar os seguintes passos:

```bash
git clone <URL>
```

```bash
npm i
```

- Coloque sua API KEY da OpenWeather em src/environments/environment.ts

```bash
npm start
```

## ➡️ Integrações

Nesse projeto, foram utilizadas as seguintes integrações:

- Leaflet
- Nominatim 4.4.0
- OpenWeatherMap
- Material Design
- Cloudflare workers

## ➡️ Porque utilizei Cloudflare Workers

Para a integração com o Nominatim eu estava enfrentando problemas de CORS no navegador por conta da resposta da API. Então, para não fazer um backend apenas para isso, resolvi utilizar o Cloudflare Workers e fazer um proxy na chamada para a API.
