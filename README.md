<h1 align="center">
  <img alt="Proffy" title="Proffy" src=".github/logo.svg" width="160px"/>
</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NLW&message=02&color=8257E5&labelColor=000000" alt="NLW Together 02"/>

  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000" alt="License">
</p>

<br>

<p align="center">
  <img alt="Proffy" src=".github/cover.png" width="100%">
</p>

<br>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Knex](https://knexjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

O Proffy é uma plataforma de estudos que conecta alunos e professores de forma online.

O Proffy foi desenvolvido pensando em conectar e ajudar alunos a encontrarem professores sem precisar sair de casa ou fazer muito esforço.

Este é um projeto desenvolvido durante a **[Next Level Week #02](https://nextlevelweek.com/)**, apresentada nos dias 03 a 09 de Agosto de 2020.

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout Web](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web/duplicate)
- [Layout Mobile](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile/duplicate)

É necessário ter uma conta no [Figma](http://figma.com/) para acessá-lo.

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/rafaelramosdev/nlw-02-omnistack
$ cd nlw-02-omnistack
```

A aplicação é dividida em três partes: web, mobile e backend, a versão web e o aplicativo mobile precisam que o backend esteja sendo executado para funcionar. Para iniciar a aplicação, siga os passos abaixo:

## Rodando a versão backend

```bash
# Entra na pasta da versão backend
$ cd backend

# Instala as dependências
$ npm install

# Cria as migrates (tabelas do banco de dados)
$ npm run knex:migrate

# Inicia o server
$ npm run dev

# O servidor estará ouvindo a porta 3333 e estará disponível no endereço http://localhost:3333
```

## Rodando a versão web

```bash
# Entra na pasta da versão web
$ cd web

# Instala as dependências
$ npm install

# Inicia o website
$ npm run start
```

O website estará disponível no seu navegador pelo endereço [`http://localhost:3000`](http://localhost:3000).

## Rodando a versão mobile

```bash
# Entra na pasta da versão mobile
$ cd mobile

# Instala as dependências
$ npm install

# Inicia o aplicativo
$ expo start

# Se tiver algum problema com as fontes, execute o comando:
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
```

Com seu smartphone, escaneie o QRCode que aparecerá no terminal ou na página que abrir utilizando o aplicativo Expo.

É necessário ter o aplicativo Expo Go instalado no seu celular.

- [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [App Store](https://apps.apple.com/br/app/expo-go/id982107779)

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Fique ligado nas próximas edições do [Next Level Week](https://nextlevelweek.com/), é um evento gratuito que você não pode deixar passar, recomendo muito!

Feito by [Rafael Ramos](https://rafaelramos.dev/) 🙋🏻‍♂️
