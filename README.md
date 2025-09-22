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

- Coloque sua API KEY da OpenWeather em `openWeatherApiKey` localizado no arquivo: src/environments/environment.ts
- Você pode utilizar essa API KEY para testes: "5a7c74c7570b9f02b6887e8d38c9fec6"

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
