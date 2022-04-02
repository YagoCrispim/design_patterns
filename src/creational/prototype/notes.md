# Prototype:

### TIPO:

- Creational

### INTENÇÃO:

- Especificar os tipos de obj a serem criados usando uma instância-protótipo e criar novos objs
  pela cópia desse protótipo

### NOTAS:

- Um obj pode delegar para outro objeto caso ele não tenha a propriedade
- O tipo do obj que será criado é baseado no protótipo
- Usado para evitar recriar objetos 'caros'(obj que podem ser complicados de serem construídos ou
  caros computacionalmente)
- Ajuda a evitar a proliferação de classes com poucas mudanças uma das outras. Milhares de subclasses
  com diferenças mínimas entre eles
- Criada apenas com um método: clone. Esse método cria um clone da classe
- Evita que o cliente conheça a classe que está criando o objeto

### QUANDO USAR:

- Evitar explosão de subclassespara objs muito similares. Mais simples e flexível do que herança
- Evitar criar objs muito 'caros'

### BOM:

- Oculta classes concretas do cód cliente
- Bom item 1
- Bom item 2

### RUIM:

- Deep clone de objs com outros objs se torna muito complexo
