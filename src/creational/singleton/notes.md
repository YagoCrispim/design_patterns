# Prototype:

### TIPO:

- Creational

### INTENÇÃO:

- Garantir que uma classe tenha apenas uma única instância. Cara tentativa de instanciar novamente
  retorna a mesma instância já feita

### QUANDO USAR:

- Geralmente usado para acesso a recursos compartilhados. Ex: acesso a recursos compartilhados, 
  acesso ao banco de dados, logger e etc
- Também usado para substituir vars globais. Ex: arquivos de configuração

### BOM:

- Acesso controlado à uma instância
- Fácil permitir um maior número de instância para uma classe
- Usa lazy instanciation. Só é criado no momento do uso
- Substitui variáveis globais

### RUIM:

- Muito difícil testar. Ex: Um código que testa o singleton e muda um valor, no próximo
  teste pode ser que quebre pq o cód é único
- Viola o princípio da responsabilidade única
- Tratamento especial em caso de concorrência
