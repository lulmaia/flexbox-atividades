## 📋 Estrutura do Projeto

```
aula02/
├── components/
│   ├── ProfileCard.js           # Cartão estático
│   └── InteractiveProfileCard.js # Cartão interativo
├── App.js                       # Componente principal
└── README.md
```

## Lógica dos Componentes

# App.js

O App.js é o container principal, onde a sua função é reunir os cartões dentro de uma ScrollView, garantindo uma navegação fluida e o layout centralizado. Ele não possui estado próprio, apenas organiza e renderiza os demais componentes.

# ProfileCard.js

O ProfileCard.js é o cartão estático, responsável por exibir informações básicas de um personagem.
Ele é baseado em uma constante (PROFILE_DATA) que contém os dados do personagem, exibidos diretamente na interface, ele não utiliza hooks nem estado pois é um componente puramente de apresentação.

# InteractiveProfileCard.js

O InteractiveProfileCard.js é o cartão interativo, permitindo expandir ou retrair os detalhes de um personagem. Ele utiliza um estado booleano (expanded) para controlar se os detalhes estão visíveis ou ocultos. A função toggleExpand inverte esse estado e aplica uma animação de transição com LayoutAnimation, dessa forma o cartão alterna suavemente entre os modos expandido e reduzido.

