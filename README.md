
# 🌿✨ **MindMove - Frontend Web Application** ✨🌿

<div align="center">

<img src="https://ik.imagekit.io/kv6tr431r/Projeto%20mindmove/LongoMindMoveSemfundo.png?updatedAt=1761756153500" alt="MindMove Logo" width="320"/>

---

<!-- BADGES PERSONALIZADOS MINDMOVE -->
![MindMove](https://img.shields.io/badge/MindMove-Wellness%20Platform-7D5FFF?style=for-the-badge&logo=spring&logoColor=white)
![Neurodiversidade](https://img.shields.io/badge/Neurodiversidade-Inclusão-FF7F50?style=for-the-badge)
![Equilíbrio](https://img.shields.io/badge/Corpo%20%2B%20Mente-Equilíbrio-00C49A?style=for-the-badge)
![Acessibilidade](https://img.shields.io/badge/Acessível-Para%20Todos-FFD166?style=for-the-badge)

<!-- TECNOLOGIAS -->
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-9466ff?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Router](https://img.shields.io/badge/React_Router_DOM-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

---

**Uma plataforma criada para apoiar pessoas neurodivergentes através de rotinas leves, respeitosas e conscientes.**

</div>

---

## 📘 **1. Sobre o Projeto**

O **MindMove Frontend** é uma aplicação web moderna, responsiva e acessível que conecta usuários ao universo do bem-estar, organizando atividades físicas leves voltadas para:

- Pessoas com **TDAH**
- Pessoas dentro do **espectro autista**
- Usuários com **alta ansiedade**
- Indivíduos com **altas habilidades**

A aplicação consome a API REST oficial do projeto, permitindo:

- Criação e listagem de **exercícios**
- Gerenciamento de **categorias**
- Visualização simplificada de rotinas
- Login e autenticação JWT

---

## 🎯 **2. Funcionalidades Principais**

### 🧍 Usuários
- Login e autenticação JWT  
- Cadastro de usuários  
- Atualização básica de perfil  

### 🏷️ Categorias
- Criar nova categoria  
- Listar categorias cadastradas  
- Visualizar exercícios relacionados  

### 🏋️ Exercícios
- Cadastrar exercícios  
- Exibir lista completa  
- Buscar por nome  
- Relacionar exercícios a uma categoria  

### 🧮 Funcionalidades Especiais
- Cálculo de IMC 

---

## 🧩 **3. Diagramas do Projeto**

Esses diagramas são utilizados apenas como referência estrutural, garantindo que a interface represente corretamente os dados:

### 🧱 Diagrama de Classes
<img src="https://ik.imagekit.io/kv6tr431r/Projeto%20mindmove/Tabelas%20relacionais/Design%20sem%20nome%20(3).png?updatedAt=1761756778852" width="650"/>

### 🗄️ Diagrama Entidade‑Relacionamento
<img src="https://ik.imagekit.io/kv6tr431r/Projeto%20mindmove/Tabelas%20relacionais/DERMindMove.png?updatedAt=1761754821968" width="650"/>

---

## 🛠️ **4. Tecnologias Utilizadas**

| Categoria | Tecnologias |
|----------|-------------|
| **Base** | React 18, Vite, JavaScript ES6+ |
| **Estilização** | TailwindCSS, CSS3 |
| **Integração** | Axios |
| **Roteamento** | React Router DOM |
| **Organização** | ESLint, Prettier |

---

## 📂 **5. Estrutura do Projeto**

```
MindMove-Frontend/
public/
src/
│
├── assets/
│
├── components/
│   ├── carrossel/
│   │   ├── Carrossel.tsx
│   │   ├── Slide01.tsx
│   │   ├── Slide02.tsx
│   │   ├── Slide03.tsx
│   │   ├── Slide04.tsx
│   │   └── Slide05.tsx
│   │
│   ├── exercicio/
│   │   ├── CardExercicio.tsx
│   │   ├── FormExercicio.tsx
│   │   ├── DeletarExercicio.tsx
│   │   └── ListarExercicio.tsx
│   │
│   ├── categoria/
│   │   ├── CardCategoria.tsx
│   │   ├── FormCategoria.tsx
│   │   ├── DeletarCategoria.tsx
│   │   └── ListarCategoria.tsx
│   │
│   ├── footer/
│   │   └── Footer.tsx
│   │
│   └── navbar/
│       └── Navbar.tsx
│
├── contexts/
│   └── AuthContext.tsx
│
├── models/
│   ├── Categoria.ts
│   ├── Exercicio.ts
│   ├── Usuario.ts
│   └── UsuarioLogin.ts
│
├── pages/
│   ├── cadastro/
│   │   └── Cadastro.tsx
│   │
│   ├── home/
│   │   └── Home.tsx
│   │
│   ├── login/
│   │   └── Login.tsx
│   │
│   ├── perfil/
│   │   └── Perfil.tsx
│   │
│   └── sobrenos/
│       └── SobreNos.tsx
│
├── services/
│   └── Service.ts
│
├── utils/
│   └── ToastAlerta.tsx
│
├── App.css
├── App.tsx
├── index.css
├── main.tsx
│
.gitignore
README.md
eslint.config.js
index.html
package-lock.json
package.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
---
```



## 🔗 **6. Comunicação com Backend**

| Método | Endpoint | Função |
|--------|-----------|---------|
| POST | /usuarios/cadastrar | Criar usuário |
| POST | /usuarios/logar | Fazer login |
| POST | /usuarios/calcularIMC/{id} | Calcular IMC |
| GET | /exercicios | Listar exercícios |
| POST | /exercicios | Criar exercício |
| GET | /exercicios/nome/{nome} | Buscar exercício |
| GET | /categorias | Listar categorias |
| POST | /categorias | Criar categoria |

---

## 📱 **8. Responsividade**

- Mobile‑first  
- Adaptado para TDAH (layout limpo, alto espaçamento, cores suaves)  
- Acessível para leitores de tela  

---

## 🚢 **9. Deploy**

### Build
```bash
npm run build
```

### Plataformas recomendadas
- 🌐 Vercel 

---

## 🤝 **10. Contribuindo**

Pull requests são sempre bem‑vindos! 

## 👥 **11. Equipe TechBloom**

| Integrante | GitHub |
|-----------|--------|
| Andressa Funes | https://github.com/andressafunes |
| Bianca da Silva | https://github.com/bianca-msilva |
| Geovana Cazali | https://github.com/sgeo21 |
| Priscila Lins | https://github.com/PriscilaMrozinski |
| Rayssa Ferraz | https://github.com/Rayssa-Ferraz |
| Sofia de Araújo | https://github.com/sofia-araujo |
| Thuany da Silva | https://github.com/ThuanyAline |




### 🌈 *MindMove — Movimento com propósito, equilíbrio com gentileza.*  
✨ Desenvolvido com carinho pela equipe **TechBloom** ✨  



