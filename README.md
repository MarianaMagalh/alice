# 📖 País das Palavras

Este é um projeto web interativo baseado no livro "Alice no País das Maravilhas", desenvolvido como uma ferramenta de leitura divertida para o público infantil.

## 🚀 Descrição

O "País das Palavras" é um site em React que permite aos usuários explorar a história de Alice de uma maneira nova. O site apresenta os capítulos do livro em um componente de "flipbook" (livro que vira a página), imitando uma experiência de leitura real.

A principal funcionalidade do projeto é o **Card de Busca**, que permite ao usuário:
* Pesquisar palavras específicas dentro do capítulo.
* Pesquisar palavras com uma quantidade específica de letras.
* Escolher uma cor para destacar as palavras encontradas no texto do livro.

## 💻 Tecnologias Utilizadas

* **Frontend:** React.js
* **Ambiente/Build:** Vite
* **Roteamento:** React Router DOM
* **Componente Livro:** `react-pageflip` (Para o efeito de virar a página)
* **Componente Carrossel:** `@splidejs/react-splide` (Usado na página Home)
* **Dados do Livro:** Os textos dos capítulos foram extraídos de um PDF e são servidos através de um arquivo `paginas.json`.

## ⚠️ Observação Importante (Bug Conhecido)

O componente do livro (`react-pageflip`) está com um bug conhecido que afeta a navegação entre os capítulos:

**Bug:** Ao navegar de um capítulo para outro (ex: do Capítulo 1 para o 2), as páginas do capítulo anterior podem aparecer duplicadas junto com as do novo capítulo.

**Solução temporária:** Se isso acontecer, basta **atualizar (recarregar) a página** (pressionando F5 ou Ctrl+R). O livro será reiniciado e mostrará apenas o capítulo correto.