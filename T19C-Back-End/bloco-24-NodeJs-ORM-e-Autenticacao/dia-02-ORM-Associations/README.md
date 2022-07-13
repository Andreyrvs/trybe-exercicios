# Dia 02

✍ Anote aí: foreignKey sempre se refere ao model em que chamamos belongsToMany, enquanto otherKey se refere ao model com o qual estamos criando a associação, tal como no exemplo abaixo:

```javascript

ModelDeAssociação.associate = (models) => {
  models.ModelFonte.belongsToMany(models.ModelAlvo, {
    as: 'apelido_da_associação',
    through: ModelDeAssociação,
    foreignKey: 'id_da_fonte_na_tabela_da_associação',
    otherKey: 'id_do_alvo_na_tabela_da_associação',
  });
}
```

---

 aguardar exclusão em massa da interface de consulta ('livros') :P

```javascript
    await queryInterface.bulkDelete('Books', null, {});
```
