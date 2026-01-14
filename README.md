# 🚀 Meu Portfólio Profissional

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

Este projeto é o meu portfólio pessoal, desenvolvido para apresentar meus projetos, habilidades e experiências profissionais de forma interativa e moderna.

🔗 **Acesse online:** [https://portfolio-beryl-one-54.vercel.app](https://portfolio-beryl-one-54.vercel.app)

## 🛠️ Tecnologias Utilizadas

* **Frontend:** Angular 17+ (Standalone Components)
* **Estilização:** CSS3 Moderno (Responsivo)
* **Formulário:** Integração com Formspree
* **Segurança:** Google reCAPTCHA V2
* **Backend (Serverless):** Node.js via Vercel Serverless Functions (para validação segura do Captcha)
* **Deploy:** Vercel

## ✨ Funcionalidades

* ✅ **Design Responsivo:** Adaptável para mobile, tablet e desktop.
* ✅ **Formulário Seguro:** Validação de robôs via API Serverless para proteger contra spam.
* ✅ **Arquitetura Limpa:** Componentização e uso de boas práticas do Angular.
* ✅ **Feedback Visual:** Alertas de sucesso/erro e validação de campos em tempo real.

## 💻 Como rodar localmente

Pré-requisitos: Node.js e Angular CLI instalados.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/gllbob/Portfolio.git
    cd Portfolio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor:**
    ```bash
    ng serve
    ```
    O projeto rodará em `http://localhost:4200/`.

*Nota: A validação do Captcha foi configurada para ser simulada em ambiente local (localhost) para facilitar o desenvolvimento.*

## 🐳 Rodando com Docker

```bash
docker build -t meu-portfolio .
docker run -p 4200:4200 meu-portfolio
